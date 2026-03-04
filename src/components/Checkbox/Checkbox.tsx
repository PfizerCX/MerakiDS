import { forwardRef, useId } from 'react';
import './Checkbox.css';

/* ---------------------------------------------------------------------------
   Checkbox — single checkbox input with label
   --------------------------------------------------------------------------- */

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Text label displayed next to the checkbox */
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id: externalId, disabled, ...props }, ref) => {
    const generatedId = useId();
    const checkboxId = externalId || generatedId;

    return (
      <label
        className={['mds-checkbox', className].filter(Boolean).join(' ')}
        htmlFor={checkboxId}
        data-disabled={disabled || undefined}
      >
        <input
          ref={ref}
          id={checkboxId}
          type="checkbox"
          className="mds-checkbox-input"
          disabled={disabled}
          {...props}
        />
        {label && <span className="mds-checkbox-label">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

/* ---------------------------------------------------------------------------
   CheckboxGroup — wraps multiple Checkbox items with a shared label / helper
   --------------------------------------------------------------------------- */

export interface CheckboxGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Group label displayed above the checkboxes */
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

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
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
        className={['mds-checkbox-group', className].filter(Boolean).join(' ')}
        role="group"
        aria-label={label}
        data-error={error || undefined}
        {...props}
      >
        {label && (
          <div className="mds-checkbox-group-label">
            {required && <span className="mds-checkbox-group-required">*</span>}
            <span>{label}</span>
          </div>
        )}
        <div className="mds-checkbox-group-options">{children}</div>
        {(helperText || showError) && (
          <p className="mds-checkbox-group-helper">
            {showError ? errorText : helperText}
          </p>
        )}
      </div>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';

export { Checkbox, CheckboxGroup };
