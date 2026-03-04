import {
  forwardRef,
  useCallback,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  useMemo,
  type KeyboardEvent,
  type ClipboardEvent,
} from 'react';
import './PinCode.css';

export interface PinCodeProps {
  /** Text label displayed above the pin inputs */
  label?: string;
  /** Number of PIN digit fields */
  fields?: 4 | 6;
  /** Current PIN value (controlled) */
  value?: string;
  /** Default PIN value (uncontrolled) */
  defaultValue?: string;
  /** Callback fired when the PIN value changes */
  onChange?: (value: string) => void;
  /** Callback fired when all fields are filled */
  onComplete?: (value: string) => void;
  /** Show error state */
  error?: boolean;
  /** Error helper text */
  errorText?: string;
  /** Show warning state */
  warning?: boolean;
  /** Warning helper text */
  warningText?: string;
  /** Show success state */
  success?: boolean;
  /** Success helper text */
  successText?: string;
  /** Default helper text */
  helperText?: string;
  /** Disable all inputs */
  disabled?: boolean;
  /** Auto-focus the first input on mount */
  autoFocus?: boolean;
  /** Mask the entered digits */
  mask?: boolean;
  /** Additional CSS class for the wrapper */
  className?: string;
}

export interface PinCodeRef {
  focus: () => void;
  clear: () => void;
}

const PinCode = forwardRef<PinCodeRef, PinCodeProps>(
  (
    {
      label,
      fields = 4,
      value: controlledValue,
      defaultValue = '',
      onChange,
      onComplete,
      error = false,
      errorText,
      warning = false,
      warningText,
      success = false,
      successText,
      helperText,
      disabled = false,
      autoFocus = false,
      mask = false,
      className,
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const currentValue = isControlled ? controlledValue : internalValue;

    const digits = useMemo(() => {
      const arr = currentValue.split('').slice(0, fields);
      while (arr.length < fields) arr.push('');
      return arr;
    }, [currentValue, fields]);

    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

    const state = useMemo(() => {
      if (disabled) return 'disabled';
      if (error) return 'error';
      if (warning) return 'warning';
      if (success) return 'success';
      return 'default';
    }, [disabled, error, warning, success]);

    const updateValue = useCallback(
      (newDigits: string[]) => {
        const joined = newDigits.join('');
        if (!isControlled) setInternalValue(joined);
        onChange?.(joined);
        if (joined.length === fields && newDigits.every((d) => d !== '')) {
          onComplete?.(joined);
        }
      },
      [isControlled, onChange, onComplete, fields],
    );

    const focusInput = useCallback((index: number) => {
      inputRefs.current[index]?.focus();
    }, []);

    const handleChange = useCallback(
      (index: number, char: string) => {
        if (!/^\d$/.test(char)) return;
        const newDigits = [...digits];
        newDigits[index] = char;
        updateValue(newDigits);
        if (index < fields - 1) focusInput(index + 1);
      },
      [digits, fields, updateValue, focusInput],
    );

    const handleKeyDown = useCallback(
      (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace') {
          e.preventDefault();
          const newDigits = [...digits];
          if (newDigits[index]) {
            newDigits[index] = '';
            updateValue(newDigits);
          } else if (index > 0) {
            newDigits[index - 1] = '';
            updateValue(newDigits);
            focusInput(index - 1);
          }
        } else if (e.key === 'ArrowLeft' && index > 0) {
          e.preventDefault();
          focusInput(index - 1);
        } else if (e.key === 'ArrowRight' && index < fields - 1) {
          e.preventDefault();
          focusInput(index + 1);
        }
      },
      [digits, fields, updateValue, focusInput],
    );

    const handlePaste = useCallback(
      (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, fields);
        if (!pasted) return;
        const newDigits = [...digits];
        for (let i = 0; i < pasted.length; i++) {
          newDigits[i] = pasted[i];
        }
        updateValue(newDigits);
        const nextIndex = Math.min(pasted.length, fields - 1);
        focusInput(nextIndex);
      },
      [digits, fields, updateValue, focusInput],
    );

    useImperativeHandle(ref, () => ({
      focus: () => focusInput(0),
      clear: () => {
        const empty = Array(fields).fill('');
        updateValue(empty);
        focusInput(0);
      },
    }));

    const helper = error ? errorText : warning ? warningText : success ? successText : helperText;
    const helperId = `${generatedId}-helper`;

    return (
      <div
        className={['mds-pincode', className].filter(Boolean).join(' ')}
        data-state={state}
        data-disabled={disabled || undefined}
        data-fields={fields}
      >
        {label && (
          <span className="mds-pincode-label">{label}</span>
        )}
        <div className="mds-pincode-group" role="group" aria-label={label || 'PIN code'}>
          {digits.map((digit, i) => (
            <div
              key={i}
              className="mds-pincode-field"
              data-focused={focusedIndex === i || undefined}
              data-filled={digit !== '' || undefined}
            >
              <input
                ref={(el) => {
                  inputRefs.current[i] = el;
                }}
                id={`${generatedId}-pin-${i}`}
                className="mds-pincode-input"
                type={mask ? 'password' : 'text'}
                inputMode="numeric"
                pattern="\d{1}"
                maxLength={1}
                value={digit}
                disabled={disabled}
                autoFocus={autoFocus && i === 0}
                autoComplete="one-time-code"
                aria-label={`PIN digit ${i + 1} of ${fields}`}
                aria-describedby={helper ? helperId : undefined}
                onFocus={() => setFocusedIndex(i)}
                onBlur={() => setFocusedIndex(null)}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val.length > 0) handleChange(i, val[val.length - 1]);
                }}
                onKeyDown={(e) => handleKeyDown(i, e)}
                onPaste={handlePaste}
              />
            </div>
          ))}
        </div>
        {helper && (
          <p className="mds-pincode-helper" id={helperId}>
            {helper}
          </p>
        )}
      </div>
    );
  },
);

PinCode.displayName = 'PinCode';

export { PinCode };
