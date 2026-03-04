import { forwardRef, useState, useCallback } from 'react';
import { CheckCircle } from '../../icons/CheckCircle';
import './SegmentedControl.css';

export interface SegmentedControlOption {
  value: string;
  label: string;
}

export interface SegmentedControlProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /** Label displayed above the control */
  label?: string;
  /** Array of selectable options */
  options: SegmentedControlOption[];
  /** Selection mode: single allows one item, multi allows multiple */
  mode?: 'single' | 'multi';
  /** Currently selected value(s) — controlled mode */
  value?: string | string[];
  /** Default selected value(s) — uncontrolled mode */
  defaultValue?: string | string[];
  /** Callback fired when the selection changes */
  onChange?: (value: string | string[]) => void;
  /** Disable the entire control */
  disabled?: boolean;
}

const normalizeValue = (val: string | string[] | undefined): string[] => {
  if (val === undefined) return [];
  return Array.isArray(val) ? val : [val];
};

const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  (
    {
      label,
      options,
      mode = 'single',
      value: controlledValue,
      defaultValue,
      onChange,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState<string[]>(
      normalizeValue(defaultValue)
    );

    const selectedValues = isControlled
      ? normalizeValue(controlledValue)
      : internalValue;

    const handleSelect = useCallback(
      (optionValue: string) => {
        if (disabled) return;

        let next: string[];

        if (mode === 'single') {
          next = [optionValue];
        } else {
          next = selectedValues.includes(optionValue)
            ? selectedValues.filter((v) => v !== optionValue)
            : [...selectedValues, optionValue];
        }

        if (!isControlled) {
          setInternalValue(next);
        }

        onChange?.(mode === 'single' ? next[0] : next);
      },
      [disabled, mode, selectedValues, isControlled, onChange]
    );

    return (
      <div
        ref={ref}
        className={['mds-segmented-control', className]
          .filter(Boolean)
          .join(' ')}
        data-disabled={disabled || undefined}
        {...props}
      >
        {label && (
          <span className="mds-segmented-control__label">{label}</span>
        )}

        <div
          className="mds-segmented-control__controls"
          role="group"
          aria-label={label}
        >
          {options.map((option) => {
            const isSelected = selectedValues.includes(option.value);

            return (
              <button
                key={option.value}
                type="button"
                className="mds-segmented-control__segment"
                data-selected={isSelected || undefined}
                disabled={disabled}
                aria-pressed={isSelected}
                onClick={() => handleSelect(option.value)}
              >
                <span className="mds-segmented-control__state-layer">
                  {isSelected && (
                    <CheckCircle
                      size={24}
                      className="mds-segmented-control__icon"
                      style={{ color: 'inherit' }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="mds-segmented-control__text">
                    {option.label}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);

SegmentedControl.displayName = 'SegmentedControl';

export { SegmentedControl };
