import { forwardRef, useId } from 'react';
import { ChevronDownWide } from '../../icons/ChevronDownWide';
import './DateSegmented.css';

const MONTHS = [
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

function getDaysInMonth(month?: number, year?: number): number {
  if (month == null || year == null) return 31;
  return new Date(year, month, 0).getDate();
}

function generateYearRange(minYear: number, maxYear: number): number[] {
  const years: number[] = [];
  for (let y = minYear; y <= maxYear; y++) {
    years.push(y);
  }
  return years;
}

export type DateSegmentedFormat = 'MDY' | 'DMY' | 'YMD';

export interface DateSegmentedValue {
  month?: number;
  date?: number;
  year?: number;
}

export interface DateSegmentedProps extends Omit<React.HTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
  /** Label displayed above the date segments */
  groupLabel?: string;
  /** Segment ordering format */
  format?: DateSegmentedFormat;
  /** Show the month selector */
  showMonth?: boolean;
  /** Show the date selector */
  showDate?: boolean;
  /** Show the year selector */
  showYear?: boolean;
  /** Controlled value */
  value?: DateSegmentedValue;
  /** Called when any segment changes */
  onChange?: (value: DateSegmentedValue) => void;
  /** Custom label for the month field */
  monthLabel?: string;
  /** Custom label for the date field */
  dateLabel?: string;
  /** Custom label for the year field */
  yearLabel?: string;
  /** Placeholder for unselected month */
  monthPlaceholder?: string;
  /** Placeholder for unselected date */
  datePlaceholder?: string;
  /** Placeholder for unselected year */
  yearPlaceholder?: string;
  /** Minimum year in the year dropdown */
  minYear?: number;
  /** Maximum year in the year dropdown */
  maxYear?: number;
  /** Whether the field group is required */
  required?: boolean;
  /** Whether the field group is disabled */
  disabled?: boolean;
  /** Whether the field group is in an error state */
  error?: boolean;
  /** Error message displayed below the segments */
  errorText?: string;
  /** Helper text displayed below the segments */
  helperText?: string;
}

const DateSegmented = forwardRef<HTMLFieldSetElement, DateSegmentedProps>(
  (
    {
      groupLabel,
      format = 'MDY',
      showMonth = true,
      showDate = true,
      showYear = true,
      value,
      onChange,
      monthLabel = 'Month',
      dateLabel = 'Date',
      yearLabel = 'Year',
      monthPlaceholder = '',
      datePlaceholder = '',
      yearPlaceholder = '',
      minYear = 1900,
      maxYear = new Date().getFullYear(),
      required,
      disabled,
      error = false,
      errorText,
      helperText,
      className,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const helperId = `${generatedId}-helper`;
    const showError = error && errorText;

    const maxDays = getDaysInMonth(value?.month, value?.year);
    const years = generateYearRange(minYear, maxYear);

    const handleChange = (field: keyof DateSegmentedValue, raw: string) => {
      const num = raw === '' ? undefined : Number(raw);
      const next: DateSegmentedValue = { ...value, [field]: num };

      if (field === 'month' || field === 'year') {
        const nextMax = getDaysInMonth(
          field === 'month' ? num : value?.month,
          field === 'year' ? num : value?.year
        );
        if (next.date != null && next.date > nextMax) {
          next.date = nextMax;
        }
      }

      onChange?.(next);
    };

    const monthSegment = showMonth && (
      <div className="mds-date-segmented__field" key="month">
        <label className="mds-date-segmented__label" htmlFor={`${generatedId}-month`}>
          {monthLabel}
          {required && <span className="mds-date-segmented__required">*</span>}
        </label>
        <div className="mds-date-segmented__select-wrapper">
          <select
            id={`${generatedId}-month`}
            className="mds-date-segmented__select"
            value={value?.month ?? ''}
            onChange={(e) => handleChange('month', e.target.value)}
            disabled={disabled}
            aria-invalid={error || undefined}
          >
            <option value="">{monthPlaceholder}</option>
            {MONTHS.map((name, i) => (
              <option key={i + 1} value={i + 1}>
                {name}
              </option>
            ))}
          </select>
          <ChevronDownWide size={20} className="mds-date-segmented__chevron" aria-hidden="true" />
        </div>
      </div>
    );

    const dateSegment = showDate && (
      <div className="mds-date-segmented__field" key="date">
        <label className="mds-date-segmented__label" htmlFor={`${generatedId}-date`}>
          {dateLabel}
          {required && <span className="mds-date-segmented__required">*</span>}
        </label>
        <div className="mds-date-segmented__select-wrapper">
          <select
            id={`${generatedId}-date`}
            className="mds-date-segmented__select"
            value={value?.date ?? ''}
            onChange={(e) => handleChange('date', e.target.value)}
            disabled={disabled}
            aria-invalid={error || undefined}
          >
            <option value="">{datePlaceholder}</option>
            {Array.from({ length: maxDays }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <ChevronDownWide size={20} className="mds-date-segmented__chevron" aria-hidden="true" />
        </div>
      </div>
    );

    const yearSegment = showYear && (
      <div className="mds-date-segmented__field" key="year">
        <label className="mds-date-segmented__label" htmlFor={`${generatedId}-year`}>
          {yearLabel}
          {required && <span className="mds-date-segmented__required">*</span>}
        </label>
        <div className="mds-date-segmented__select-wrapper">
          <select
            id={`${generatedId}-year`}
            className="mds-date-segmented__select"
            value={value?.year ?? ''}
            onChange={(e) => handleChange('year', e.target.value)}
            disabled={disabled}
            aria-invalid={error || undefined}
          >
            <option value="">{yearPlaceholder}</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <ChevronDownWide size={20} className="mds-date-segmented__chevron" aria-hidden="true" />
        </div>
      </div>
    );

    const segmentOrder: Record<DateSegmentedFormat, React.ReactNode[]> = {
      MDY: [monthSegment, dateSegment, yearSegment],
      DMY: [dateSegment, monthSegment, yearSegment],
      YMD: [yearSegment, monthSegment, dateSegment],
    };

    return (
      <fieldset
        ref={ref}
        className={['mds-date-segmented', className].filter(Boolean).join(' ')}
        data-format={format}
        data-error={error || undefined}
        data-disabled={disabled || undefined}
        disabled={disabled}
        aria-describedby={helperText || showError ? helperId : undefined}
        {...props}
      >
        {groupLabel && <legend className="mds-date-segmented__legend">{groupLabel}</legend>}
        <div className="mds-date-segmented__fields">{segmentOrder[format]}</div>
        {(helperText || showError) && (
          <p className="mds-date-segmented__helper" id={helperId}>
            {showError ? errorText : helperText}
          </p>
        )}
      </fieldset>
    );
  }
);

DateSegmented.displayName = 'DateSegmented';

export { DateSegmented };
