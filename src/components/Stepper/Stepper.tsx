import { forwardRef, Fragment } from 'react';
import { Check } from '../../icons/Check';
import './Stepper.css';

export type StepperStepState = 'default' | 'active' | 'completed';

export interface StepperStep {
  /** Optional label shown below the step circle */
  label?: string;
  /** Optional explicit state; if omitted, derived from currentStep index */
  state?: StepperStepState;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Total number of steps (minimum 2). */
  totalSteps?: number;
  /** Current active step (1-based). Steps before are completed, this step is active, rest are default. */
  currentStep?: number;
  /** Optional labels for each step. Length can match totalSteps. */
  labels?: string[];
  /** Whether to show labels beneath each step circle. */
  showLabels?: boolean;
}

function getStepState(
  stepIndex: number,
  currentStep: number
): StepperStepState {
  const oneBased = stepIndex + 1;
  if (oneBased < currentStep) return 'completed';
  if (oneBased === currentStep) return 'active';
  return 'default';
}

const Stepper = forwardRef<HTMLDivElement, StepperProps>(
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
    const safeCurrent = Math.max(1, Math.min(currentStep, totalSteps));

    return (
      <div
        ref={ref}
        className={['mds-stepper', className].filter(Boolean).join(' ')}
        role="group"
        aria-label="Progress"
        {...props}
      >
        {steps.map((stepNumber, index) => {
          const state = getStepState(index, safeCurrent);
          const label = labels?.[index] ?? (showLabels ? `Step ${stepNumber}` : undefined);

          return (
            <Fragment key={stepNumber}>
              <div className="mds-stepper__step">
                <div
                  className="mds-stepper__circle"
                  data-state={state}
                  aria-current={state === 'active' ? 'step' : undefined}
                  aria-label={`Step ${stepNumber}${state === 'completed' ? ', completed' : state === 'active' ? ', current' : ''}`}
                >
                  {state === 'completed' ? (
                    <Check
                      size={24}
                      className="mds-stepper__check"
                      style={{ color: '#ffffff' }}
                      aria-hidden
                    />
                  ) : (
                    <span className="mds-stepper__number">{stepNumber}</span>
                  )}
                </div>
                {showLabels && label && (
                  <span className="mds-stepper__label">{label}</span>
                )}
              </div>
              {index < totalSteps - 1 && (
                <div
                  className="mds-stepper__divider"
                  data-state={
                    index + 1 < safeCurrent
                      ? 'completed'
                      : index + 1 === safeCurrent
                        ? 'active'
                        : 'default'
                  }
                  aria-hidden
                >
                  <span className="mds-stepper__divider-line" />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    );
  }
);

Stepper.displayName = 'Stepper';

export { Stepper };
