import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDownWide } from '../../icons/ChevronDownWide';
import './SplitButton.css';

export interface SplitButtonOption {
  /** Unique value for the option */
  value: string;
  /** Display label — falls back to `value` when omitted */
  label?: string;
}

export interface SplitButtonProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /** Button label text */
  children: React.ReactNode;
  /** Size variant — maps to 40 px (md) or 52 px (lg) height */
  size?: 'md' | 'lg';
  /** Inverted color scheme for use on dark backgrounds */
  inverted?: boolean;
  /** Disable the entire component */
  disabled?: boolean;
  /** Icon displayed before the label */
  leftIcon?: React.ReactNode;
  /** Dropdown options shown when the toggle is activated */
  options?: SplitButtonOption[];
  /** Called when the main action button is clicked */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Called when a dropdown option is selected */
  onOptionSelect?: (option: SplitButtonOption) => void;
}

const SplitButton = forwardRef<HTMLDivElement, SplitButtonProps>(
  (
    {
      children,
      size = 'md',
      inverted = false,
      disabled = false,
      leftIcon,
      options = [],
      onClick,
      onOptionSelect,
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const menuRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);
    const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const closeMenu = useCallback(() => {
      setOpen(false);
      setHighlightedIndex(-1);
    }, []);

    const toggleMenu = useCallback(() => {
      if (disabled) return;
      setOpen((prev) => {
        if (!prev) setHighlightedIndex(0);
        return !prev;
      });
    }, [disabled]);

    useEffect(() => {
      if (!open) return;
      const handler = (e: MouseEvent) => {
        const target = e.target as Node;
        if (
          !menuRef.current?.contains(target) &&
          !toggleRef.current?.contains(target)
        ) {
          closeMenu();
        }
      };
      document.addEventListener('mousedown', handler);
      return () => document.removeEventListener('mousedown', handler);
    }, [open, closeMenu]);

    useEffect(() => {
      if (open && highlightedIndex >= 0) {
        optionRefs.current[highlightedIndex]?.focus();
      }
    }, [open, highlightedIndex]);

    const handleToggleKeyDown = (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'Enter':
        case ' ':
        case 'ArrowDown':
          e.preventDefault();
          if (!open) {
            setOpen(true);
            setHighlightedIndex(0);
          }
          break;
        case 'Escape':
          if (open) {
            e.preventDefault();
            closeMenu();
            toggleRef.current?.focus();
          }
          break;
      }
    };

    const handleOptionKeyDown = (
      e: React.KeyboardEvent,
      index: number
    ) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex((prev) =>
            Math.min(prev + 1, options.length - 1)
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex((prev) => Math.max(prev - 1, 0));
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          onOptionSelect?.(options[index]);
          closeMenu();
          toggleRef.current?.focus();
          break;
        case 'Escape':
          e.preventDefault();
          closeMenu();
          toggleRef.current?.focus();
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

    return (
      <div
        ref={ref}
        className={['mds-split-btn', className].filter(Boolean).join(' ')}
        data-size={size}
        data-inverted={inverted || undefined}
        data-disabled={disabled || undefined}
        {...props}
      >
        <button
          type="button"
          className="mds-split-btn__action"
          disabled={disabled}
          onClick={onClick}
        >
          <span className="mds-split-btn__state-layer">
            {leftIcon && (
              <span className="mds-split-btn__icon">{leftIcon}</span>
            )}
            <span className="mds-split-btn__label">{children}</span>
          </span>
        </button>

        <button
          ref={toggleRef}
          type="button"
          className="mds-split-btn__toggle"
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={toggleMenu}
          onKeyDown={handleToggleKeyDown}
        >
          <span className="mds-split-btn__toggle-layer">
            <ChevronDownWide size={24} style={{ color: 'inherit' }} />
          </span>
        </button>

        {open && options.length > 0 && (
          <div
            ref={menuRef}
            className="mds-split-btn__menu"
            role="listbox"
          >
            {options.map((option, index) => (
              <button
                key={option.value}
                ref={(el) => {
                  optionRefs.current[index] = el;
                }}
                type="button"
                role="option"
                className="mds-split-btn__option"
                aria-selected={index === highlightedIndex}
                data-highlighted={index === highlightedIndex || undefined}
                onClick={() => {
                  onOptionSelect?.(option);
                  closeMenu();
                  toggleRef.current?.focus();
                }}
                onKeyDown={(e) => handleOptionKeyDown(e, index)}
              >
                {option.label ?? option.value}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);

SplitButton.displayName = 'SplitButton';

export { SplitButton };
