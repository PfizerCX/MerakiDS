import { forwardRef } from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  inverted?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      inverted = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        className={['mds-btn', className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-size={size}
        data-inverted={inverted || undefined}
        disabled={disabled}
        {...props}
      >
        <span className="mds-btn__state-layer">
          {leftIcon && <span className="mds-btn__icon">{leftIcon}</span>}
          <span className="mds-btn__label">{children}</span>
          {rightIcon && <span className="mds-btn__icon">{rightIcon}</span>}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
