import { forwardRef } from 'react';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'filled' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'elevated', padding = 'md', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={['mds-card', className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-padding={padding}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
