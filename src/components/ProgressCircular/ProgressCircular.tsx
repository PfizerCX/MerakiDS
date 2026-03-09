import { forwardRef } from 'react';
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
        style={
          {
            '--_dimension': `${cfg.dimension}px`,
          } as React.CSSProperties
        }
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
            strokeDasharray={circumference}
            strokeDashoffset={indeterminate ? circumference * 0.75 : offset}
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
