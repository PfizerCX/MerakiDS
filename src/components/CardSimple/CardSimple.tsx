import { forwardRef } from 'react';
import { ArrowRight } from '../../icons/ArrowRight';
import './CardSimple.css';

export interface CardSimpleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: 'base' | 'solid' | 'outline' | 'outline-inverse';
  /** Headline text displayed prominently */
  headline?: React.ReactNode;
  /** Optional body text shown beside the icons */
  body?: React.ReactNode;
  /** Whether to show the body text */
  showBody?: boolean;
  /** Custom element rendered in the left icon slot */
  leftIcon?: React.ReactNode;
  /** Custom element rendered in the right icon slot. Defaults to an ArrowRight icon. Set to `null` to hide. */
  rightIcon?: React.ReactNode;
  /** Whether to show the right icon (defaults to true) */
  showRightIcon?: boolean;
}

const CardSimple = forwardRef<HTMLDivElement, CardSimpleProps>(
  (
    {
      variant = 'base',
      headline,
      body,
      showBody = true,
      leftIcon,
      rightIcon,
      showRightIcon = true,
      className,
      ...props
    },
    ref
  ) => {
    const iconColor =
      variant === 'solid' || variant === 'outline-inverse'
        ? 'var(--color-on-primary)'
        : 'var(--color-primary)';

    const defaultRightIcon = (
      <ArrowRight size={36} style={{ color: iconColor }} />
    );

    const resolvedRightIcon = rightIcon === undefined ? defaultRightIcon : rightIcon;

    const hasContent = leftIcon || (showBody && body) || (showRightIcon && resolvedRightIcon);

    return (
      <div
        ref={ref}
        className={['mds-card-simple', className].filter(Boolean).join(' ')}
        data-variant={variant}
        {...props}
      >
        {headline && (
          <p className="mds-card-simple__headline">{headline}</p>
        )}

        {hasContent && (
          <div className="mds-card-simple__content">
            {leftIcon && (
              <div className="mds-card-simple__icon">{leftIcon}</div>
            )}

            {showBody && body && (
              <p className="mds-card-simple__body">{body}</p>
            )}

            {showRightIcon && resolvedRightIcon && (
              <div className="mds-card-simple__icon">{resolvedRightIcon}</div>
            )}
          </div>
        )}
      </div>
    );
  }
);

CardSimple.displayName = 'CardSimple';

export { CardSimple };
