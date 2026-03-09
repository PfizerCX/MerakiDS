import { forwardRef } from 'react';
import { ErrorCircle } from '../../icons/ErrorCircle';
import './Announcement.css';

export type AnnouncementLayout = 'vertical' | 'horizontal';

export interface AnnouncementProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Layout direction — vertical stacks icon above text, horizontal places them side by side */
  layout?: AnnouncementLayout;
  /** Whether to display the announcement icon */
  showIcon?: boolean;
}

const ICON_SIZE = 32;

const Announcement = forwardRef<HTMLDivElement, AnnouncementProps>(
  (
    {
      layout = 'vertical',
      showIcon = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="status"
        className={['mds-announcement', className].filter(Boolean).join(' ')}
        data-layout={layout}
        {...props}
      >
        {showIcon && (
          <span className="mds-announcement__icon" aria-hidden="true">
            <ErrorCircle size={ICON_SIZE} />
          </span>
        )}
        <div className="mds-announcement__body">{children}</div>
      </div>
    );
  }
);

Announcement.displayName = 'Announcement';

export { Announcement };
