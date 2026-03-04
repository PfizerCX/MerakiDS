import { forwardRef } from 'react';
import './Video.css';

export interface VideoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the video fills edge-to-edge or is inset with layout margins */
  variant?: 'inset' | 'full';
  /** Title displayed over the gradient overlay */
  title?: string;
  /** Thumbnail image source URL */
  thumbnailSrc: string;
  /** Alt text for the thumbnail image */
  thumbnailAlt?: string;
  /** Callback when the play button is clicked */
  onPlay?: () => void;
}

const Video = forwardRef<HTMLDivElement, VideoProps>(
  (
    {
      variant = 'inset',
      title,
      thumbnailSrc,
      thumbnailAlt = '',
      onPlay,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={['mds-video', className].filter(Boolean).join(' ')}
        data-variant={variant}
        {...props}
      >
        <div className="mds-video__embed">
          <div className="mds-video__media">
            <img
              className="mds-video__thumbnail"
              src={thumbnailSrc}
              alt={thumbnailAlt}
            />
          </div>

          <button
            className="mds-video__play-button"
            onClick={onPlay}
            aria-label="Play video"
            type="button"
          >
            <svg
              width="88"
              height="88"
              viewBox="0 0 88 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="44" cy="44" r="44" fill="black" fillOpacity="0.5" />
              <path d="M36 28L62 44L36 60V28Z" fill="white" />
            </svg>
          </button>

          {title && (
            <div className="mds-video__title-bar">
              <p className="mds-video__title">{title}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Video.displayName = 'Video';

export { Video };
