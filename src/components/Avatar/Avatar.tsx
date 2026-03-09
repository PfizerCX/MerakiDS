import { forwardRef } from 'react';
import { Person } from '../../icons/Person';
import './Avatar.css';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image source URL */
  src?: string;
  /** Alt text for the avatar image */
  alt?: string;
  /** Initials to display when no image is provided (1–2 characters) */
  initials?: string;
  /** Whether to show the status indicator */
  showStatus?: boolean;
  /** Status of the user */
  status?: 'online' | 'away' | 'do-not-disturb' | 'offline';
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = '',
      initials,
      showStatus = false,
      status = 'online',
      className,
      ...props
    },
    ref
  ) => {
    const profileForm = src ? 'image' : initials ? 'initials' : 'profile';

    return (
      <div
        ref={ref}
        className={['mds-avatar', className].filter(Boolean).join(' ')}
        data-profile-form={profileForm}
        {...props}
      >
        <div className="mds-avatar__container">
          {profileForm === 'image' && (
            <img className="mds-avatar__image" src={src} alt={alt} />
          )}
          {profileForm === 'initials' && (
            <span className="mds-avatar__initials">{initials}</span>
          )}
          {profileForm === 'profile' && (
            <Person size={24} className="mds-avatar__icon" />
          )}
        </div>
        {showStatus && (
          <span className="mds-avatar__status" data-status={status}>
            {status === 'offline' && (
              <svg
                className="mds-avatar__status-icon"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 4L8 8M8 4L4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </span>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };
