import { forwardRef } from 'react';
import './PageBreak.css';

export interface PageBreakProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Layout direction: side-by-side or stacked */
  layout?: 'vertical' | 'horizontal';
  /** Where the image appears relative to the text content */
  imagePosition?: 'before' | 'after';
  /** Which side of the component the image's rounded corners face */
  imageDirection?: 'left' | 'right';
  /** Image source URL */
  imageSrc: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Caption text displayed on or below the image */
  imageCaption?: string;
  /** Headline text */
  headline: string;
  /** Body copy below the headline */
  body?: string;
  /** Action buttons rendered in the footer */
  actions?: React.ReactNode;
  /** Disclaimer text displayed beneath the actions */
  disclaimer?: string;
}

const PageBreak = forwardRef<HTMLDivElement, PageBreakProps>(
  (
    {
      layout = 'vertical',
      imagePosition = 'before',
      imageDirection = 'left',
      imageSrc,
      imageAlt = '',
      imageCaption,
      headline,
      body,
      actions,
      disclaimer,
      className,
      ...props
    },
    ref
  ) => {
    const imageSection = (
      <div className="mds-page-break__image-block">
        <div className="mds-page-break__image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
        {imageCaption && (
          <div className="mds-page-break__image-caption">
            <p>{imageCaption}</p>
          </div>
        )}
      </div>
    );

    const contentSection = (
      <div className="mds-page-break__content">
        <div className="mds-page-break__copy">
          <p className="mds-page-break__headline">{headline}</p>
          {body && <p className="mds-page-break__body">{body}</p>}
        </div>
        <div className="mds-page-break__footer">
          {actions && (
            <div className="mds-page-break__actions">{actions}</div>
          )}
          {disclaimer && (
            <div className="mds-page-break__disclaimer">
              <p>{disclaimer}</p>
            </div>
          )}
        </div>
      </div>
    );

    return (
      <div
        ref={ref}
        className={['mds-page-break', className].filter(Boolean).join(' ')}
        data-layout={layout}
        data-image-position={imagePosition}
        data-image-direction={imageDirection}
        {...props}
      >
        {imagePosition === 'before' ? (
          <>
            {imageSection}
            {contentSection}
          </>
        ) : (
          <>
            {contentSection}
            {imageSection}
          </>
        )}
      </div>
    );
  }
);

PageBreak.displayName = 'PageBreak';

export { PageBreak };
