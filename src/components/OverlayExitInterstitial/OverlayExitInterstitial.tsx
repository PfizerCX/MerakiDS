import { forwardRef, useEffect, useCallback, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import { Close } from '../../icons/Close';
import { OpenInNew } from '../../icons/OpenInNew';
import './OverlayExitInterstitial.css';

export interface OverlayExitInterstitialLink {
  /** Link display label */
  label: string;
  /** Link URL */
  href: string;
}

export interface OverlayExitInterstitialProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the overlay is visible */
  open?: boolean;
  /** Headline text displayed at the top of the dialog */
  headline?: string;
  /** Body content below the buttons */
  body?: ReactNode;
  /** Label for the primary continue button */
  continueLabel?: string;
  /** Label for the secondary cancel button */
  cancelLabel?: string;
  /** Called when the continue button is clicked */
  onContinue?: () => void;
  /** Called when the cancel button is clicked or when the overlay is dismissed */
  onCancel?: () => void;
  /** Called when the close icon button is clicked */
  onClose?: () => void;
  /** Document links rendered below the body text */
  links?: OverlayExitInterstitialLink[];
  /** Whether to display the scrim backdrop */
  showScrim?: boolean;
  /** Portal target — pass `null` to render inline instead of using a portal */
  container?: HTMLElement | null;
}

const OverlayExitInterstitial = forwardRef<HTMLDivElement, OverlayExitInterstitialProps>(
  (
    {
      open = false,
      headline = 'You are now leaving this site',
      body,
      continueLabel = 'Continue',
      cancelLabel = 'Cancel',
      onContinue,
      onCancel,
      onClose,
      links,
      showScrim = true,
      container,
      className,
      ...props
    },
    ref
  ) => {
    const dialogRef = useRef<HTMLDivElement>(null);

    const handleClose = useCallback(() => {
      onClose?.();
    }, [onClose]);

    const handleScrimClick = useCallback(
      (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      },
      [handleClose]
    );

    useEffect(() => {
      if (!open) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, handleClose]);

    useEffect(() => {
      if (!open) return;
      dialogRef.current?.focus();
    }, [open]);

    if (!open) return null;

    const isInline = container === null;

    const overlay = (
      <div
        className={['mds-overlay-exit', showScrim && 'mds-overlay-exit--scrim'].filter(Boolean).join(' ')}
        data-inline={isInline || undefined}
        onClick={handleScrimClick}
        aria-hidden={!open}
      >
        <div
          ref={ref ?? dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={headline}
          tabIndex={-1}
          className={['mds-overlay-exit__dialog', className].filter(Boolean).join(' ')}
          {...props}
        >
          <div className="mds-overlay-exit__close">
            <IconButton
              variant="text"
              size="lg"
              icon={<Close size={24} />}
              aria-label="Close dialog"
              onClick={handleClose}
            />
          </div>

          <div className="mds-overlay-exit__content">
            <div className="mds-overlay-exit__title-group">
              <p className="mds-overlay-exit__headline">{headline}</p>

              <div className="mds-overlay-exit__actions">
                <Button variant="primary" onClick={onContinue}>
                  {continueLabel}
                </Button>
                <Button variant="secondary" onClick={onCancel}>
                  {cancelLabel}
                </Button>
              </div>
            </div>

            {body && <p className="mds-overlay-exit__body">{body}</p>}
          </div>

          {links && links.length > 0 && (
            <div className="mds-overlay-exit__links">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mds-overlay-exit__link"
                >
                  <span className="mds-overlay-exit__link-label">{link.label}</span>
                  <OpenInNew size={24} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    );

    if (isInline) return overlay;

    return createPortal(overlay, container ?? document.body);
  }
);

OverlayExitInterstitial.displayName = 'OverlayExitInterstitial';

export { OverlayExitInterstitial };
