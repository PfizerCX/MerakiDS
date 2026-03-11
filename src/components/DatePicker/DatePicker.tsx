import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import { CalendarToday } from '../../icons/CalendarToday';
import { ChevronDownWide } from '../../icons/ChevronDownWide';
import { ChevronUpWide } from '../../icons/ChevronUpWide';
import { CheckCircle } from '../../icons/CheckCircle';
import './DatePicker.css';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WEEKDAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function formatDate(date: Date): string {
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

interface CalendarDay {
  date: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isToday: boolean;
}

function buildCalendarGrid(year: number, month: number): CalendarDay[][] {
  const today = new Date();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);

  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;

  const days: CalendarDay[] = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    const date = daysInPrevMonth - i;
    days.push({
      date,
      month: prevMonth,
      year: prevYear,
      isCurrentMonth: false,
      isToday: isSameDay(new Date(prevYear, prevMonth, date), today),
    });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    days.push({
      date: d,
      month,
      year,
      isCurrentMonth: true,
      isToday: isSameDay(new Date(year, month, d), today),
    });
  }

  const remaining = 42 - days.length;
  for (let d = 1; d <= remaining; d++) {
    days.push({
      date: d,
      month: nextMonth,
      year: nextYear,
      isCurrentMonth: false,
      isToday: isSameDay(new Date(nextYear, nextMonth, d), today),
    });
  }

  const weeks: CalendarDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

export interface DatePickerProps {
  /** Field label */
  label?: string;
  /** Placeholder text shown when no date is selected */
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
  /** Controlled selected date value */
  value?: Date | null;
  /** Default date value (uncontrolled) */
  defaultValue?: Date | null;
  /** Called when the selected date changes */
  onChange?: (date: Date | null) => void;
  /** Additional class name */
  className?: string;
  /** HTML id for the hidden input */
  id?: string;
  /** HTML name attribute for form submission */
  name?: string;
}

const ErrorIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
      fill="currentColor"
    />
  </svg>
);

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      label = 'Input Label',
      placeholder = 'mm/dd/yyyy',
      required = false,
      disabled = false,
      error = false,
      errorText,
      success = false,
      helperText,
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
    const [internalValue, setInternalValue] = useState<Date | null>(
      defaultValue,
    );
    const selectedDate = isControlled ? controlledValue : internalValue;

    const [isOpen, setIsOpen] = useState(false);
    const [viewYear, setViewYear] = useState(
      () => selectedDate?.getFullYear() ?? new Date().getFullYear(),
    );
    const [viewMonth, setViewMonth] = useState(
      () => selectedDate?.getMonth() ?? new Date().getMonth(),
    );

    const wrapperRef = useRef<HTMLDivElement>(null);

    const state = useMemo(() => {
      if (disabled) return 'disabled';
      if (isOpen) return 'active';
      if (error) return 'error';
      if (success) return 'success';
      if (selectedDate) return 'entered';
      return 'enabled';
    }, [disabled, isOpen, error, success, selectedDate]);

    const hasLabel = state !== 'enabled' && state !== 'disabled';
    const showHelper = helperText || (error && errorText);

    const weeks = useMemo(
      () => buildCalendarGrid(viewYear, viewMonth),
      [viewYear, viewMonth],
    );

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

    const handleToggle = useCallback(() => {
      if (disabled) return;
      setIsOpen((prev) => {
        if (!prev && selectedDate) {
          setViewYear(selectedDate.getFullYear());
          setViewMonth(selectedDate.getMonth());
        }
        return !prev;
      });
    }, [disabled, selectedDate]);

    const handleSelect = useCallback(
      (day: CalendarDay) => {
        const newDate = new Date(day.year, day.month, day.date);
        if (!isControlled) setInternalValue(newDate);
        onChange?.(newDate);
        setIsOpen(false);
      },
      [isControlled, onChange],
    );

    const handleClear = useCallback(() => {
      if (!isControlled) setInternalValue(null);
      onChange?.(null);
      setIsOpen(false);
    }, [isControlled, onChange]);

    const handleToday = useCallback(() => {
      const today = new Date();
      if (!isControlled) setInternalValue(today);
      onChange?.(today);
      setViewYear(today.getFullYear());
      setViewMonth(today.getMonth());
      setIsOpen(false);
    }, [isControlled, onChange]);

    const handlePrevMonth = useCallback(() => {
      setViewMonth((m) => {
        if (m === 0) {
          setViewYear((y) => y - 1);
          return 11;
        }
        return m - 1;
      });
    }, []);

    const handleNextMonth = useCallback(() => {
      setViewMonth((m) => {
        if (m === 11) {
          setViewYear((y) => y + 1);
          return 0;
        }
        return m + 1;
      });
    }, []);

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
        className={['mds-datepicker', className].filter(Boolean).join(' ')}
        data-state={state}
        data-disabled={disabled || undefined}
      >
        {hasLabel && (
          <div className="mds-datepicker-label">
            <span>{label}</span>
            {required && <span className="mds-datepicker-required">*</span>}
          </div>
        )}

        <div
          className="mds-datepicker-field"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-owns={`${inputId}-calendar`}
          tabIndex={disabled ? -1 : 0}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
        >
          {selectedDate ? (
            <span className="mds-datepicker-value">
              {formatDate(selectedDate)}
            </span>
          ) : state === 'enabled' || state === 'disabled' ? (
            <span className="mds-datepicker-value mds-datepicker-value--label">
              {label}
            </span>
          ) : (
            <span className="mds-datepicker-value mds-datepicker-value--placeholder">
              {placeholder}
            </span>
          )}

          {(state === 'enabled' || state === 'disabled') && required && (
            <span className="mds-datepicker-required">*</span>
          )}

          {state === 'error' ? (
            <span className="mds-datepicker-icon mds-datepicker-icon--error">
              <ErrorIcon />
            </span>
          ) : state === 'success' ? (
            <span className="mds-datepicker-icon mds-datepicker-icon--success">
              <CheckCircle size={20} />
            </span>
          ) : (
            <button
              type="button"
              className="mds-datepicker-icon"
              tabIndex={-1}
              aria-label="Open calendar"
            >
              <CalendarToday size={24} />
            </button>
          )}

          <input
            ref={ref}
            type="hidden"
            id={inputId}
            name={name}
            value={selectedDate ? formatDate(selectedDate) : ''}
            aria-invalid={error || undefined}
            aria-describedby={showHelper ? helperId : undefined}
            className="mds-datepicker-input"
          />
        </div>

        {isOpen && (
          <div
            className="mds-datepicker-dropdown"
            id={`${inputId}-calendar`}
            role="dialog"
            aria-label="Choose date"
          >
            <div className="mds-datepicker-header">
              <button
                type="button"
                className="mds-datepicker-month-btn"
                aria-label="Select month and year"
              >
                <span>
                  {MONTH_NAMES[viewMonth]} {viewYear}
                </span>
                <ChevronDownWide size={16} />
              </button>

              <div className="mds-datepicker-arrows">
                <button
                  type="button"
                  className="mds-datepicker-arrow-btn"
                  onClick={handlePrevMonth}
                  aria-label="Previous month"
                >
                  <ChevronUpWide size={16} />
                </button>
                <button
                  type="button"
                  className="mds-datepicker-arrow-btn"
                  onClick={handleNextMonth}
                  aria-label="Next month"
                >
                  <ChevronDownWide size={16} />
                </button>
              </div>
            </div>

            <div className="mds-datepicker-calendar" role="grid">
              <div className="mds-datepicker-weekdays" role="row">
                {WEEKDAY_LABELS.map((day, i) => (
                  <div
                    key={i}
                    className="mds-datepicker-weekday"
                    role="columnheader"
                    aria-label={
                      [
                        'Sunday',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                      ][i]
                    }
                  >
                    {day}
                  </div>
                ))}
              </div>

              {weeks.map((week, wi) => (
                <div key={wi} className="mds-datepicker-week" role="row">
                  {week.map((day, di) => {
                    const isSelected =
                      selectedDate &&
                      isSameDay(
                        selectedDate,
                        new Date(day.year, day.month, day.date),
                      );
                    const classNames = ['mds-datepicker-day'];
                    if (!day.isCurrentMonth)
                      classNames.push('mds-datepicker-day--outside');
                    if (day.isToday && !isSelected)
                      classNames.push('mds-datepicker-day--today');
                    if (isSelected)
                      classNames.push('mds-datepicker-day--selected');

                    return (
                      <button
                        key={di}
                        type="button"
                        className={classNames.join(' ')}
                        role="gridcell"
                        aria-selected={isSelected || undefined}
                        aria-label={`${MONTH_NAMES[day.month]} ${day.date}, ${day.year}`}
                        onClick={() => handleSelect(day)}
                      >
                        {day.date}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="mds-datepicker-footer">
              <button
                type="button"
                className="mds-datepicker-footer-btn"
                onClick={handleClear}
              >
                <span className="mds-datepicker-footer-btn-inner">
                  <span className="mds-datepicker-footer-btn-text">Clear</span>
                  <span className="mds-datepicker-footer-btn-underline" />
                </span>
              </button>
              <button
                type="button"
                className="mds-datepicker-footer-btn"
                onClick={handleToday}
              >
                <span className="mds-datepicker-footer-btn-inner">
                  <span className="mds-datepicker-footer-btn-text">Today</span>
                  <span className="mds-datepicker-footer-btn-underline" />
                </span>
              </button>
            </div>
          </div>
        )}

        {showHelper && (
          <p className="mds-datepicker-helper" id={helperId}>
            {error && errorText ? errorText : helperText}
          </p>
        )}
      </div>
    );
  },
);

DatePicker.displayName = 'DatePicker';

export { DatePicker };
