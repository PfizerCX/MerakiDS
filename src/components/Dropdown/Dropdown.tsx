import { forwardRef, useCallback, useEffect, useId, useRef, useState } from 'react';
import { ChevronDownWide } from '../../icons/ChevronDownWide';
import { ChevronUpWide } from '../../icons/ChevronUpWide';
import { ErrorCircle } from '../../icons/ErrorCircle';
import './Dropdown.css';

export interface DropdownOption {
  /** Unique value for the option */
  value: string;
  /** Display label — falls back to `value` when omitted */
  label?: string;
}

export interface DropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Text label displayed above the dropdown */
  label?: string;
  /** Placeholder text shown when no value is selected */
  placeholder?: string;
  /** Currently selected value (controlled) */
  value?: string;
  /** Default selected value (uncontrolled) */
  defaultValue?: string;
  /** List of selectable options */
  options?: DropdownOption[];
  /** Called when the selected value changes */
  onChange?: (value: string) => void;
  /** Show a required indicator (*) next to the label */
  required?: boolean;
  /** Helper / caption text below the trigger */
  helperText?: string;
  /** Toggle error styling */
  error?: boolean;
  /** Error message (shown in place of helperText when error is true) */
  errorText?: string;
  /** Disable the dropdown */
  disabled?: boolean;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      label,
      placeholder = 'Choose Option...',
      value: controlledValue,
      defaultValue,
      options = [],
      onChange,
      required = false,
      helperText,
      error = false,
      errorText,
      disabled = false,
      className,
      id: externalId,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const dropdownId = externalId || generatedId;
    const listboxId = `${dropdownId}-listbox`;

    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const selectedValue = isControlled ? controlledValue : internalValue;

    const [open, setOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const selectedOption = options.find((o) => o.value === selectedValue);
    const showError = error && errorText;
    const hasValue = selectedValue !== '';

    const openMenu = useCallback(() => {
      if (disabled) return;
      setOpen(true);
      const idx = options.findIndex((o) => o.value === selectedValue);
      setHighlightedIndex(idx >= 0 ? idx : 0);
    }, [disabled, options, selectedValue]);

    const closeMenu = useCallback(() => {
      setOpen(false);
      setHighlightedIndex(-1);
      triggerRef.current?.focus();
    }, []);

    const selectOption = useCallback(
      (option: DropdownOption) => {
        if (!isControlled) setInternalValue(option.value);
        onChange?.(option.value);
        closeMenu();
      },
      [isControlled, onChange, closeMenu]
    );

    useEffect(() => {
      if (!open) return;
      const handler = (e: MouseEvent) => {
        const target = e.target as Node;
        if (!panelRef.current?.contains(target) && !triggerRef.current?.contains(target)) {
          closeMenu();
        }
      };
      document.addEventListener('mousedown', handler);
      return () => document.removeEventListener('mousedown', handler);
    }, [open, closeMenu]);

    useEffect(() => {
      if (open && highlightedIndex >= 0) {
        optionRefs.current[highlightedIndex]?.scrollIntoView({ block: 'nearest' });
      }
    }, [open, highlightedIndex]);

    const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'Enter':
        case ' ':
        case 'ArrowDown':
          e.preventDefault();
          openMenu();
          break;
        case 'ArrowUp':
          e.preventDefault();
          openMenu();
          break;
      }
    };

    const handleOptionKeyDown = (e: React.KeyboardEvent, index: number) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex((prev) => Math.min(prev + 1, options.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex((prev) => Math.max(prev - 1, 0));
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          selectOption(options[index]);
          break;
        case 'Escape':
          e.preventDefault();
          closeMenu();
          break;
        case 'Home':
          e.preventDefault();
          setHighlightedIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setHighlightedIndex(options.length - 1);
          break;
      }
    };

    useEffect(() => {
      if (open && highlightedIndex >= 0) {
        optionRefs.current[highlightedIndex]?.focus();
      }
    }, [open, highlightedIndex]);

    return (
      <div
        ref={ref}
        className={['mds-dropdown', className].filter(Boolean).join(' ')}
        data-error={error || undefined}
        data-disabled={disabled || undefined}
        {...props}
      >
        {label && (
          <div className="mds-dropdown__label">
            {required && <span className="mds-dropdown__required">*</span>}
            <span>{label}</span>
          </div>
        )}

        <div className="mds-dropdown__control">
          <button
            ref={triggerRef}
            type="button"
            className="mds-dropdown__trigger"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-labelledby={label ? `${dropdownId}-label` : undefined}
            disabled={disabled}
            onClick={() => (open ? closeMenu() : openMenu())}
            onKeyDown={handleTriggerKeyDown}
          >
            <span
              className={[
                'mds-dropdown__trigger-text',
                !hasValue && 'mds-dropdown__trigger-text--placeholder',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {hasValue ? (selectedOption?.label ?? selectedValue) : (label ?? placeholder)}
            </span>
            <span className="mds-dropdown__trigger-icon">
              {open ? <ChevronUpWide size={24} /> : <ChevronDownWide size={24} />}
            </span>
            {error && (
              <span className="mds-dropdown__error-icon">
                <ErrorCircle size={24} style={{ color: 'var(--color-negative)' }} />
              </span>
            )}
          </button>

          {open && (
            <div ref={panelRef} className="mds-dropdown__panel" role="presentation">
              <ul id={listboxId} className="mds-dropdown__options" role="listbox">
                {options.map((option, index) => (
                  <li key={option.value} role="presentation">
                    <button
                      ref={(el) => {
                        optionRefs.current[index] = el;
                      }}
                      type="button"
                      role="option"
                      className="mds-dropdown__option"
                      aria-selected={option.value === selectedValue}
                      data-selected={option.value === selectedValue || undefined}
                      data-highlighted={index === highlightedIndex || undefined}
                      onClick={() => selectOption(option)}
                      onKeyDown={(e) => handleOptionKeyDown(e, index)}
                    >
                      {option.label ?? option.value}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {(helperText || showError) && (
          <p className="mds-dropdown__caption">{showError ? errorText : helperText}</p>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export { Dropdown };
