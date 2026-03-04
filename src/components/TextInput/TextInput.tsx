import { forwardRef, useState, useId } from 'react';
import { ErrorCircle } from '../../icons/ErrorCircle';
import { Warning } from '../../icons/Warning';
import { CheckCircle } from '../../icons/CheckCircle';
import './TextInput.css';

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Text label displayed above or inside the input */
  label?: string;
  /** Optional caption text displayed below the input */
  caption?: string;
  /** Shows error validation state */
  error?: boolean;
  /** Shows warning validation state */
  warning?: boolean;
  /** Shows success validation state */
  success?: boolean;
  /** Optional icon element on the right side of the input */
  icon?: React.ReactNode;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      caption,
      error = false,
      warning = false,
      success = false,
      icon,
      required,
      disabled,
      className,
      value,
      defaultValue,
      id: externalId,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = externalId || generatedId;
    const captionId = `${inputId}-caption`;

    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const hasValue = currentValue !== '' && currentValue != null;
    const isFloating = focused || hasValue;

    const validationState = error
      ? 'error'
      : warning
        ? 'warning'
        : success
          ? 'success'
          : undefined;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(e);
    };

    return (
      <div
        className={['mds-text-input', className].filter(Boolean).join(' ')}
        data-focused={focused || undefined}
        data-validation={validationState || undefined}
        data-disabled={disabled || undefined}
        data-floating={isFloating || undefined}
      >
        {isFloating && label && (
          <label className="mds-text-input__label" htmlFor={inputId}>
            {required && <span className="mds-text-input__required">*</span>}
            {label}
          </label>
        )}

        <div className="mds-text-input__field">
          <input
            ref={ref}
            id={inputId}
            className="mds-text-input__input"
            disabled={disabled}
            required={required}
            value={isControlled ? value : undefined}
            defaultValue={!isControlled ? defaultValue : undefined}
            placeholder={isFloating ? undefined : label}
            aria-invalid={error || undefined}
            aria-describedby={caption ? captionId : undefined}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => {
              if (!isControlled) setInternalValue(e.target.value);
              props.onChange?.(e);
            }}
            {...props}
          />

          {!isFloating && required && (
            <span className="mds-text-input__required mds-text-input__required--inline">
              *
            </span>
          )}

          {validationState === 'error' && (
            <span className="mds-text-input__status-icon mds-text-input__status-icon--error">
              <ErrorCircle size={24} />
            </span>
          )}
          {validationState === 'warning' && (
            <span className="mds-text-input__status-icon mds-text-input__status-icon--warning">
              <Warning size={24} />
            </span>
          )}
          {validationState === 'success' && (
            <span className="mds-text-input__status-icon mds-text-input__status-icon--success">
              <CheckCircle size={24} />
            </span>
          )}

          {!validationState && icon && (
            <span className="mds-text-input__icon">{icon}</span>
          )}
        </div>

        {caption && (
          <p className="mds-text-input__caption" id={captionId}>
            {caption}
          </p>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export { TextInput };
