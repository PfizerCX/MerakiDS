import { forwardRef } from 'react';
import './BasicBlock.css';

export interface BasicBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Layout direction: side-by-side or stacked */
  orientation?: 'horizontal' | 'vertical';
  /** Whether the image appears before or after the text content */
  imagePosition?: 'first' | 'last';
  /** Headline text rendered above the body copy */
  headline?: React.ReactNode;
  /** Body copy rendered below the headline */
  body?: React.ReactNode;
  /** Image source URL */
  imageSrc?: string;
  /** Alt text for the image */
  imageAlt?: string;
}

const BasicBlock = forwardRef<HTMLDivElement, BasicBlockProps>(
  (
    {
      orientation = 'horizontal',
      imagePosition = 'last',
      headline,
      body,
      imageSrc,
      imageAlt = '',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const contentSlot = children ?? (
      <div className="mds-basic-block__content">
        {headline && <h2 className="mds-basic-block__headline">{headline}</h2>}
        {body && <p className="mds-basic-block__body">{body}</p>}
      </div>
    );

    return (
      <div
        ref={ref}
        className={['mds-basic-block', className].filter(Boolean).join(' ')}
        data-orientation={orientation}
        data-image-position={imagePosition}
        {...props}
      >
        {contentSlot}
        {imageSrc && (
          <div className="mds-basic-block__image-wrapper">
            <img
              className="mds-basic-block__image"
              src={imageSrc}
              alt={imageAlt}
            />
          </div>
        )}
      </div>
    );
  }
);

BasicBlock.displayName = 'BasicBlock';

export { BasicBlock };
