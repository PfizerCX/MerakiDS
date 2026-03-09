import { forwardRef } from 'react';
import { Close } from '../../icons/Close';
import './Tooltip.css';

export type TooltipBeakPosition =
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

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Beak position relative to the tooltip body */
  beakPosition?: TooltipBeakPosition;
  /** Title text */
  title?: string;
  /** Body text content */
  content?: string;
  /** Show the close button */
  showClose?: boolean;
  /** Show the body text */
  showContent?: boolean;
  /** Callback when close button is clicked */
  onClose?: () => void;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      beakPosition = 'top-left',
      title = 'Tooltip Title',
      content = 'Tooltip caption that is only 1 or 2 lines long.',
      showClose = true,
      showContent = true,
      onClose,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="tooltip"
        className={['mds-tooltip', className].filter(Boolean).join(' ')}
        data-beak={beakPosition}
        {...props}
      >
        <div className="mds-tooltip__header">
          <p className="mds-tooltip__title">{title}</p>
          {showClose && (
            <button
              type="button"
              className="mds-tooltip__close"
              onClick={onClose}
              aria-label="Dismiss tooltip"
            >
              <Close size={20} style={{ color: 'var(--ref-color-white)' }} />
            </button>
          )}
        </div>

        {showContent && (
          <p className="mds-tooltip__content">{children ?? content}</p>
        )}

        <span className="mds-tooltip__beak" aria-hidden="true" />
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export { Tooltip };
