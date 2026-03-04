import { forwardRef } from 'react';
import { Button } from '../Button';
import { Alerts } from '../../icons/Alerts';
import { Warning } from '../../icons/Warning';
import { CheckCircle } from '../../icons/CheckCircle';
import { Close } from '../../icons/Close';
import './Notification.css';

export type NotificationType = 'informational' | 'warning' | 'error' | 'success';
export type NotificationAlignment = 'horizontal' | 'vertical';

export interface NotificationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  type?: NotificationType;
  alignment?: NotificationAlignment;
  inverted?: boolean;
  showIcon?: boolean;
  showTitle?: boolean;
  showButton?: boolean;
  showClose?: boolean;
  title?: string;
  content?: string;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
}

const NOTIFICATION_ICON_SIZE = 32;

const NotificationBanner = forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      type = 'informational',
      alignment = 'horizontal',
      inverted = false,
      showIcon = true,
      showTitle = true,
      showButton = true,
      showClose = true,
      title = 'This is a Notification',
      content = 'Lorem ipsum dolor sit amet. Qui optio dolores est animi deserunt non suscipit fuga. Et architecto eum dolorum praesentium ex et.',
      actionLabel = 'Button Label',
      onAction,
      onClose,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const bodyContent = children ?? content;

    const renderIcon = () => {
      if (!showIcon) return null;
      const iconProps = {
        size: NOTIFICATION_ICON_SIZE,
        ...(inverted && { style: { color: 'var(--ref-color-white)' } }),
      };
      switch (type) {
        case 'success':
          return <CheckCircle {...iconProps} />;
        case 'warning':
          return <Warning {...iconProps} />;
        case 'error':
          return <Alerts {...iconProps} />;
        case 'informational':
        default:
          return <Alerts {...iconProps} />;
      }
    };

    return (
      <div
        ref={ref}
        role="alert"
        aria-live="polite"
        className={['mds-notification', className].filter(Boolean).join(' ')}
        data-type={type}
        data-alignment={alignment}
        data-inverted={inverted || undefined}
        {...props}
      >
        <div className="mds-notification__inner">
        {showIcon && <div className="mds-notification__icon">{renderIcon()}</div>}
        <div className="mds-notification__content">
          <div className="mds-notification__text">
            {showTitle && title && <p className="mds-notification__title">{title}</p>}
            <p className="mds-notification__body">{bodyContent}</p>
          </div>
          {showButton && (actionLabel || onAction) && (
            <Button
              variant="primary"
              size="sm"
              inverted={inverted}
              className="mds-notification__action"
              onClick={onAction}
            >
              {actionLabel}
            </Button>
          )}
        </div>
        {showClose && (
          <button
            type="button"
            className="mds-notification__close"
            onClick={onClose}
            aria-label="Dismiss notification"
          >
            <Close size={20} />
          </button>
        )}
        </div>
      </div>
    );
  }
);

NotificationBanner.displayName = 'NotificationBanner';

export { NotificationBanner };
