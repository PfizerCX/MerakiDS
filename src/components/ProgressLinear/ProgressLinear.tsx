import { forwardRef } from 'react';
import './ProgressLinear.css';

export interface ProgressLinearProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current progress value (0–100). Ignored when `indeterminate` is true. */
  value?: number;
  /** Renders the indeterminate (looping) animation instead of a fixed bar. */
  indeterminate?: boolean;
  /** Whether the task has completed successfully. Overrides the bar color to positive. */
  complete?: boolean;
  /** Top label displayed above the progress bar. */
  progressLabel?: string;
  /** Bottom label displayed below the progress bar. */
  contextLabel?: string;
  /** Whether to show the progress label. */
  showLabel?: boolean;
}

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

const ProgressLinear = forwardRef<HTMLDivElement, ProgressLinearProps>(
  (
    {
      value = 0,
      indeterminate = false,
      complete = false,
      progressLabel,
      contextLabel,
      showLabel = true,
      className,
      ...props
    },
    ref,
  ) => {
    const pct = clamp(value, 0, 100);

    return (
      <div
        ref={ref}
        className={['mds-progress-linear', className].filter(Boolean).join(' ')}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : pct}
        aria-valuemin={0}
        aria-valuemax={100}
        data-indeterminate={indeterminate || undefined}
        data-complete={complete || undefined}
        {...props}
      >
        {showLabel && progressLabel && (
          <span className="mds-progress-linear__label">{progressLabel}</span>
        )}

        <div className="mds-progress-linear__track">
          <div className="mds-progress-linear__base" />
          <div
            className="mds-progress-linear__bar"
            style={
              !indeterminate ? { width: `${complete ? 100 : pct}%` } : undefined
            }
          />
        </div>

        {showLabel && contextLabel && (
          <span className="mds-progress-linear__context">{contextLabel}</span>
        )}
      </div>
    );
  },
);

ProgressLinear.displayName = 'ProgressLinear';

export { ProgressLinear };
