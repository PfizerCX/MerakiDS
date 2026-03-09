import { forwardRef, useState, useCallback } from 'react';
import { Add } from '../../icons/Add';
import { Subtract } from '../../icons/Subtract';
import './ISI.css';

export type ISIState = 'default' | 'expanded' | 'collapsed';

export interface ISIRegulatoryLink {
  /** Display label for the link */
  label: string;
  /** URL the link points to */
  href: string;
}

export interface ISIProps extends React.HTMLAttributes<HTMLElement> {
  /** Regulatory links displayed above the header (e.g. Prescribing Information) */
  regulatoryLinks?: ISIRegulatoryLink[];
  /** Title shown in the header bar */
  headerTitle?: string;
  /** Whether the ISI uses inset layout with horizontal margins */
  inset?: boolean;
  /** Controlled state — when provided, the component becomes controlled */
  state?: ISIState;
  /** Called when the ISI state changes */
  onStateChange?: (state: ISIState) => void;
  /** Initial state for uncontrolled mode */
  defaultState?: ISIState;
  /**
   * Secondary content displayed in a side column at wider viewports (≥ 768px).
   * At narrow viewports this renders after the main children.
   */
  aside?: React.ReactNode;
}

export interface ISICardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card heading text */
  title?: string;
  /** Visual variant — blackbox adds a solid border for warnings */
  variant?: 'default' | 'blackbox';
}

/* -----------------------------------------------------------------------
   ISICard — individual content section
   ----------------------------------------------------------------------- */

const ISICard = forwardRef<HTMLDivElement, ISICardProps>(
  ({ title, variant = 'default', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={['mds-isi-card', className].filter(Boolean).join(' ')}
        data-variant={variant !== 'default' ? variant : undefined}
        {...props}
      >
        {title && <p className="mds-isi-card__title">{title}</p>}
        <div className="mds-isi-card__body">{children}</div>
      </div>
    );
  }
);

ISICard.displayName = 'ISICard';

/* -----------------------------------------------------------------------
   ISI — main component
   ----------------------------------------------------------------------- */

const ISI = forwardRef<HTMLElement, ISIProps>(
  (
    {
      regulatoryLinks = [],
      headerTitle = 'Important Safety Information & Use(s)',
      inset = false,
      state: controlledState,
      onStateChange,
      defaultState = 'default',
      aside,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [uncontrolledState, setUncontrolledState] = useState<ISIState>(defaultState);
    const isControlled = controlledState !== undefined;
    const currentState = isControlled ? controlledState : uncontrolledState;

    const setState = useCallback(
      (next: ISIState) => {
        if (!isControlled) setUncontrolledState(next);
        onStateChange?.(next);
      },
      [isControlled, onStateChange]
    );

    const handleHeaderClick = useCallback(() => {
      if (currentState === 'default' || currentState === 'collapsed') {
        setState('expanded');
      } else {
        setState('collapsed');
      }
    }, [currentState, setState]);

    const renderIcon = () => {
      if (currentState === 'collapsed') return null;
      const iconSize = 24;
      const iconStyle = { color: 'var(--color-on-primary)' };
      if (currentState === 'expanded') {
        return <Subtract size={iconSize} style={iconStyle} aria-hidden />;
      }
      return <Add size={iconSize} style={iconStyle} aria-hidden />;
    };

    return (
      <section
        ref={ref}
        className={['mds-isi', className].filter(Boolean).join(' ')}
        data-state={currentState}
        data-inset={inset || undefined}
        aria-label={headerTitle}
        {...props}
      >
        {regulatoryLinks.length > 0 && (
          <div className="mds-isi__regulatory-links">
            {regulatoryLinks.map((link) => (
              <a
                key={link.href}
                className="mds-isi__regulatory-link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div className="mds-isi__header-wrap">
          <button
            type="button"
            className="mds-isi__header"
            onClick={handleHeaderClick}
            aria-expanded={currentState === 'expanded'}
            disabled={currentState === 'collapsed'}
          >
            <span className="mds-isi__header-title">{headerTitle}</span>
            {currentState !== 'collapsed' && (
              <span className="mds-isi__header-icon">{renderIcon()}</span>
            )}
          </button>
        </div>

        <div className="mds-isi__container" aria-hidden={currentState === 'collapsed'}>
          <div className="mds-isi__content-main">{children}</div>
          {aside && <div className="mds-isi__content-aside">{aside}</div>}
        </div>
      </section>
    );
  }
);

ISI.displayName = 'ISI';

export { ISI, ISICard };
