import { forwardRef } from 'react';
import './Badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'positive' | 'negative' | 'cautionary' | 'neutral';
  size?: 'sm' | 'md';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={['mds-badge', className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-size={size}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
