import { forwardRef } from 'react';
import './Recaptcha.css';

export interface RecaptchaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual state of the reCAPTCHA widget */
  state?: 'default' | 'hover' | 'loading' | 'ticked' | 'error' | 'expired';
}

function RecaptchaLogo() {
  return (
    <svg
      className="mds-recaptcha__logo"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M32 2a30 30 0 0 1 21.2 8.8L42.8 21.2A16 16 0 0 0 32 17v-8.5"
        fill="#1c3aa9"
      />
      <path
        d="M53.2 10.8A30 30 0 0 1 62 32H53.5a16 16 0 0 0-4.2-10.8"
        fill="#4285f4"
      />
      <path
        d="M62 32a30 30 0 0 1-8.8 21.2L42.8 42.8A16 16 0 0 0 47.5 32"
        fill="#4285f4"
      />
      <path
        d="M53.2 53.2A30 30 0 0 1 32 62v-8.5a16 16 0 0 0 10.8-4.2"
        fill="#4285f4"
      />
      <path
        d="M32 62A30 30 0 0 1 10.8 53.2l10.4-10.4A16 16 0 0 0 32 47.5"
        fill="#ababab"
      />
      <path
        d="M10.8 53.2A30 30 0 0 1 2 32h14.5a16 16 0 0 0 4.2 10.8"
        fill="#ababab"
      />
      <path
        d="M2 32a30 30 0 0 1 8.8-21.2l10.4 10.4A16 16 0 0 0 16.5 32"
        fill="#ababab"
      />
      <path
        d="M10.8 10.8A30 30 0 0 1 32 2v15a16 16 0 0 0-10.8 4.2"
        fill="#ababab"
      />
    </svg>
  );
}

function CheckmarkIcon() {
  return (
    <svg
      className="mds-recaptcha__checkmark"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 14.5L11 21.5L24 6.5"
        fill="none"
        stroke="#00a847"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const Recaptcha = forwardRef<HTMLDivElement, RecaptchaProps>(
  ({ state = 'default', className, ...props }, ref) => {
    const isClickable = state === 'default' || state === 'hover';

    return (
      <div
        ref={ref}
        className={['mds-recaptcha', className].filter(Boolean).join(' ')}
        data-state={state}
        {...props}
      >
        {state === 'expired' && (
          <div className="mds-recaptcha__expired-message">
            Verification expired. Check the checkbox again.
          </div>
        )}

        <div
          className="mds-recaptcha__checkbox-area"
          role={isClickable ? 'checkbox' : undefined}
          aria-checked={state === 'ticked' ? true : false}
          tabIndex={isClickable ? 0 : undefined}
        >
          <div className="mds-recaptcha__checkbox">
            {state === 'loading' ? (
              <div className="mds-recaptcha__spinner" />
            ) : state === 'ticked' ? (
              <CheckmarkIcon />
            ) : (
              <div className="mds-recaptcha__checkbox-box" />
            )}
          </div>
          <span className="mds-recaptcha__label">I&apos;m not a robot</span>
        </div>

        <div className="mds-recaptcha__branding">
          <RecaptchaLogo />
          <span className="mds-recaptcha__logo-text">reCAPTCHA</span>
          <div className="mds-recaptcha__links">
            <span className="mds-recaptcha__link">Privacy</span>
            <span className="mds-recaptcha__link-separator">-</span>
            <span className="mds-recaptcha__link">Terms</span>
          </div>
        </div>

        {state === 'error' && (
          <div className="mds-recaptcha__error-text">
            Please verify that you are not a robot.
          </div>
        )}
      </div>
    );
  }
);

Recaptcha.displayName = 'Recaptcha';

export { Recaptcha };
