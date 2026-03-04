import { forwardRef, useId, useState } from 'react';
import { ErrorCircle } from '../../icons/ErrorCircle';
import './TextArea.css';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label displayed above or inside the textarea field */
  label?: string;
  /** Helper text displayed below the textarea */
  caption?: string;
  /** Whether the textarea is in an error state */
  error?: boolean;
  /** Error message shown below the field when error is true */
  errorText?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      caption,
      error = false,
      errorText,
      required = false,
      className,
      disabled,
      id: externalId,
      value,
      defaultValue,
      onFocus,
      onBlur,
      onChange,
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
    const hasValue = String(currentValue).length > 0;
    const showCaption = caption || (error && errorText);

    return (
      <div
        className={['mds-textarea-wrapper', className].filter(Boolean).join(' ')}
        data-error={error || undefined}
        data-disabled={disabled || undefined}
        data-focused={focused || undefined}
        data-filled={hasValue || undefined}
      >
        {label && (
          <label className="mds-textarea-label" htmlFor={inputId}>
            {required && <span className="mds-textarea-required">*</span>}
            {label}
          </label>
        )}
        <div className="mds-textarea-field">
          <textarea
            ref={ref}
            id={inputId}
            className="mds-textarea"
            disabled={disabled}
            required={required}
            value={isControlled ? value : internalValue}
            aria-invalid={error || undefined}
            aria-describedby={showCaption ? captionId : undefined}
            onFocus={(e) => {
              setFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              onBlur?.(e);
            }}
            onChange={(e) => {
              if (!isControlled) setInternalValue(e.target.value);
              onChange?.(e);
            }}
            {...props}
          />
          {error && (
            <span className="mds-textarea-error-icon">
              <ErrorCircle size={24} />
            </span>
          )}
        </div>
        {showCaption && (
          <p className="mds-textarea-caption" id={captionId}>
            {error && errorText ? errorText : caption}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export { TextArea };
