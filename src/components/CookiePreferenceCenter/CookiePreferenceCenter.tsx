import {
  forwardRef,
  useState,
  useCallback,
  useId,
  useRef,
  useEffect,
} from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button';
import { Switch } from '../Switch';
import { Close } from '../../icons/Close';
import { CheckCircle } from '../../icons/CheckCircle';
import { ChevronDownWide } from '../../icons/ChevronDownWide';
import './CookiePreferenceCenter.css';

const DEFAULT_TITLE = 'We Care About Your Privacy';

const DEFAULT_BODY =
  'Cookies and similar technologies typically collect information about how you use a website such as pages and content you view, information you submit, digital tools you use, and links you click. Depending on your interactions with us, this information may suggest certain details about your health, which may be considered sensitive.';

export interface CookiePreferenceCenterPreferences {
  marketing: boolean;
  analytics: boolean;
  personalization: boolean;
}

const DEFAULT_ESSENTIAL_EXPLANATION =
  'These cookies are necessary for the website to function and cannot be switched off in our systems. They are set in response to user actions like setting privacy preferences or logging in. Blocking them via the browser may affect site functionality. They do not store any personally identifiable information.';

const DEFAULT_MARKETING_EXPLANATION =
  'Marketing cookies help us share content with you that you may find interesting and relevant.';

const DEFAULT_ANALYTICS_EXPLANATION =
  'Analytics cookies measure website use to learn what content is most useful to users and to help us improve it.';

const DEFAULT_PERSONALIZATION_EXPLANATION =
  'Copy to be determined once a Personalization Cookie is warranted.';

export interface CookiePreferenceCenterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  onRejectAll?: () => void;
  onSaveAndAccept?: (preferences: CookiePreferenceCenterPreferences) => void;
  defaultMarketing?: boolean;
  defaultAnalytics?: boolean;
  defaultPersonalization?: boolean;
  title?: string;
  body?: string;
  essentialLabel?: string;
  marketingLabel?: string;
  analyticsLabel?: string;
  personalizationLabel?: string;
  alwaysActiveLabel?: string;
  essentialExplanation?: string;
  marketingExplanation?: string;
  analyticsExplanation?: string;
  personalizationExplanation?: string;
  rejectAllLabel?: string;
  saveAndAcceptLabel?: string;
  poweredByLabel?: string;
  oneTrustLabel?: string;
}

const CookiePreferenceCenter = forwardRef<HTMLDivElement, CookiePreferenceCenterProps>(
  (
    {
      open,
      onClose,
      onRejectAll,
      onSaveAndAccept,
      defaultMarketing = false,
      defaultAnalytics = false,
      defaultPersonalization = false,
      title = DEFAULT_TITLE,
      body = DEFAULT_BODY,
      essentialLabel = 'Essential Cookies',
      marketingLabel = 'Marketing Cookies',
      analyticsLabel = 'Analytics Cookies',
      personalizationLabel = 'Personalization Cookies',
      alwaysActiveLabel = 'Always Active',
      essentialExplanation = DEFAULT_ESSENTIAL_EXPLANATION,
      marketingExplanation = DEFAULT_MARKETING_EXPLANATION,
      analyticsExplanation = DEFAULT_ANALYTICS_EXPLANATION,
      personalizationExplanation = DEFAULT_PERSONALIZATION_EXPLANATION,
      rejectAllLabel = 'Reject All',
      saveAndAcceptLabel = 'Save and Accept Changes',
      poweredByLabel = 'Powered by ',
      oneTrustLabel = 'onetrust',
      className,
      ...props
    },
    ref
  ) => {
    const baseId = useId();
    const panelRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    const [marketing, setMarketing] = useState(defaultMarketing);
    const [analytics, setAnalytics] = useState(defaultAnalytics);
    const [personalization, setPersonalization] = useState(defaultPersonalization);
    const [expandedSet, setExpandedSet] = useState<Set<number>>(() => new Set());

    const toggleExpanded = useCallback((index: number) => {
      setExpandedSet((prev) => {
        const next = new Set(prev);
        if (next.has(index)) next.delete(index);
        else next.add(index);
        return next;
      });
    }, []);

    const handleRejectAll = useCallback(() => {
      setMarketing(false);
      setAnalytics(false);
      setPersonalization(false);
      onRejectAll?.();
      onClose();
    }, [onRejectAll, onClose]);

    const handleSaveAndAccept = useCallback(() => {
      onSaveAndAccept?.({ marketing, analytics, personalization });
      onClose();
    }, [marketing, analytics, personalization, onSaveAndAccept, onClose]);

    const handleScrimClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    };

    useEffect(() => {
      if (!open) return;
      previousFocusRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
    }, [open]);

    useEffect(() => {
      if (!open) return;
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }, [open]);

    useEffect(() => {
      if (!open) return;
      const focusable = panelRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusable?.focus();
    }, [open]);

    useEffect(() => {
      if (!open) return;
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, onClose]);

    useEffect(() => {
      if (!open && previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }, [open]);

    if (!open) return null;

    const modalContent = (
      <div
        ref={ref}
        className={['mds-cookie-pref-center', className].filter(Boolean).join(' ')}
        role="presentation"
        {...props}
      >
        <div
          className="mds-cookie-pref-center__scrim"
          onClick={handleScrimClick}
          aria-hidden
        />
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${baseId}-title`}
          aria-describedby={`${baseId}-body`}
          className="mds-cookie-pref-center__panel"
        >
          <button
            type="button"
            className="mds-cookie-pref-center__close"
            onClick={onClose}
            aria-label="Close"
          >
            <Close size={24} />
          </button>

          <div className="mds-cookie-pref-center__scrollable">
          <h2 id={`${baseId}-title`} className="mds-cookie-pref-center__title">
            {title}
          </h2>
          <p id={`${baseId}-body`} className="mds-cookie-pref-center__body">
            {body}
          </p>

          <div className="mds-cookie-pref-center__rows">
            {/* Essential Cookies */}
            <div
              className="mds-cookie-pref-center__row"
              data-essential
              data-expanded={expandedSet.has(0) || undefined}
            >
              <div
                className="mds-cookie-pref-center__row-main"
                onClick={() => toggleExpanded(0)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpanded(0);
                  }
                }}
                aria-expanded={expandedSet.has(0)}
                aria-controls={`${baseId}-row-0-detail`}
              >
                <span className="mds-cookie-pref-center__row-label">
                  {essentialLabel}
                </span>
                <span className="mds-cookie-pref-center__row-meta">
                  <span className="mds-cookie-pref-center__always-active">
                    {alwaysActiveLabel}
                  </span>
                  <CheckCircle size={20} className="mds-cookie-pref-center__check" aria-hidden />
                </span>
                <ChevronDownWide size={24} className="mds-cookie-pref-center__chevron" aria-hidden />
              </div>
              <div
                id={`${baseId}-row-0-detail`}
                className="mds-cookie-pref-center__row-detail"
                hidden={!expandedSet.has(0)}
              >
                <p className="mds-cookie-pref-center__row-explanation">{essentialExplanation}</p>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div
              className="mds-cookie-pref-center__row"
              data-expanded={expandedSet.has(1) || undefined}
            >
              <div
                className="mds-cookie-pref-center__row-main"
                onClick={() => toggleExpanded(1)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpanded(1);
                  }
                }}
                aria-expanded={expandedSet.has(1)}
                aria-controls={`${baseId}-row-1-detail`}
              >
                <span className="mds-cookie-pref-center__row-label">
                  {marketingLabel}
                </span>
                <Switch
                  checked={marketing}
                  onChange={setMarketing}
                  aria-label={`Toggle ${marketingLabel}`}
                  onClick={(e) => e.stopPropagation()}
                />
                <ChevronDownWide size={24} className="mds-cookie-pref-center__chevron" aria-hidden />
              </div>
              <div
                id={`${baseId}-row-1-detail`}
                className="mds-cookie-pref-center__row-detail"
                hidden={!expandedSet.has(1)}
              >
                <p className="mds-cookie-pref-center__row-explanation">{marketingExplanation}</p>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div
              className="mds-cookie-pref-center__row"
              data-expanded={expandedSet.has(2) || undefined}
            >
              <div
                className="mds-cookie-pref-center__row-main"
                onClick={() => toggleExpanded(2)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpanded(2);
                  }
                }}
                aria-expanded={expandedSet.has(2)}
                aria-controls={`${baseId}-row-2-detail`}
              >
                <span className="mds-cookie-pref-center__row-label">
                  {analyticsLabel}
                </span>
                <Switch
                  checked={analytics}
                  onChange={setAnalytics}
                  aria-label={`Toggle ${analyticsLabel}`}
                  onClick={(e) => e.stopPropagation()}
                />
                <ChevronDownWide size={24} className="mds-cookie-pref-center__chevron" aria-hidden />
              </div>
              <div
                id={`${baseId}-row-2-detail`}
                className="mds-cookie-pref-center__row-detail"
                hidden={!expandedSet.has(2)}
              >
                <p className="mds-cookie-pref-center__row-explanation">{analyticsExplanation}</p>
              </div>
            </div>

            {/* Personalization Cookies */}
            <div
              className="mds-cookie-pref-center__row"
              data-expanded={expandedSet.has(3) || undefined}
            >
              <div
                className="mds-cookie-pref-center__row-main"
                onClick={() => toggleExpanded(3)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpanded(3);
                  }
                }}
                aria-expanded={expandedSet.has(3)}
                aria-controls={`${baseId}-row-3-detail`}
              >
                <span className="mds-cookie-pref-center__row-label">
                  {personalizationLabel}
                </span>
                <Switch
                  checked={personalization}
                  onChange={setPersonalization}
                  aria-label={`Toggle ${personalizationLabel}`}
                  onClick={(e) => e.stopPropagation()}
                />
                <ChevronDownWide size={24} className="mds-cookie-pref-center__chevron" aria-hidden />
              </div>
              <div
                id={`${baseId}-row-3-detail`}
                className="mds-cookie-pref-center__row-detail"
                hidden={!expandedSet.has(3)}
              >
                <p className="mds-cookie-pref-center__row-explanation">{personalizationExplanation}</p>
              </div>
            </div>
          </div>
          </div>

          <div className="mds-cookie-pref-center__actions">
            <Button
              variant="primary"
              size="md"
              className="mds-cookie-pref-center__btn"
              onClick={handleRejectAll}
            >
              {rejectAllLabel}
            </Button>
            <Button
              variant="primary"
              size="md"
              className="mds-cookie-pref-center__btn"
              onClick={handleSaveAndAccept}
            >
              {saveAndAcceptLabel}
            </Button>
          </div>

          <footer className="mds-cookie-pref-center__footer">
            {poweredByLabel}
            <span className="mds-cookie-pref-center__onetrust">{oneTrustLabel}</span>
          </footer>
        </div>
      </div>
    );

    return createPortal(modalContent, document.body);
  }
);

CookiePreferenceCenter.displayName = 'CookiePreferenceCenter';

export { CookiePreferenceCenter };
