import { forwardRef } from 'react';
import './LoadingSpinner.css';

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size variant. */
  size?: 'sm' | 'lg';
  /** Color mode — light for light backgrounds, dark for dark backgrounds. */
  mode?: 'light' | 'dark';
}

const LoadingSpinner = forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({ size = 'sm', mode = 'light', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={['mds-loading-spinner', className].filter(Boolean).join(' ')}
        role="status"
        aria-label="Loading"
        data-size={size}
        data-mode={mode}
        {...props}
      >
        <svg
          className="mds-loading-spinner__svg"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="mds-loading-spinner__track"
            cx="12"
            cy="12"
            r="10"
            strokeWidth="3"
          />
          <circle
            className="mds-loading-spinner__arc"
            cx="12"
            cy="12"
            r="10"
            strokeWidth="3"
            strokeDasharray="62.83"
            strokeDashoffset="47.12"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  },
);

LoadingSpinner.displayName = 'LoadingSpinner';

export { LoadingSpinner };
