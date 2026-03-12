import { forwardRef, useState, useCallback, useId } from 'react';
import { Menu } from '../../icons/Menu';
import { Close } from '../../icons/Close';
import { ChevronDownWide } from '../../icons/ChevronDownWide';
import { Launch } from '../../icons/Launch';
import './Navigation.css';

export interface NavItemData {
  label: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
}

export interface NavCategoryData {
  title: string;
  items: NavItemData[];
}

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  /** Color scheme of the navigation */
  colorway?: 'default' | 'dark' | 'transparent';
  /** Logo element displayed in the header */
  logo: React.ReactNode;
  /** Navigation categories with their items */
  categories: NavCategoryData[];
  /** Optional CTA button rendered in the header */
  hvaCta?: React.ReactNode;
  /** Primary action button rendered inside the expanded panel */
  hvaAction?: React.ReactNode;
  /** Optional language selector element */
  languageSelect?: React.ReactNode;
  /** Regulatory/legal links shown in the panel footer */
  regulatoryLinks?: NavItemData[];
  /** Social media icons group */
  socialIcons?: React.ReactNode;
  /** Smaller logo shown in the panel footer */
  footerLogo?: React.ReactNode;
  /** Controlled open state */
  open?: boolean;
  /** Initial open state for uncontrolled usage */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** When true, the categories section is not rendered in the panel */
  hideCategories?: boolean;
}

const NavItem = ({
  item,
  className,
}: {
  item: NavItemData;
  className?: string;
}) => {
  const Element = item.href ? 'a' : 'button';
  const linkProps = item.href
    ? {
        href: item.href,
        ...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
      }
    : { type: 'button' as const };

  return (
    <Element
      className={['mds-nav__item', className].filter(Boolean).join(' ')}
      onClick={item.onClick}
      {...linkProps}
    >
      <span className="mds-nav__item-label">{item.label}</span>
      {item.external && <Launch size={24} className="mds-nav__item-external" aria-hidden />}
    </Element>
  );
};

const NavCategory = ({
  category,
  isExpanded,
  onToggle,
  triggerId,
  panelId,
}: {
  category: NavCategoryData;
  isExpanded: boolean;
  onToggle: () => void;
  triggerId: string;
  panelId: string;
}) => {
  return (
    <div
      className="mds-nav__category"
      data-expanded={isExpanded || undefined}
    >
      {/* Accordion trigger — visible on vertical (mobile) layout */}
      <button
        type="button"
        className="mds-nav__category-trigger"
        id={triggerId}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="mds-nav__category-title">{category.title}</span>
        <ChevronDownWide size={24} className="mds-nav__category-chevron" aria-hidden />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="mds-nav__category-panel"
        hidden={!isExpanded}
      >
        <div className="mds-nav__category-items">
          {category.items.map((item, i) => (
            <NavItem key={i} item={item} />
          ))}
        </div>
      </div>
      {/* Static heading + list — visible on horizontal (desktop) layout */}
      <div className="mds-nav__category-static">
        <span className="mds-nav__category-heading">{category.title}</span>
        {category.items.map((item, i) => (
          <NavItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

const Navigation = forwardRef<HTMLElement, NavigationProps>(
  (
    {
      colorway = 'default',
      logo,
      categories,
      hvaCta,
      hvaAction,
      languageSelect,
      regulatoryLinks,
      socialIcons,
      footerLogo,
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      hideCategories = false,
      className,
      ...props
    },
    ref
  ) => {
    const baseId = useId();
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : internalOpen;

    const [expandedCategories, setExpandedCategories] = useState<Set<number>>(
      new Set()
    );

    const handleToggle = useCallback(() => {
      const next = !isOpen;
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    }, [isOpen, isControlled, onOpenChange]);

    const handleCategoryToggle = useCallback((index: number) => {
      setExpandedCategories((prev) => {
        const next = new Set(prev);
        if (next.has(index)) {
          next.delete(index);
        } else {
          next.add(index);
        }
        return next;
      });
    }, []);

    const hasFooter =
      regulatoryLinks?.length || socialIcons || footerLogo;

    return (
      <nav
        ref={ref}
        className={['mds-nav', className].filter(Boolean).join(' ')}
        data-colorway={colorway}
        data-open={isOpen || undefined}
        {...props}
      >
        <div className="mds-nav__header">
          <div className="mds-nav__logo">{logo}</div>
          <div className="mds-nav__ctas">
            {hvaCta && <div className="mds-nav__header-cta">{hvaCta}</div>}
            {languageSelect && (
              <div className="mds-nav__language-select">{languageSelect}</div>
            )}
            <button
              type="button"
              className="mds-nav__toggle"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
              onClick={handleToggle}
            >
              <span className="mds-nav__toggle-layer">
                {isOpen ? (
                  <Close size={24} aria-hidden />
                ) : (
                  <Menu size={24} aria-hidden />
                )}
              </span>
            </button>
          </div>
        </div>

        <div
          className="mds-nav__panel"
          aria-hidden={!isOpen}
          hidden={!isOpen}
        >
          {!hideCategories && (
            <div className="mds-nav__categories">
              {categories.map((cat, i) => (
                <NavCategory
                  key={i}
                  category={cat}
                  isExpanded={expandedCategories.has(i)}
                  onToggle={() => handleCategoryToggle(i)}
                  triggerId={`${baseId}-cat-trigger-${i}`}
                  panelId={`${baseId}-cat-panel-${i}`}
                />
              ))}
            </div>
          )}

          {hvaAction && <div className="mds-nav__hva">{hvaAction}</div>}

          {hasFooter && (
            <div className="mds-nav__footer">
              {regulatoryLinks && regulatoryLinks.length > 0 && (
                <div className="mds-nav__regulatory">
                  {regulatoryLinks.map((link, i) => (
                    <NavItem
                      key={i}
                      item={link}
                      className="mds-nav__regulatory-link"
                    />
                  ))}
                </div>
              )}
              {(footerLogo || socialIcons) && (
                <div className="mds-nav__footer-row">
                  {footerLogo && (
                    <div className="mds-nav__footer-logo">{footerLogo}</div>
                  )}
                  {socialIcons && (
                    <div className="mds-nav__socials">{socialIcons}</div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    );
  }
);

Navigation.displayName = 'Navigation';

export { Navigation };
