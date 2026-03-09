import { forwardRef } from 'react';
import { Button } from '../Button';
import { Close } from '../../icons/Close';
import { ArrowRight } from '../../icons/ArrowRight';
import './Callout.css';

export type CalloutPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'right-top'
  | 'right-center'
  | 'right-bottom'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left-top'
  | 'left-center'
  | 'left-bottom';

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Beak position relative to the callout body */
  position?: CalloutPosition;
  /** Title text */
  title?: string;
  /** Caption / description text */
  caption?: string;
  /** Optional image element rendered above the content */
  image?: React.ReactNode;
  /** Show the image slot */
  showImage?: boolean;
  /** Show the step counter */
  showSteps?: boolean;
  /** Current step number (1-based) */
  currentStep?: number;
  /** Total number of steps */
  totalSteps?: number;
  /** Label for the primary (Next) action button */
  primaryLabel?: string;
  /** Label for the secondary (Back) action button */
  secondaryLabel?: string;
  /** Show the primary action button */
  showPrimary?: boolean;
  /** Show the secondary action button */
  showSecondary?: boolean;
  /** Show the close button */
  showClose?: boolean;
  /** Callback when primary action is clicked */
  onPrimary?: () => void;
  /** Callback when secondary action is clicked */
  onSecondary?: () => void;
  /** Callback when close button is clicked */
  onClose?: () => void;
}

const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  (
    {
      position = 'top-left',
      title = 'Callout Title',
      caption = 'Callout caption that is only 1 or 2 lines long.',
      image,
      showImage = true,
      showSteps = true,
      currentStep = 1,
      totalSteps = 3,
      primaryLabel = 'Next',
      secondaryLabel = 'Back',
      showPrimary = true,
      showSecondary = true,
      showClose = true,
      onPrimary,
      onSecondary,
      onClose,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const hasActions = showPrimary || showSecondary;
    const hasFooter = showSteps || hasActions;

    return (
      <div
        ref={ref}
        role="dialog"
        aria-label={title}
        className={['mds-callout', className].filter(Boolean).join(' ')}
        data-position={position}
        {...props}
      >
        {showImage && image && (
          <div className="mds-callout__image">{image}</div>
        )}

        <div className="mds-callout__content">
          <div className="mds-callout__header">
            <div className="mds-callout__title-row">
              <p className="mds-callout__title">{title}</p>
              {showClose && (
                <button
                  type="button"
                  className="mds-callout__close"
                  onClick={onClose}
                  aria-label="Dismiss callout"
                >
                  <Close size={20} style={{ color: 'var(--ref-color-white)' }} />
                </button>
              )}
            </div>
            <p className="mds-callout__caption">{children ?? caption}</p>
          </div>

          {hasFooter && (
            <div className="mds-callout__footer">
              {showSteps && (
                <span className="mds-callout__steps">
                  {currentStep} of {totalSteps}
                </span>
              )}
              {hasActions && (
                <div className="mds-callout__actions">
                  {showSecondary && (
                    <Button
                      variant="text"
                      size="sm"
                      inverted
                      onClick={onSecondary}
                    >
                      {secondaryLabel}
                    </Button>
                  )}
                  {showPrimary && (
                    <Button
                      variant="primary"
                      size="sm"
                      inverted
                      rightIcon={<ArrowRight size={24} style={{ color: 'inherit' }} />}
                      onClick={onPrimary}
                    >
                      {primaryLabel}
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <span className="mds-callout__beak" aria-hidden="true" />
      </div>
    );
  }
);

Callout.displayName = 'Callout';

export { Callout };
