import { forwardRef, useCallback, useMemo } from 'react';
import { ChevronLeftWide } from '../../icons/ChevronLeftWide';
import { ChevronRightWide } from '../../icons/ChevronRightWide';
import './Pagination.css';

export interface PaginationProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Display variant — normal shows most pages, mid fewer, condensed shows only current/total */
  variant?: 'normal' | 'mid' | 'condensed';
  /** Total number of pages */
  totalPages: number;
  /** Currently active page (1-indexed) */
  currentPage: number;
  /** Callback fired when a page is selected */
  onPageChange?: (page: number) => void;
  /** Disables all interaction */
  disabled?: boolean;
}

const ELLIPSIS = '…';

function getPageRange(
  current: number,
  total: number,
  variant: 'normal' | 'mid'
): (number | string)[] {
  if (total <= 0) return [];

  const maxVisible = variant === 'normal' ? 7 : 5;

  if (total <= maxVisible) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | string)[] = [];

  if (variant === 'normal') {
    if (current <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push(ELLIPSIS, total);
    } else if (current >= total - 3) {
      pages.push(1, ELLIPSIS);
      for (let i = total - 4; i <= total; i++) pages.push(i);
    } else {
      pages.push(1, ELLIPSIS, current - 1, current, current + 1, ELLIPSIS, total);
    }
  } else {
    if (current <= 3) {
      for (let i = 1; i <= 3; i++) pages.push(i);
      pages.push(ELLIPSIS, total);
    } else if (current >= total - 2) {
      pages.push(1, ELLIPSIS);
      for (let i = total - 2; i <= total; i++) pages.push(i);
    } else {
      pages.push(1, ELLIPSIS, current, ELLIPSIS, total);
    }
  }

  return pages;
}

const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      variant = 'normal',
      totalPages,
      currentPage,
      onPageChange,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const isFirst = currentPage <= 1;
    const isLast = currentPage >= totalPages;

    const handlePrev = useCallback(() => {
      if (!isFirst && !disabled) onPageChange?.(currentPage - 1);
    }, [currentPage, isFirst, disabled, onPageChange]);

    const handleNext = useCallback(() => {
      if (!isLast && !disabled) onPageChange?.(currentPage + 1);
    }, [currentPage, isLast, disabled, onPageChange]);

    const handlePage = useCallback(
      (page: number) => {
        if (!disabled && page !== currentPage) onPageChange?.(page);
      },
      [currentPage, disabled, onPageChange]
    );

    const pages = useMemo(
      () =>
        variant !== 'condensed'
          ? getPageRange(currentPage, totalPages, variant)
          : [],
      [currentPage, totalPages, variant]
    );

    return (
      <nav
        ref={ref}
        aria-label="Pagination"
        className={['mds-pagination', className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-disabled={disabled || undefined}
        {...props}
      >
        <button
          type="button"
          className="mds-pagination__arrow"
          aria-label="Previous page"
          disabled={disabled || isFirst}
          onClick={handlePrev}
        >
          <span className="mds-pagination__arrow-layer">
            <ChevronLeftWide size={20} style={{ color: 'currentColor' }} />
          </span>
        </button>

        {variant !== 'condensed' ? (
          <div className="mds-pagination__pages" role="list">
            {pages.map((page, i) =>
              typeof page === 'string' ? (
                <span
                  key={`ellipsis-${i}`}
                  className="mds-pagination__page"
                  role="listitem"
                  aria-hidden
                >
                  {page}
                </span>
              ) : (
                <button
                  key={page}
                  type="button"
                  role="listitem"
                  className="mds-pagination__page"
                  data-active={page === currentPage || undefined}
                  aria-current={page === currentPage ? 'page' : undefined}
                  aria-label={`Page ${page}`}
                  disabled={disabled}
                  onClick={() => handlePage(page)}
                >
                  {page}
                </button>
              )
            )}
          </div>
        ) : (
          <span className="mds-pagination__condensed-label">
            {currentPage}/{totalPages}
          </span>
        )}

        <button
          type="button"
          className="mds-pagination__arrow"
          aria-label="Next page"
          disabled={disabled || isLast}
          onClick={handleNext}
        >
          <span className="mds-pagination__arrow-layer">
            <ChevronRightWide size={20} style={{ color: 'currentColor' }} />
          </span>
        </button>
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';

export { Pagination };
