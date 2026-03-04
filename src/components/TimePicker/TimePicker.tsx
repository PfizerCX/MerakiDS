import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import { AccessTime } from '../../icons/AccessTime';
import { ErrorCircle } from '../../icons/ErrorCircle';
import { CheckCircle } from '../../icons/CheckCircle';
import './TimePicker.css';

export interface TimePickerProps {
  /** Field label */
  label?: string;
  /** Placeholder text shown when no time is selected */
  placeholder?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Show error state */
  error?: boolean;
  /** Error message text */
  errorText?: string;
  /** Show success state */
  success?: boolean;
  /** Helper text displayed below the field */
  helperText?: string;
  /** Time format: 12-hour or 24-hour */
  timeFormat?: '12h' | '24h';
  /** Controlled value as "HH:MM" (24h) or "HH:MM AM/PM" (12h) */
  value?: string | null;
  /** Default value (uncontrolled) */
  defaultValue?: string | null;
  /** Called when the selected time changes */
  onChange?: (time: string | null) => void;
  /** Additional class name */
  className?: string;
  /** HTML id for the hidden input */
  id?: string;
  /** HTML name attribute for form submission */
  name?: string;
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

function getHours12(): string[] {
  return Array.from({ length: 12 }, (_, i) => {
    const h = i === 0 ? 12 : i;
    return pad(h);
  });
}

function getHours24(): string[] {
  return Array.from({ length: 24 }, (_, i) => pad(i));
}

function getMinutes(): string[] {
  return Array.from({ length: 60 }, (_, i) => pad(i));
}

interface ParsedTime {
  hour: string;
  minute: string;
  period: 'AM' | 'PM';
}

function parseTimeValue(
  value: string | null | undefined,
  format: '12h' | '24h',
): ParsedTime | null {
  if (!value) return null;
  const parts = value.trim().split(/[\s:]+/);
  if (parts.length < 2) return null;

  let hour = parseInt(parts[0], 10);
  const minute = parseInt(parts[1], 10);
  let period: 'AM' | 'PM' = 'AM';

  if (format === '12h') {
    if (parts[2]) {
      period = parts[2].toUpperCase() === 'PM' ? 'PM' : 'AM';
    }
    if (hour === 0) hour = 12;
    if (hour > 12) {
      hour -= 12;
      period = 'PM';
    }
    return { hour: pad(hour), minute: pad(minute), period };
  }

  if (hour >= 12) {
    period = 'PM';
  }
  return { hour: pad(hour), minute: pad(minute), period };
}

function formatTimeValue(
  hour: string,
  minute: string,
  period: 'AM' | 'PM',
  format: '12h' | '24h',
): string {
  if (format === '12h') {
    return `${hour}:${minute} ${period}`;
  }
  return `${hour}:${minute}`;
}

function formatDisplay(parsed: ParsedTime, format: '12h' | '24h'): string {
  if (format === '12h') {
    return `${parsed.hour}:${parsed.minute} ${parsed.period}`;
  }
  return `${parsed.hour}:${parsed.minute}`;
}

const HOURS_12 = getHours12();
const HOURS_24 = getHours24();
const MINUTES = getMinutes();
const PERIODS: ('AM' | 'PM')[] = ['AM', 'PM'];

const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  (
    {
      label = 'Input Label',
      placeholder = '--:--',
      required = false,
      disabled = false,
      error = false,
      errorText,
      success = false,
      helperText,
      timeFormat = '12h',
      value: controlledValue,
      defaultValue = null,
      onChange,
      className,
      id: externalId,
      name,
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = externalId || generatedId;
    const helperId = `${inputId}-helper`;

    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState<string | null>(
      defaultValue,
    );
    const currentValue = isControlled ? controlledValue : internalValue;
    const parsed = useMemo(
      () => parseTimeValue(currentValue, timeFormat),
      [currentValue, timeFormat],
    );

    const [isOpen, setIsOpen] = useState(false);
    const [selectedHour, setSelectedHour] = useState<string>(
      () => parsed?.hour ?? (timeFormat === '12h' ? '12' : '00'),
    );
    const [selectedMinute, setSelectedMinute] = useState<string>(
      () => parsed?.minute ?? '00',
    );
    const [selectedPeriod, setSelectedPeriod] = useState<'AM' | 'PM'>(
      () => parsed?.period ?? 'AM',
    );

    const wrapperRef = useRef<HTMLDivElement>(null);
    const hourColRef = useRef<HTMLDivElement>(null);
    const minuteColRef = useRef<HTMLDivElement>(null);

    const hours = timeFormat === '12h' ? HOURS_12 : HOURS_24;

    const state = useMemo(() => {
      if (disabled) return 'disabled';
      if (isOpen) return 'active';
      if (error) return 'error';
      if (success) return 'success';
      if (parsed) return 'entered';
      return 'enabled';
    }, [disabled, isOpen, error, success, parsed]);

    const hasLabel = state !== 'enabled' && state !== 'disabled';
    const showHelper = helperText || (error && errorText);

    useEffect(() => {
      if (parsed) {
        setSelectedHour(parsed.hour);
        setSelectedMinute(parsed.minute);
        setSelectedPeriod(parsed.period);
      }
    }, [parsed]);

    useEffect(() => {
      function handleClickOutside(e: MouseEvent) {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      }
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const scrollToSelected = useCallback(() => {
      requestAnimationFrame(() => {
        const scrollIntoView = (
          container: HTMLDivElement | null,
          value: string,
        ) => {
          if (!container) return;
          const el = container.querySelector(
            `[data-value="${value}"]`,
          ) as HTMLElement | null;
          if (el) {
            el.scrollIntoView({ block: 'nearest' });
          }
        };
        scrollIntoView(hourColRef.current, selectedHour);
        scrollIntoView(minuteColRef.current, selectedMinute);
      });
    }, [selectedHour, selectedMinute]);

    const handleToggle = useCallback(() => {
      if (disabled) return;
      setIsOpen((prev) => {
        if (!prev) {
          requestAnimationFrame(() => scrollToSelected());
        }
        return !prev;
      });
    }, [disabled, scrollToSelected]);

    const commitSelection = useCallback(
      (hour: string, minute: string, period: 'AM' | 'PM') => {
        const formatted = formatTimeValue(hour, minute, period, timeFormat);
        if (!isControlled) setInternalValue(formatted);
        onChange?.(formatted);
      },
      [isControlled, onChange, timeFormat],
    );

    const handleHourSelect = useCallback(
      (hour: string) => {
        setSelectedHour(hour);
        commitSelection(hour, selectedMinute, selectedPeriod);
      },
      [selectedMinute, selectedPeriod, commitSelection],
    );

    const handleMinuteSelect = useCallback(
      (minute: string) => {
        setSelectedMinute(minute);
        commitSelection(selectedHour, minute, selectedPeriod);
      },
      [selectedHour, selectedPeriod, commitSelection],
    );

    const handlePeriodSelect = useCallback(
      (period: 'AM' | 'PM') => {
        setSelectedPeriod(period);
        commitSelection(selectedHour, selectedMinute, period);
      },
      [selectedHour, selectedMinute, commitSelection],
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      },
      [handleToggle],
    );

    return (
      <div
        ref={wrapperRef}
        className={['mds-timepicker', className].filter(Boolean).join(' ')}
        data-state={state}
        data-disabled={disabled || undefined}
      >
        {hasLabel && (
          <div className="mds-timepicker-label">
            <span>{label}</span>
            {required && <span className="mds-timepicker-required">*</span>}
          </div>
        )}

        <div
          className="mds-timepicker-field"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-owns={`${inputId}-dropdown`}
          tabIndex={disabled ? -1 : 0}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
        >
          {parsed ? (
            <span className="mds-timepicker-value">
              {formatDisplay(parsed, timeFormat)}
            </span>
          ) : state === 'enabled' || state === 'disabled' ? (
            <span className="mds-timepicker-value mds-timepicker-value--label">
              {label}
            </span>
          ) : (
            <span className="mds-timepicker-value mds-timepicker-value--placeholder">
              {placeholder}
            </span>
          )}

          {(state === 'enabled' || state === 'disabled') && required && (
            <span className="mds-timepicker-required">*</span>
          )}

          {state === 'error' ? (
            <span className="mds-timepicker-icon mds-timepicker-icon--error">
              <ErrorCircle size={24} />
            </span>
          ) : state === 'success' ? (
            <span className="mds-timepicker-icon mds-timepicker-icon--success">
              <CheckCircle size={20} />
            </span>
          ) : (
            <button
              type="button"
              className="mds-timepicker-icon"
              tabIndex={-1}
              aria-label="Open time picker"
            >
              <AccessTime size={24} />
            </button>
          )}

          <input
            ref={ref}
            type="hidden"
            id={inputId}
            name={name}
            value={currentValue ?? ''}
            aria-invalid={error || undefined}
            aria-describedby={showHelper ? helperId : undefined}
            className="mds-timepicker-input"
          />
        </div>

        {isOpen && (
          <div
            className="mds-timepicker-dropdown"
            id={`${inputId}-dropdown`}
            role="listbox"
            aria-label="Select time"
          >
            <div className="mds-timepicker-column" ref={hourColRef}>
              {hours.map((h) => (
                <button
                  key={h}
                  type="button"
                  className={[
                    'mds-timepicker-cell',
                    selectedHour === h && 'mds-timepicker-cell--selected',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  data-value={h}
                  role="option"
                  aria-selected={selectedHour === h}
                  onClick={() => handleHourSelect(h)}
                >
                  {h}
                </button>
              ))}
            </div>

            <div className="mds-timepicker-column" ref={minuteColRef}>
              {MINUTES.map((m) => (
                <button
                  key={m}
                  type="button"
                  className={[
                    'mds-timepicker-cell',
                    selectedMinute === m && 'mds-timepicker-cell--selected',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  data-value={m}
                  role="option"
                  aria-selected={selectedMinute === m}
                  onClick={() => handleMinuteSelect(m)}
                >
                  {m}
                </button>
              ))}
            </div>

            {timeFormat === '12h' && (
              <div className="mds-timepicker-column mds-timepicker-column--period">
                {PERIODS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    className={[
                      'mds-timepicker-cell',
                      selectedPeriod === p && 'mds-timepicker-cell--selected',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    data-value={p}
                    role="option"
                    aria-selected={selectedPeriod === p}
                    onClick={() => handlePeriodSelect(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {showHelper && (
          <p className="mds-timepicker-helper" id={helperId}>
            {error && errorText ? errorText : helperText}
          </p>
        )}
      </div>
    );
  },
);

TimePicker.displayName = 'TimePicker';

export { TimePicker };
