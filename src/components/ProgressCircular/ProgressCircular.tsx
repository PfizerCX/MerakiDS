import { forwardRef, useEffect, useRef, useState } from 'react';
import './ProgressCircular.css';

export interface ProgressCircularProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current progress value (0–100). Ignored when `indeterminate` is true. */
  value?: number;
  /** Renders the indeterminate (spinning) animation. */
  indeterminate?: boolean;
  /** Marks the task as complete — ring turns positive and a check icon appears. */
  complete?: boolean;
  /** Size variant. */
  size?: 'sm' | 'lg';
  /** Whether to show the percentage text in the center. Ignored when `complete`. */
  showPercentage?: boolean;
}

const SIZES = {
  sm: { dimension: 56, strokeWidth: 4, radius: 24, fontSize: 'button-s' },
  lg: { dimension: 96, strokeWidth: 6, radius: 41, fontSize: 'button-m' },
} as const;

/** One full cycle duration. Matches Flutter M3 CircularProgressIndicator (year2023: false) default feel. */
const DURATION_MS = 2000;

/** Ease-in-out curve for arc grow/shrink, similar to M3 motion. */
function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

const LOOP_HOLD = 0.03;
const LOOP_BLEND = 0.04;

const LOOP_STATE = (c: number): [number, number] => [c * 0.2, 0];

/**
 * Indeterminate arc: grow → trailing edge almost catches front → finish and reset.
 * Reference: Flutter CircularProgressIndicator (second style, year2023: false) —
 * gap between active/inactive, rounded cap, clockwise grow-then-shrink cycle.
 */
function indeterminateDash(circumference: number, progress: number): [number, number] {
  if (progress < LOOP_HOLD || progress >= 1 - LOOP_HOLD) {
    return LOOP_STATE(circumference);
  }
  const e = easeInOut(progress);
  let dashLength: number;
  let offsetFactor: number;
  if (e < 0.4) {
    const s = e / 0.4;
    dashLength = 0.2 + (0.65 - 0.2) * s;
    offsetFactor = 0.35 * s;
  } else if (e < 0.7) {
    const s = (e - 0.4) / 0.3;
    dashLength = 0.65 + (0.88 - 0.65) * s;
    offsetFactor = 0.35 + 0.35 * s;
  } else {
    const s = (e - 0.7) / 0.3;
    dashLength = 0.88 + (0.2 - 0.88) * s;
    offsetFactor = 0.7 + 0.3 * s;
  }
  let dash = circumference * dashLength;
  let off = -circumference * offsetFactor;
  if (progress >= 1 - LOOP_HOLD - LOOP_BLEND) {
    const blend = (progress - (1 - LOOP_HOLD - LOOP_BLEND)) / LOOP_BLEND;
    const [l0] = LOOP_STATE(circumference);
    dash = dash + (l0 - dash) * blend;
    off = off * (1 - blend);
  } else if (progress < LOOP_HOLD + LOOP_BLEND) {
    const blend = (progress - LOOP_HOLD) / LOOP_BLEND;
    const [l0] = LOOP_STATE(circumference);
    dash = l0 + (dash - l0) * blend;
    off = off * blend;
  }
  return [dash, off];
}

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

const ProgressCircular = forwardRef<HTMLDivElement, ProgressCircularProps>(
  (
    {
      value = 0,
      indeterminate = false,
      complete = false,
      size = 'sm',
      showPercentage = true,
      className,
      ...props
    },
    ref,
  ) => {
    const pct = clamp(value, 0, 100);
    const cfg = SIZES[size];
    const circumference = 2 * Math.PI * cfg.radius;
    const offset = circumference - (circumference * (complete ? 100 : pct)) / 100;

    const [indeterminateDashState, setIndeterminateDashState] = useState<[number, number]>([
      circumference * 0.2,
      0,
    ]);
    const rafRef = useRef<number>(0);
    const startRef = useRef<number>(0);

    useEffect(() => {
      if (!indeterminate) return;
      const tick = (now: number) => {
        if (!startRef.current) startRef.current = now;
        let elapsed = now - startRef.current;
        if (elapsed >= DURATION_MS) {
          startRef.current = now - (elapsed % DURATION_MS);
          elapsed = elapsed % DURATION_MS;
        }
        const progress = elapsed / DURATION_MS;
        setIndeterminateDashState(indeterminateDash(circumference, progress));
        rafRef.current = requestAnimationFrame(tick);
      };
      startRef.current = 0;
      rafRef.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(rafRef.current);
    }, [indeterminate, circumference]);

    const indicatorDasharray =
      indeterminate ? `${indeterminateDashState[0]} ${circumference}` : circumference;
    const indicatorDashoffset = indeterminate ? indeterminateDashState[1] : offset;

    return (
      <div
        ref={ref}
        className={['mds-progress-circular', className].filter(Boolean).join(' ')}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : pct}
        aria-valuemin={0}
        aria-valuemax={100}
        data-size={size}
        data-indeterminate={indeterminate || undefined}
        data-complete={complete || undefined}
        style={{ '--_dimension': `${cfg.dimension}px` } as React.CSSProperties}
        {...props}
      >
        <svg
          className="mds-progress-circular__svg"
          viewBox={`0 0 ${cfg.dimension} ${cfg.dimension}`}
          width={cfg.dimension}
          height={cfg.dimension}
        >
          <circle
            className="mds-progress-circular__track"
            cx={cfg.dimension / 2}
            cy={cfg.dimension / 2}
            r={cfg.radius}
            strokeWidth={cfg.strokeWidth}
          />
          <circle
            className="mds-progress-circular__indicator"
            cx={cfg.dimension / 2}
            cy={cfg.dimension / 2}
            r={cfg.radius}
            strokeWidth={cfg.strokeWidth}
            strokeDasharray={indicatorDasharray}
            strokeDashoffset={indicatorDashoffset}
          />
        </svg>

        <div className="mds-progress-circular__center">
          {complete ? (
            <svg
              className="mds-progress-circular__check"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9.55 17.575L4.225 12.25L5.65 10.825L9.55 14.725L18.35 5.925L19.775 7.35L9.55 17.575Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            showPercentage && !indeterminate && (
              <span className="mds-progress-circular__text">{Math.round(pct)}%</span>
            )
          )}
        </div>
      </div>
    );
  },
);

ProgressCircular.displayName = 'ProgressCircular';

export { ProgressCircular };
