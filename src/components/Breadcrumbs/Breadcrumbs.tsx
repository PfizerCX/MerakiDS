import { forwardRef, useState, useCallback } from 'react';
import { ChevronLeft } from '../../icons/ChevronLeft';
import './Breadcrumbs.css';

export interface BreadcrumbItem {
  /** Display label */
  label: string;
  /** Link URL — rendered as an <a> when provided */
  href?: string;
  /** Click handler — rendered as a <button> when provided without href */
  onClick?: () => void;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  /** Ordered list of breadcrumb items; the last item is treated as the current page */
  items?: BreadcrumbItem[];
  /**
   * Maximum visible items before the middle levels are collapsed behind "…".
   * Set to 0 to disable collapsing. Minimum effective value is 2
   * (first + current page).
   * @default 4
   */
  maxItems?: number;
  /** When true, renders a "Back" return link instead of the full path */
  showBack?: boolean;
  /** Label for the back button */
  backLabel?: string;
  /** Click handler for the back button */
  onBack?: () => void;
  /** Back link URL — rendered as an <a> when provided */
  backHref?: string;
}

const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      items = [],
      maxItems = 4,
      showBack = false,
      backLabel = 'Back',
      onBack,
      backHref,
      className,
      ...props
    },
    ref
  ) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = useCallback(() => {
      setExpanded(true);
    }, []);

    const renderLink = (item: BreadcrumbItem) => {
      if (item.href) {
        return (
          <a className="mds-breadcrumbs__link" href={item.href}>
            {item.label}
          </a>
        );
      }
      if (item.onClick) {
        return (
          <button
            type="button"
            className="mds-breadcrumbs__link"
            onClick={item.onClick}
          >
            {item.label}
          </button>
        );
      }
      return <span className="mds-breadcrumbs__link">{item.label}</span>;
    };

    const renderSeparator = (key: string) => (
      <span className="mds-breadcrumbs__separator" aria-hidden="true" key={key}>
        /
      </span>
    );

    const renderItems = () => {
      if (items.length === 0) return null;

      const allButLast = items.slice(0, -1);
      const currentPage = items[items.length - 1];

      const shouldCollapse =
        !expanded && maxItems > 0 && items.length > maxItems;

      if (shouldCollapse) {
        const firstItem = allButLast[0];
        const tailItems = allButLast.slice(-1);
        const nodes: React.ReactNode[] = [];

        nodes.push(
          <li key="first">{renderLink(firstItem)}</li>,
          <li key="sep-first">{renderSeparator('s-first')}</li>,
          <li key="ellipsis">
            <button
              type="button"
              className="mds-breadcrumbs__ellipsis"
              onClick={handleExpand}
              aria-label="Show all breadcrumbs"
            >
              …
            </button>
          </li>,
          <li key="sep-ellipsis">{renderSeparator('s-ellipsis')}</li>
        );

        tailItems.forEach((item, i) => {
          nodes.push(
            <li key={`tail-${i}`}>{renderLink(item)}</li>,
            <li key={`sep-tail-${i}`}>{renderSeparator(`s-tail-${i}`)}</li>
          );
        });

        nodes.push(
          <li key="current" aria-current="page">
            <span className="mds-breadcrumbs__current">
              {currentPage.label}
            </span>
          </li>
        );

        return nodes;
      }

      const nodes: React.ReactNode[] = [];
      allButLast.forEach((item, i) => {
        nodes.push(
          <li key={`item-${i}`}>{renderLink(item)}</li>,
          <li key={`sep-${i}`}>{renderSeparator(`s-${i}`)}</li>
        );
      });

      nodes.push(
        <li key="current" aria-current="page">
          <span className="mds-breadcrumbs__current">
            {currentPage.label}
          </span>
        </li>
      );

      return nodes;
    };

    const backElement = backHref ? (
      <a className="mds-breadcrumbs__back" href={backHref}>
        <span className="mds-breadcrumbs__back-icon">
          <ChevronLeft size={24} />
        </span>
        <span className="mds-breadcrumbs__back-label">
          <span className="mds-breadcrumbs__back-text">{backLabel}</span>
        </span>
      </a>
    ) : (
      <button
        type="button"
        className="mds-breadcrumbs__back"
        onClick={onBack}
      >
        <span className="mds-breadcrumbs__back-icon">
          <ChevronLeft size={24} />
        </span>
        <span className="mds-breadcrumbs__back-label">
          <span className="mds-breadcrumbs__back-text">{backLabel}</span>
        </span>
      </button>
    );

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={['mds-breadcrumbs', className].filter(Boolean).join(' ')}
        {...props}
      >
        {showBack ? (
          backElement
        ) : (
          <ol
            style={{
              display: 'contents',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {renderItems()}
          </ol>
        )}
      </nav>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumbs };
