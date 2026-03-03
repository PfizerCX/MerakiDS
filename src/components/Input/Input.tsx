import { forwardRef, useId } from 'react';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorText?: string;
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error = false,
      errorText,
      size = 'md',
      leftIcon,
      rightIcon,
      className,
      disabled,
      id: externalId,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = externalId || generatedId;
    const helperId = `${inputId}-helper`;
    const showError = error && errorText;

    return (
      <div
        className={['mds-input-wrapper', className].filter(Boolean).join(' ')}
        data-size={size}
        data-error={error || undefined}
        data-disabled={disabled || undefined}
      >
        {label && (
          <label className="mds-input-label" htmlFor={inputId}>
            {label}
          </label>
        )}
        <div className="mds-input-field">
          {leftIcon && <span className="mds-input-icon mds-input-icon--left">{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            className="mds-input"
            disabled={disabled}
            aria-invalid={error || undefined}
            aria-describedby={helperText || showError ? helperId : undefined}
            {...props}
          />
          {rightIcon && <span className="mds-input-icon mds-input-icon--right">{rightIcon}</span>}
        </div>
        {(helperText || showError) && (
          <p className="mds-input-helper" id={helperId}>
            {showError ? errorText : helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
