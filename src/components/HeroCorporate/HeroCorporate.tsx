import { forwardRef } from 'react';
import './HeroCorporate.css';

export interface HeroCorporateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Background image source URL */
  imageSrc: string;
  /** Alt text for the background image */
  imageAlt?: string;
  /** Primary headline text */
  headline?: string;
  /** Supporting subheadline text */
  subheadline?: string;
  /** Action content (typically a Button) rendered below the copy */
  actions?: React.ReactNode;
}

const HeroCorporate = forwardRef<HTMLDivElement, HeroCorporateProps>(
  (
    {
      imageSrc,
      imageAlt = '',
      headline = 'Write a clear and eye-catching headline.',
      subheadline = 'Write a helpful and concise subheadline. 1-2 lines of text maximum.',
      actions,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={['mds-hero-corporate', className].filter(Boolean).join(' ')}
        {...props}
      >
        <div className="mds-hero-corporate__image" aria-hidden="true">
          <img src={imageSrc} alt={imageAlt} />
          <div className="mds-hero-corporate__scrim" />
        </div>

        <div className="mds-hero-corporate__body">
          <div className="mds-hero-corporate__copy">
            {headline && (
              <h1 className="mds-hero-corporate__headline">{headline}</h1>
            )}
            {subheadline && (
              <p className="mds-hero-corporate__subheadline">{subheadline}</p>
            )}
          </div>

          {actions && (
            <div className="mds-hero-corporate__actions">{actions}</div>
          )}
        </div>
      </div>
    );
  }
);

HeroCorporate.displayName = 'HeroCorporate';

export { HeroCorporate };
