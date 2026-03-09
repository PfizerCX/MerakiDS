import { forwardRef } from 'react';
import './FloatingActionButton.css';

export interface FloatingActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style: `primary` (filled) or `tonal` (subtle) */
  variant?: 'primary' | 'tonal';
  /** Button size — maps to 32 px / 40 px / 48 px */
  size?: 'sm' | 'md' | 'lg';
  /** Icon element to render inside the FAB */
  icon: React.ReactNode;
}

const FloatingActionButton = forwardRef<
  HTMLButtonElement,
  FloatingActionButtonProps
>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        className={['mds-fab', className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-size={size}
        disabled={disabled}
        {...props}
      >
        <span className="mds-fab__state-layer">
          <span className="mds-fab__icon">{icon}</span>
        </span>
      </button>
    );
  }
);

FloatingActionButton.displayName = 'FloatingActionButton';

export { FloatingActionButton };
