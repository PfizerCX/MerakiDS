import { forwardRef } from 'react';
import './Hero.css';

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Layout direction: side-by-side or stacked */
  orientation?: 'horizontal' | 'vertical';
  /** Whether the image appears before or after the text content */
  imagePosition?: 'after' | 'before';
  /** Vertical alignment of the content block (horizontal: top/bottom offset; vertical: stack order) */
  contentAlign?: 'top' | 'bottom';
  /** Hero display headline text */
  headline: string;
  /** Body copy below the headline */
  body?: string;
  /** Hero image source URL */
  imageSrc: string;
  /** Alt text for the hero image */
  imageAlt?: string;
  /** Action buttons rendered below the copy */
  actions?: React.ReactNode;
  /** Disclaimer text displayed beneath the actions */
  disclaimer?: string;
  /** Video control elements overlaid on the image */
  videoControls?: React.ReactNode;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(
  (
    {
      orientation = 'vertical',
      imagePosition = 'after',
      contentAlign = 'top',
      headline,
      body,
      imageSrc,
      imageAlt = '',
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
        className={['mds-hero', className].filter(Boolean).join(' ')}
        data-orientation={orientation}
        data-image-position={imagePosition}
        data-content-align={contentAlign}
        {...props}
      >
        <div className="mds-hero__content">
          <div className="mds-hero__copy">
            <p className="mds-hero__headline">{headline}</p>
            {body && <p className="mds-hero__body">{body}</p>}
          </div>
          <div className="mds-hero__footer">
            {actions && <div className="mds-hero__actions">{actions}</div>}
            {disclaimer && (
              <div className="mds-hero__disclaimer">
                <p>{disclaimer}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mds-hero__image-container">
          <div className="mds-hero__image">
            <img src={imageSrc} alt={imageAlt} />
            {videoControls && (
              <div className="mds-hero__video-controls">{videoControls}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Hero.displayName = 'Hero';

export { Hero };
