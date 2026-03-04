import { forwardRef, useState, useCallback } from 'react';
import './Slideshow.css';

export interface SlideshowSlide {
  /** Small label displayed above the headline */
  kicker?: string;
  /** Main headline text */
  headline: string;
  /** CTA button label */
  buttonLabel?: string;
  /** Click handler for the CTA button */
  onButtonClick?: () => void;
  /** Image source URL */
  imageSrc: string;
  /** Alt text for the slide image */
  imageAlt?: string;
  /** Attribution or disclaimer text overlaid on the image */
  imageDescription?: string;
}

export interface SlideshowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Layout direction */
  layout?: 'vertical' | 'horizontal';
  /** How the image is displayed relative to the content */
  imageStyle?: 'side-by-side' | 'full';
  /** Size ratio between content and image areas */
  variant?: '33-66' | '50-50';
  /** Whether the image appears before or after the text content */
  imagePosition?: 'after' | 'before';
  /** Array of slides to display */
  slides: SlideshowSlide[];
  /** Controlled current slide index (0-based) */
  activeIndex?: number;
  /** Callback when the active slide changes */
  onSlideChange?: (index: number) => void;
}

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.3 14.6L7.7 10L12.3 5.4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.7 5.4L12.3 10L7.7 14.6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Slideshow = forwardRef<HTMLDivElement, SlideshowProps>(
  (
    {
      layout = 'vertical',
      imageStyle = 'side-by-side',
      variant = '33-66',
      imagePosition = 'after',
      slides,
      activeIndex: controlledIndex,
      onSlideChange,
      className,
      ...props
    },
    ref
  ) => {
    const [internalIndex, setInternalIndex] = useState(0);
    const isControlled = controlledIndex !== undefined;
    const currentIndex = isControlled ? controlledIndex : internalIndex;

    const goTo = useCallback(
      (index: number) => {
        if (!isControlled) setInternalIndex(index);
        onSlideChange?.(index);
      },
      [isControlled, onSlideChange]
    );

    const goPrev = useCallback(() => {
      const next = currentIndex <= 0 ? slides.length - 1 : currentIndex - 1;
      goTo(next);
    }, [currentIndex, slides.length, goTo]);

    const goNext = useCallback(() => {
      const next = currentIndex >= slides.length - 1 ? 0 : currentIndex + 1;
      goTo(next);
    }, [currentIndex, slides.length, goTo]);

    if (!slides.length) return null;

    const slide = slides[currentIndex] ?? slides[0];
    const isFull = imageStyle === 'full';

    const imageBlock = (
      <div className="mds-slideshow__image-container">
        <img src={slide.imageSrc} alt={slide.imageAlt ?? ''} />
        {slide.imageDescription && (
          <div className="mds-slideshow__image-desc">
            <p>{slide.imageDescription}</p>
          </div>
        )}
      </div>
    );

    return (
      <div
        ref={ref}
        className={['mds-slideshow', className].filter(Boolean).join(' ')}
        data-layout={layout}
        data-image-style={imageStyle}
        data-variant={variant}
        data-image-position={imagePosition}
        role="region"
        aria-roledescription="carousel"
        aria-label="Slideshow"
        {...props}
      >
        {isFull && (
          <img
            className="mds-slideshow__bg"
            src={slide.imageSrc}
            alt=""
            aria-hidden="true"
          />
        )}

        {imagePosition === 'before' && !isFull && imageBlock}

        <div
          className="mds-slideshow__content"
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${currentIndex + 1} of ${slides.length}`}
        >
          <div className="mds-slideshow__copy">
            <div className="mds-slideshow__text">
              {slide.kicker && (
                <span className="mds-slideshow__kicker">{slide.kicker}</span>
              )}
              <p className="mds-slideshow__headline">{slide.headline}</p>
            </div>
            {slide.buttonLabel && (
              <div className="mds-slideshow__actions">
                <button
                  type="button"
                  className="mds-slideshow__cta"
                  onClick={slide.onButtonClick}
                >
                  {slide.buttonLabel}
                </button>
              </div>
            )}
          </div>

          <div className="mds-slideshow__nav">
            <div className="mds-slideshow__nav-buttons">
              <button
                type="button"
                className="mds-slideshow__nav-btn"
                onClick={goPrev}
                aria-label="Previous slide"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                className="mds-slideshow__nav-btn"
                onClick={goNext}
                aria-label="Next slide"
              >
                <ChevronRight />
              </button>
            </div>
            <span className="mds-slideshow__pagination">
              {currentIndex + 1}/{slides.length}
            </span>
          </div>

          {isFull && slide.imageDescription && (
            <div className="mds-slideshow__image-desc mds-slideshow__image-desc--inline">
              <p>{slide.imageDescription}</p>
            </div>
          )}
        </div>

        {imagePosition === 'after' && !isFull && imageBlock}
      </div>
    );
  }
);

Slideshow.displayName = 'Slideshow';

export { Slideshow };
