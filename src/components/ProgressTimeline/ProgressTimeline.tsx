import { forwardRef, Fragment } from 'react';
import './ProgressTimeline.css';

export interface ProgressTimelineProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Total number of steps to display (minimum 2) */
  totalSteps?: number;
  /** The current active step (1-indexed). Steps up to and including this value are marked active. */
  currentStep?: number;
  /** Labels for each step. If provided, the array length should match totalSteps. */
  labels?: string[];
  /** Whether to show description labels beneath each step circle */
  showLabels?: boolean;
}

const ProgressTimeline = forwardRef<HTMLDivElement, ProgressTimelineProps>(
  (
    {
      totalSteps = 3,
      currentStep = 1,
      labels,
      showLabels = true,
      className,
      ...props
    },
    ref
  ) => {
    const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

    return (
      <div
        ref={ref}
        className={['mds-progress-timeline', className]
          .filter(Boolean)
          .join(' ')}
        role="group"
        aria-label="Progress"
        {...props}
      >
        {steps.map((step, index) => (
          <Fragment key={step}>
            <div className="mds-progress-timeline__step">
              <div
                className="mds-progress-timeline__circle"
                data-active={step <= currentStep || undefined}
                aria-current={step === currentStep ? 'step' : undefined}
              >
                <span className="mds-progress-timeline__number">{step}</span>
              </div>
              {showLabels && (
                <span className="mds-progress-timeline__label">
                  {labels?.[index] ?? `Step ${step}`}
                </span>
              )}
            </div>
            {index < totalSteps - 1 && (
              <div className="mds-progress-timeline__divider">
                <div className="mds-progress-timeline__divider-line" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    );
  }
);

ProgressTimeline.displayName = 'ProgressTimeline';

export { ProgressTimeline };
