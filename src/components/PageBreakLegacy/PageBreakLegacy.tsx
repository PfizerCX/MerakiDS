import { forwardRef } from 'react';
import { Button } from '../Button';
import './PageBreakLegacy.css';

export interface PageBreakLegacyProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Layout direction: vertical (stacked) or horizontal (side-by-side) */
  layout?: 'vertical' | 'horizontal';
  /** Visual variant: full-bleed (edge-to-edge) or inset (rounded corners) */
  variant?: 'full-bleed' | 'inset';
  /** Position of the image relative to the content slot */
  imagePosition?: 'start' | 'end';
  /** Image source URL */
  imageSrc: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Primary headline text */
  headline?: React.ReactNode;
  /** Body copy displayed below the headline */
  body?: React.ReactNode;
  /** CTA button label */
  actionLabel?: string;
  /** Click handler for the CTA button */
  onAction?: React.MouseEventHandler<HTMLButtonElement>;
  /** Optional image attribution overlay with title and subtitle */
  attribution?: { title: string; subtitle?: string };
}

const PageBreakLegacy = forwardRef<HTMLDivElement, PageBreakLegacyProps>(
  (
    {
      layout = 'vertical',
      variant = 'full-bleed',
      imagePosition = 'start',
      imageSrc,
      imageAlt = '',
      headline,
      body,
      actionLabel = 'Button Label',
      onAction,
      attribution,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const imageBlock = (
      <div className="mds-page-break-legacy__image">
        <img src={imageSrc} alt={imageAlt} />
        {attribution && (
          <div className="mds-page-break-legacy__attribution">
            <p className="mds-page-break-legacy__attribution-title">
              {attribution.title}
            </p>
            {attribution.subtitle && (
              <p className="mds-page-break-legacy__attribution-subtitle">
                {attribution.subtitle}
              </p>
            )}
          </div>
        )}
      </div>
    );

    return (
      <div
        ref={ref}
        className={['mds-page-break-legacy', className]
          .filter(Boolean)
          .join(' ')}
        data-layout={layout}
        data-variant={variant}
        data-image-position={imagePosition}
        {...props}
      >
        {imagePosition === 'start' && imageBlock}

        <div className="mds-page-break-legacy__content">
          <div className="mds-page-break-legacy__copy">
            {headline && (
              <h2 className="mds-page-break-legacy__headline">{headline}</h2>
            )}
            {body && <p className="mds-page-break-legacy__body">{body}</p>}
          </div>

          <div className="mds-page-break-legacy__actions">
            <Button onClick={onAction}>{actionLabel}</Button>
          </div>

          {children}
        </div>

        {imagePosition === 'end' && imageBlock}
      </div>
    );
  }
);

PageBreakLegacy.displayName = 'PageBreakLegacy';

export { PageBreakLegacy };
