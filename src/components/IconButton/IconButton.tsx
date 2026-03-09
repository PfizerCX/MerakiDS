import { forwardRef } from 'react';
import './IconButton.css';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button */
  variant?: 'primary' | 'secondary' | 'text';
  /** Button size — sm: 32px, md: 40px, lg: 48px */
  size?: 'sm' | 'md' | 'lg';
  /** Use on dark backgrounds */
  inverted?: boolean;
  /** Icon element to render inside the button */
  icon: React.ReactNode;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      inverted = false,
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
        className={['mds-icon-btn', className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-size={size}
        data-inverted={inverted || undefined}
        disabled={disabled}
        {...props}
      >
        <span className="mds-icon-btn__state-layer">
          <span className="mds-icon-btn__icon">{icon}</span>
        </span>
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export { IconButton };
