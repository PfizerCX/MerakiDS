import { forwardRef, useCallback, useId } from 'react';
import { Add } from '../../icons/Add';
import { Subtract } from '../../icons/Subtract';
import './Stepper.css';

export interface StepperProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current numeric value */
  value?: number;
  /** Minimum allowed value */
  min?: number;
  /** Maximum allowed value */
  max?: number;
  /** Increment/decrement step size */
  step?: number;
  /** Label displayed above the stepper */
  label?: string;
  /** Helper text displayed below the stepper */
  helperText?: string;
  /** Whether the field is required (shows asterisk) */
  required?: boolean;
  /** Whether the stepper is disabled */
  disabled?: boolean;
  /** Callback fired when the value changes */
  onChange?: (value: number) => void;
}

const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      value = 0,
      min = 0,
      max = Infinity,
      step = 1,
      label,
      helperText,
      required = false,
      disabled = false,
      className,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const labelId = `${generatedId}-label`;
    const helperId = `${generatedId}-helper`;

    const decrement = useCallback(() => {
      const next = value - step;
      if (next >= min) onChange?.(next);
    }, [value, step, min, onChange]);

    const increment = useCallback(() => {
      const next = value + step;
      if (next <= max) onChange?.(next);
    }, [value, step, max, onChange]);

    const atMin = value <= min;
    const atMax = value >= max;

    return (
      <div
        ref={ref}
        className={['mds-stepper', className].filter(Boolean).join(' ')}
        data-disabled={disabled || undefined}
        role="group"
        aria-labelledby={label ? labelId : undefined}
        aria-describedby={helperText ? helperId : undefined}
        {...props}
      >
        {label && (
          <div className="mds-stepper__label" id={labelId}>
            <span>{label}</span>
            {required && <span className="mds-stepper__required">*</span>}
          </div>
        )}
        <div className="mds-stepper__controls">
          <button
            type="button"
            className="mds-stepper__btn"
            onClick={decrement}
            disabled={disabled || atMin}
            aria-label="Decrease value"
            tabIndex={disabled ? -1 : 0}
          >
            <Subtract size={24} />
          </button>
          <output className="mds-stepper__value">{value}</output>
          <button
            type="button"
            className="mds-stepper__btn"
            onClick={increment}
            disabled={disabled || atMax}
            aria-label="Increase value"
            tabIndex={disabled ? -1 : 0}
          >
            <Add size={24} />
          </button>
        </div>
        {helperText && (
          <p className="mds-stepper__helper" id={helperId}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Stepper.displayName = 'Stepper';

export { Stepper };
