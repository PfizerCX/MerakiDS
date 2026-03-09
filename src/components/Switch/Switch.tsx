import { forwardRef } from 'react';
import './Switch.css';

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Accessible name for the switch (required for screen readers). Defaults to "Toggle" if not provided. */
  'aria-label'?: string;
}

const DEFAULT_ARIA_LABEL = 'Toggle';

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, onChange, disabled, 'aria-label': ariaLabel = DEFAULT_ARIA_LABEL, className, onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled) onChange(!checked);
      onClick?.(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (!disabled) onChange(!checked);
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={ariaLabel ?? DEFAULT_ARIA_LABEL}
        disabled={disabled}
        className={['mds-switch', className].filter(Boolean).join(' ')}
        data-checked={checked || undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <span className="mds-switch__track">
          <span className="mds-switch__handle" />
        </span>
      </button>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch };
