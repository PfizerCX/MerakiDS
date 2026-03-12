import { forwardRef, useCallback, useEffect, useId, useRef, useState } from 'react';
import { ChevronDownWide } from '../../icons/ChevronDownWide';
import { ChevronUpWide } from '../../icons/ChevronUpWide';
import { Close } from '../../icons/Close';
import { ErrorCircle } from '../../icons/ErrorCircle';
import './Multiselect.css';

export interface MultiselectOption {
  /** Unique value for the option */
  value: string;
  /** Display label — falls back to `value` when omitted */
  label?: string;
}

export interface MultiselectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Text label displayed above the multiselect */
  label?: string;
  /** Placeholder text shown when no value is selected */
  placeholder?: string;
  /** Currently selected values (controlled) */
  value?: string[];
  /** Default selected values (uncontrolled) */
  defaultValue?: string[];
  /** List of selectable options */
  options?: MultiselectOption[];
  /** Called when the selected values change */
  onChange?: (values: string[]) => void;
  /** Show a required indicator (*) next to the label */
  required?: boolean;
  /** Helper / caption text below the trigger */
  helperText?: string;
  /** Toggle error styling */
  error?: boolean;
  /** Error message (shown in place of helperText when error is true) */
  errorText?: string;
  /** Disable the multiselect */
  disabled?: boolean;
  /** Display selected items as removable chips instead of a summary label */
  chips?: boolean;
}

const Multiselect = forwardRef<HTMLDivElement, MultiselectProps>(
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
      chips = false,
      className,
      id: externalId,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const multiselectId = externalId || generatedId;
    const listboxId = `${multiselectId}-listbox`;

    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue ?? []);
    const selectedValues = isControlled ? controlledValue : internalValue;

    const [open, setOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const showError = error && errorText;
    const hasValue = selectedValues.length > 0;

    const getOptionLabel = (value: string) => {
      const opt = options.find((o) => o.value === value);
      return opt?.label ?? value;
    };

    const displayLabel = hasValue
      ? selectedValues.map(getOptionLabel).join(', ')
      : '';

    const openMenu = useCallback(() => {
      if (disabled) return;
      setOpen(true);
      setHighlightedIndex(0);
    }, [disabled]);

    const closeMenu = useCallback(() => {
      setOpen(false);
      setHighlightedIndex(-1);
      triggerRef.current?.focus();
    }, []);

    const toggleOption = useCallback(
      (option: MultiselectOption) => {
        const isSelected = selectedValues.includes(option.value);
        const next = isSelected
          ? selectedValues.filter((v) => v !== option.value)
          : [...selectedValues, option.value];
        if (!isControlled) setInternalValue(next);
        onChange?.(next);
      },
      [isControlled, selectedValues, onChange]
    );

    const removeChip = useCallback(
      (value: string) => {
        const next = selectedValues.filter((v) => v !== value);
        if (!isControlled) setInternalValue(next);
        onChange?.(next);
      },
      [isControlled, selectedValues, onChange]
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
          toggleOption(options[index]);
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
        className={['mds-multiselect', className].filter(Boolean).join(' ')}
        data-error={error || undefined}
        data-disabled={disabled || undefined}
        {...props}
      >
        {(hasValue || open) && label && (
          <div className="mds-multiselect__label">
            {required && <span className="mds-multiselect__required">*</span>}
            <span>{label}</span>
          </div>
        )}

        {!open && (
          <button
            ref={triggerRef}
            type="button"
            className="mds-multiselect__trigger"
            aria-haspopup="listbox"
            aria-expanded={open}
            disabled={disabled}
            onClick={openMenu}
            onKeyDown={handleTriggerKeyDown}
          >
            {!hasValue && (
              <>
                <span className="mds-multiselect__trigger-text mds-multiselect__trigger-text--placeholder">
                  {label ?? placeholder}
                </span>
                {required && !hasValue && !open && (
                  <span className="mds-multiselect__required">{label ? '' : '*'}</span>
                )}
              </>
            )}
            {hasValue && !chips && (
              <span className="mds-multiselect__trigger-text">{displayLabel}</span>
            )}
            {hasValue && chips && (
              <span className="mds-multiselect__chips">
                {selectedValues.map((val) => (
                  <span key={val} className="mds-multiselect__chip">
                    <span className="mds-multiselect__chip-label">{getOptionLabel(val)}</span>
                    <button
                      type="button"
                      className="mds-multiselect__chip-remove"
                      aria-label={`Remove ${getOptionLabel(val)}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        removeChip(val);
                      }}
                    >
                      <Close size={16} />
                    </button>
                  </span>
                ))}
              </span>
            )}
            <span className="mds-multiselect__trigger-icon">
              <ChevronDownWide size={24} />
            </span>
            {error && (
              <span className="mds-multiselect__error-icon">
                <ErrorCircle size={24} style={{ color: 'var(--color-negative)' }} />
              </span>
            )}
          </button>
        )}

        {!hasValue && !open && required && label && (
          <span className="mds-multiselect__trigger-required">*</span>
        )}

        {open && (
          <div ref={panelRef} className="mds-multiselect__panel" role="presentation">
            <div className="mds-multiselect__panel-header">
              <span className="mds-multiselect__panel-header-text">
                {hasValue ? displayLabel : placeholder}
              </span>
              <button
                type="button"
                className="mds-multiselect__panel-icon"
                tabIndex={-1}
                onClick={closeMenu}
                aria-label="Close multiselect"
              >
                <ChevronUpWide size={24} />
              </button>
            </div>
            <ul id={listboxId} className="mds-multiselect__options" role="listbox" aria-multiselectable="true">
              {options.map((option, index) => {
                const isSelected = selectedValues.includes(option.value);
                return (
                  <li key={option.value} role="presentation">
                    <button
                      ref={(el) => {
                        optionRefs.current[index] = el;
                      }}
                      type="button"
                      role="option"
                      className="mds-multiselect__option"
                      aria-selected={isSelected}
                      data-selected={isSelected || undefined}
                      data-highlighted={index === highlightedIndex || undefined}
                      onClick={() => toggleOption(option)}
                      onKeyDown={(e) => handleOptionKeyDown(e, index)}
                    >
                      <span
                        className={[
                          'mds-multiselect__checkbox',
                          isSelected && 'mds-multiselect__checkbox--checked',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        aria-hidden="true"
                      />
                      <span className="mds-multiselect__option-label">
                        {option.label ?? option.value}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {(helperText || showError) && (
          <p className="mds-multiselect__caption">{showError ? errorText : helperText}</p>
        )}
      </div>
    );
  }
);

Multiselect.displayName = 'Multiselect';

export { Multiselect };
