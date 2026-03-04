import { forwardRef } from 'react';
import './HeroStacked.css';

export interface HeroStackedProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Layout direction: side-by-side content or fully stacked */
  orientation?: 'horizontal' | 'vertical';
  /** Where the text content block appears relative to the image */
  textPosition?: 'left' | 'right';
  /** Hero image source URL */
  imageSrc: string;
  /** Alt text for the hero image */
  imageAlt?: string;
  /** Hero headline text */
  headline: string;
  /** Body copy below the headline */
  body?: string;
  /** Action buttons rendered in the footer */
  actions?: React.ReactNode;
  /** Disclaimer text displayed beneath the actions */
  disclaimer?: string;
  /** Video control elements overlaid on the image */
  videoControls?: React.ReactNode;
}

const HeroStacked = forwardRef<HTMLDivElement, HeroStackedProps>(
  (
    {
      orientation = 'horizontal',
      textPosition = 'right',
      imageSrc,
      imageAlt = '',
      headline,
      body,
      actions,
      disclaimer,
      videoControls,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={['mds-hero-stacked', className].filter(Boolean).join(' ')}
        data-orientation={orientation}
        data-text-position={textPosition}
        {...props}
      >
        <div className="mds-hero-stacked__image">
          <img src={imageSrc} alt={imageAlt} />
          {videoControls && (
            <div className="mds-hero-stacked__video-controls">
              {videoControls}
            </div>
          )}
        </div>

        <div className="mds-hero-stacked__content">
          <div className="mds-hero-stacked__copy">
            <p className="mds-hero-stacked__headline">{headline}</p>
            {body && <p className="mds-hero-stacked__body">{body}</p>}
          </div>
          <div className="mds-hero-stacked__footer">
            {actions && (
              <div className="mds-hero-stacked__actions">{actions}</div>
            )}
            {disclaimer && (
              <div className="mds-hero-stacked__disclaimer">
                <p>{disclaimer}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

HeroStacked.displayName = 'HeroStacked';

export { HeroStacked };
