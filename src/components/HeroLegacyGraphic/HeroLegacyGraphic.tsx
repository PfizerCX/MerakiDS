import { forwardRef } from 'react';
import './HeroLegacyGraphic.css';

export interface HeroLegacyGraphicProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Layout direction: vertical (narrow) or horizontal (wide) */
  layout?: 'vertical' | 'horizontal';
  /** Whether to show the graphic indicator overlay on the image */
  graphic?: boolean;
  /** Whether to show the CTA actions below the body */
  sidebar?: boolean;
  /** Background image source URL */
  imageSrc: string;
  /** Alt text for the background image */
  imageAlt?: string;
  /** Primary headline text */
  headline?: string;
  /** Body copy below the headline */
  body?: string;
  /** Text inside the graphic indicator circle (e.g. "#1") */
  graphicIndicator?: string;
  /** Subheadline in the graphic container */
  graphicSubheadline?: string;
  /** Description text in the graphic container */
  graphicDescription?: string;
  /** Attribution title shown over the image */
  attributionTitle?: string;
  /** Attribution subtitle shown over the image */
  attributionSubtitle?: string;
  /** Action content (typically a Button) rendered in the sidebar/actions area */
  actions?: React.ReactNode;
}

const HeroLegacyGraphic = forwardRef<HTMLDivElement, HeroLegacyGraphicProps>(
  (
    {
      layout = 'vertical',
      graphic = true,
      sidebar = true,
      imageSrc,
      imageAlt = '',
      headline = 'Write a clear and eye-catching headline.',
      body = "Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",
      graphicIndicator = '#1',
      graphicSubheadline = 'Write a clear and eye-catching subheadline.',
      graphicDescription = '*Write a helpful and concise subheadline 1-3 lines maximum.',
      attributionTitle = 'Title',
      attributionSubtitle = 'Actual [BRAND] Patient',
      actions,
      className,
      ...props
    },
    ref
  ) => {
    const isHorizontal = layout === 'horizontal';

    const attributionBlock = (
      <div className="mds-hero-legacy-graphic__attribution">
        <p className="mds-hero-legacy-graphic__attribution-title">
          {attributionTitle}
        </p>
        <p className="mds-hero-legacy-graphic__attribution-subtitle">
          {attributionSubtitle}
        </p>
      </div>
    );

    const graphicContainer = (
      <div className="mds-hero-legacy-graphic__graphic-container">
        <div className="mds-hero-legacy-graphic__indicator">
          <p className="mds-hero-legacy-graphic__indicator-text">
            {graphicIndicator}
          </p>
        </div>
        <div className="mds-hero-legacy-graphic__graphic-copy">
          <p className="mds-hero-legacy-graphic__graphic-subheadline">
            {graphicSubheadline}
          </p>
          <p className="mds-hero-legacy-graphic__graphic-description">
            {graphicDescription}
          </p>
        </div>
      </div>
    );

    return (
      <div
        ref={ref}
        className={['mds-hero-legacy-graphic', className]
          .filter(Boolean)
          .join(' ')}
        data-layout={layout}
        {...props}
      >
        <div className="mds-hero-legacy-graphic__image">
          <img src={imageSrc} alt={imageAlt} />

          {graphic && (
            <div className="mds-hero-legacy-graphic__graphic">
              {isHorizontal ? (
                <>
                  {graphicContainer}
                  {attributionBlock}
                </>
              ) : (
                <>
                  {attributionBlock}
                  {graphicContainer}
                </>
              )}
            </div>
          )}
        </div>

        <div className="mds-hero-legacy-graphic__body">
          {headline && (
            <h2 className="mds-hero-legacy-graphic__headline">{headline}</h2>
          )}

          <div className="mds-hero-legacy-graphic__content">
            {body && (
              <p className="mds-hero-legacy-graphic__text">{body}</p>
            )}

            {sidebar && actions && (
              <div className="mds-hero-legacy-graphic__actions">{actions}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

HeroLegacyGraphic.displayName = 'HeroLegacyGraphic';

export { HeroLegacyGraphic };
