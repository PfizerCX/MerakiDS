import { forwardRef } from 'react';
import './HeroLegacyImage.css';

export interface HeroLegacyImageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Layout direction: horizontal (content + sidebar side-by-side) or vertical (stacked) */
  layout?: 'vertical' | 'horizontal';
  /** Hero image source URL */
  imageSrc: string;
  /** Alt text for the hero image */
  imageAlt?: string;
  /** Primary headline text */
  headline?: React.ReactNode;
  /** Body copy below the headline */
  body?: React.ReactNode;
  /** Optional sidebar content (e.g. "On This Page" navigation) */
  sidebar?: React.ReactNode;
}

const HeroLegacyImage = forwardRef<HTMLDivElement, HeroLegacyImageProps>(
  (
    {
      layout = 'vertical',
      imageSrc,
      imageAlt = '',
      headline,
      body,
      sidebar,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={['mds-hero-legacy-image', className]
          .filter(Boolean)
          .join(' ')}
        data-layout={layout}
        {...props}
      >
        <div className="mds-hero-legacy-image__image" aria-hidden="true">
          <img src={imageSrc} alt={imageAlt} />
        </div>

        <div className="mds-hero-legacy-image__container">
          <div className="mds-hero-legacy-image__content">
            <div className="mds-hero-legacy-image__copy">
              {headline && (
                <h1 className="mds-hero-legacy-image__headline">{headline}</h1>
              )}
              {body && (
                <p className="mds-hero-legacy-image__body">{body}</p>
              )}
            </div>
          </div>

          {sidebar && (
            <div className="mds-hero-legacy-image__sidebar">{sidebar}</div>
          )}

          {children}
        </div>
      </div>
    );
  }
);

HeroLegacyImage.displayName = 'HeroLegacyImage';

export { HeroLegacyImage };
