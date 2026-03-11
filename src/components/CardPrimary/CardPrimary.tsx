import { forwardRef } from 'react';
import { ChevronRightWide } from '../../icons/ChevronRightWide';
import './CardPrimary.css';

export interface CardPrimaryProps extends React.HTMLAttributes<HTMLDivElement> {
  /** URL for the card image */
  imageSrc?: string;
  /** Alt text for the card image */
  imageAlt?: string;
  /** Headline text displayed below the image */
  headline?: React.ReactNode;
  /** Body copy displayed below the headline */
  body?: React.ReactNode;
  /** Disclaimer text displayed below the CTA; pass falsy to hide */
  disclaimer?: React.ReactNode;
  /** Click handler for the CTA icon button */
  onAction?: React.MouseEventHandler<HTMLButtonElement>;
  /** Accessible label for the CTA icon button */
  actionLabel?: string;
}

const CardPrimary = forwardRef<HTMLDivElement, CardPrimaryProps>(
  (
    {
      imageSrc,
      imageAlt = '',
      headline,
      body,
      disclaimer,
      onAction,
      actionLabel = 'Learn more',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={['mds-card-primary', className].filter(Boolean).join(' ')}
        {...props}
      >
        {imageSrc && (
          <div className="mds-card-primary__image">
            <img src={imageSrc} alt={imageAlt} />
          </div>
        )}

        <div className="mds-card-primary__content">
          <div className="mds-card-primary__copy">
            {headline && (
              <p className="mds-card-primary__headline">{headline}</p>
            )}
            {body && <p className="mds-card-primary__body">{body}</p>}
          </div>

          {(onAction || disclaimer) && (
            <div className="mds-card-primary__actions">
              {onAction && (
                <div className="mds-card-primary__cta-row">
                  <button
                    type="button"
                    className="mds-card-primary__cta"
                    onClick={onAction}
                    aria-label={actionLabel}
                  >
                    <ChevronRightWide size={20} />
                  </button>
                </div>
              )}

              {disclaimer && (
                <p className="mds-card-primary__disclaimer">{disclaimer}</p>
              )}
            </div>
          )}

          {children}
        </div>
      </div>
    );
  }
);

CardPrimary.displayName = 'CardPrimary';

export { CardPrimary };
