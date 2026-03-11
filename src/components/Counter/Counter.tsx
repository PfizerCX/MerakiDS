import { forwardRef, useCallback, useId, type ChangeEvent } from 'react';
import { Add } from '../../icons/Add';
import { Subtract } from '../../icons/Subtract';
import './Counter.css';

export interface CounterProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current numeric value */
  value?: number;
  /** Minimum allowed value */
  min?: number;
  /** Maximum allowed value */
  max?: number;
  /** Increment/decrement step size */
  step?: number;
  /** Label displayed above the counter */
  label?: string;
  /** Helper text displayed below the counter */
  helperText?: string;
  /** Whether the field is required (shows asterisk) */
  required?: boolean;
  /** Whether the counter is disabled */
  disabled?: boolean;
  /** Callback fired when the value changes */
  onChange?: (value: number) => void;
}

const Counter = forwardRef<HTMLDivElement, CounterProps>(
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

    const handleInputChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        if (raw === '' || raw === '-') return;
        const parsed = Number(raw);
        if (!Number.isNaN(parsed)) {
          const clamped = Math.min(max, Math.max(min, parsed));
          onChange?.(clamped);
        }
      },
      [min, max, onChange]
    );

    const inputId = `${generatedId}-input`;

    return (
      <div
        ref={ref}
        className={['mds-counter', className].filter(Boolean).join(' ')}
        data-disabled={disabled || undefined}
        role="group"
        aria-labelledby={label ? labelId : undefined}
        aria-describedby={helperText ? helperId : undefined}
        {...props}
      >
        {label && (
          <label className="mds-counter__label" id={labelId} htmlFor={inputId}>
            <span>{label}</span>
            {required && <span className="mds-counter__required">*</span>}
          </label>
        )}
        <div className="mds-counter__controls">
          <button
            type="button"
            className="mds-counter__btn"
            onClick={decrement}
            disabled={disabled || atMin}
            aria-label="Decrease value"
            tabIndex={disabled ? -1 : 0}
          >
            <Subtract size={24} />
          </button>
          <input
            id={inputId}
            type="text"
            inputMode="numeric"
            className="mds-counter__value"
            value={value}
            onChange={handleInputChange}
            disabled={disabled}
            aria-labelledby={label ? labelId : undefined}
          />
          <button
            type="button"
            className="mds-counter__btn"
            onClick={increment}
            disabled={disabled || atMax}
            aria-label="Increase value"
            tabIndex={disabled ? -1 : 0}
          >
            <Add size={24} />
          </button>
        </div>
        {helperText && (
          <p className="mds-counter__helper" id={helperId}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Counter.displayName = 'Counter';

export { Counter };
