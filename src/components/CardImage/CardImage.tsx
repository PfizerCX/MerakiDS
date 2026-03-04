import { forwardRef } from 'react';
import './CardImage.css';

export interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image source URL */
  imageSrc: string;
  /** Image alt text for accessibility */
  imageAlt?: string;
  /** Card layout variant */
  imageVariant?: 'base' | 'large' | 'overlap';
  /** Uses primary background for an emphasized appearance */
  emphasized?: boolean;
  /** Headline text */
  headline: string;
  /** Body copy text (visible in the base variant only) */
  body?: string;
  /** Action buttons rendered below the copy */
  actions?: React.ReactNode;
  /** Disclaimer text displayed beneath the actions */
  disclaimer?: string;
}

const CardImage = forwardRef<HTMLDivElement, CardImageProps>(
  (
    {
      imageSrc,
      imageAlt = '',
      imageVariant = 'base',
      emphasized = false,
      headline,
      body,
      actions,
      disclaimer,
      className,
      ...props
    },
    ref
  ) => {
    const isOverlap = imageVariant === 'overlap';

    return (
      <div
        ref={ref}
        className={['mds-card-image', className].filter(Boolean).join(' ')}
        data-image-variant={imageVariant}
        data-emphasized={emphasized || undefined}
        {...props}
      >
        {isOverlap && (
          <div className="mds-card-image__image mds-card-image__image--overlap">
            <img src={imageSrc} alt={imageAlt} />
          </div>
        )}

        <div className="mds-card-image__container">
          {!isOverlap && (
            <div className="mds-card-image__content">
              <div className="mds-card-image__image">
                <img src={imageSrc} alt={imageAlt} />
              </div>
              <div className="mds-card-image__copy">
                <p className="mds-card-image__headline">{headline}</p>
                {body && imageVariant === 'base' && (
                  <p className="mds-card-image__body">{body}</p>
                )}
              </div>
            </div>
          )}

          {isOverlap && (
            <div className="mds-card-image__copy">
              <p className="mds-card-image__headline">{headline}</p>
            </div>
          )}

          <div className="mds-card-image__footer">
            {actions && (
              <div className="mds-card-image__actions">{actions}</div>
            )}
            {disclaimer && (
              <div className="mds-card-image__disclaimer">
                <p>{disclaimer}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

CardImage.displayName = 'CardImage';

export { CardImage };
