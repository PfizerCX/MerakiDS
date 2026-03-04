import { forwardRef, useId } from 'react';
import './Radio.css';

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Text label displayed next to the radio button */
  label?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, id: externalId, disabled, ...props }, ref) => {
    const generatedId = useId();
    const radioId = externalId || generatedId;

    return (
      <label
        className={['mds-radio', className].filter(Boolean).join(' ')}
        htmlFor={radioId}
        data-disabled={disabled || undefined}
      >
        <input
          ref={ref}
          id={radioId}
          type="radio"
          className="mds-radio-input"
          disabled={disabled}
          {...props}
        />
        {label && <span className="mds-radio-label">{label}</span>}
      </label>
    );
  }
);

Radio.displayName = 'Radio';

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Group label displayed above the radio buttons */
  label?: string;
  /** Show a required indicator (*) next to the label */
  required?: boolean;
  /** Helper or caption text below the options */
  helperText?: string;
  /** Toggle error styling */
  error?: boolean;
  /** Error message (shown in place of helperText when error is true) */
  errorText?: string;
}

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      label,
      required = false,
      helperText,
      error = false,
      errorText,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const showError = error && errorText;

    return (
      <div
        ref={ref}
        className={['mds-radio-group', className].filter(Boolean).join(' ')}
        role="radiogroup"
        aria-label={label}
        data-error={error || undefined}
        {...props}
      >
        {label && (
          <div className="mds-radio-group-label">
            {required && <span className="mds-radio-group-required">*</span>}
            <span>{label}</span>
          </div>
        )}
        <div className="mds-radio-group-options">{children}</div>
        {(helperText || showError) && (
          <p className="mds-radio-group-helper">
            {showError ? errorText : helperText}
          </p>
        )}
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export { Radio, RadioGroup };
