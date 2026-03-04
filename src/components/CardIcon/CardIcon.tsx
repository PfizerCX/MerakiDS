import { forwardRef } from 'react';
import './CardIcon.css';

export interface CardIconProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon element rendered at the top of the card (48x48 container) */
  icon?: React.ReactNode;
  /** Headline text displayed below the icon */
  headline?: React.ReactNode;
}

const CardIcon = forwardRef<HTMLDivElement, CardIconProps>(
  ({ icon, headline, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={['mds-card-icon', className].filter(Boolean).join(' ')}
        {...props}
      >
        <div className="mds-card-icon__header">
          {icon && <div className="mds-card-icon__icon">{icon}</div>}
          {headline && (
            <p className="mds-card-icon__headline">{headline}</p>
          )}
        </div>
        {children && (
          <div className="mds-card-icon__actions">{children}</div>
        )}
      </div>
    );
  }
);

CardIcon.displayName = 'CardIcon';

export { CardIcon };
