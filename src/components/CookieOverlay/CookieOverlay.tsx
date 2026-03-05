import { forwardRef } from 'react';
import { Button } from '../Button';
import './CookieOverlay.css';

const DEFAULT_TITLE = 'We Care About Your Privacy';

const DEFAULT_BODY =
  'Pfizer uses cookies and similar technologies to enhance and personalize your customer experience. By clicking "Accept All", you grant Pfizer permission to collect, use, and share information about your website interactions with our third-party marketing partners (such as our advertising and analytics partners) to tailor your digital experiences, our services, and advertising content for you. If you click "Decline All", your digital experience, our services, and advertising content may not be personalized or targeted to you directly. To learn more about how Pfizer uses these technologies, please read our ';

export interface CookieOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  layout?: 'vertical' | 'horizontal';
  title?: string;
  body?: React.ReactNode;
  privacyPolicyUrl?: string;
  privacyPolicyLabel?: string;
  onRejectAll?: () => void;
  onAcceptAll?: () => void;
  onOpenPreferences?: () => void;
  rejectAllLabel?: string;
  acceptAllLabel?: string;
  preferencesLabel?: string;
}

const CookieOverlay = forwardRef<HTMLDivElement, CookieOverlayProps>(
  (
    {
      layout = 'vertical',
      title = DEFAULT_TITLE,
      body,
      privacyPolicyUrl = '#',
      privacyPolicyLabel = 'Privacy Policy',
      onRejectAll,
      onAcceptAll,
      onOpenPreferences,
      rejectAllLabel = 'Reject All',
      acceptAllLabel = 'Accept All',
      preferencesLabel = 'Cookies Preferences',
      className,
      ...props
    },
    ref
  ) => {
    const defaultBody = (
      <>
        {DEFAULT_BODY}
        <a
          href={privacyPolicyUrl}
          className="mds-cookie-overlay__privacy-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {privacyPolicyLabel}
        </a>
        .
      </>
    );

    const bodyContent = body ?? defaultBody;

    return (
      <div
        ref={ref}
        role="dialog"
        aria-labelledby="mds-cookie-overlay-title"
        aria-describedby="mds-cookie-overlay-body"
        className={['mds-cookie-overlay', className].filter(Boolean).join(' ')}
        data-layout={layout}
        {...props}
      >
        <div className="mds-cookie-overlay__inner">
          <h2 id="mds-cookie-overlay-title" className="mds-cookie-overlay__title">
            {title}
          </h2>
          <div id="mds-cookie-overlay-body" className="mds-cookie-overlay__body">
            {bodyContent}
          </div>
          <div className="mds-cookie-overlay__actions">
            <Button variant="primary" size="md" onClick={onRejectAll}>
              {rejectAllLabel}
            </Button>
            <Button variant="primary" size="md" onClick={onAcceptAll}>
              {acceptAllLabel}
            </Button>
            <Button variant="secondary" size="md" onClick={onOpenPreferences}>
              {preferencesLabel}
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

CookieOverlay.displayName = 'CookieOverlay';

export { CookieOverlay };
