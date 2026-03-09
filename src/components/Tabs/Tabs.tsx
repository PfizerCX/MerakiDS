import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  useEffect,
  Children,
  type ReactNode,
} from 'react';
import { ChevronLeft } from '../../icons/ChevronLeft';
import { ChevronRight } from '../../icons/ChevronRight';
import './Tabs.css';

export interface TabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether this tab is currently selected */
  selected?: boolean;
}

const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ selected = false, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        aria-selected={selected}
        tabIndex={selected ? 0 : -1}
        className={['mds-tab', className].filter(Boolean).join(' ')}
        data-selected={selected || undefined}
        {...props}
      >
        <span className="mds-tab__label">{children}</span>
        {selected && <span className="mds-tab__underline" />}
      </button>
    );
  }
);

Tab.displayName = 'Tab';

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show prev/next navigation buttons when tabs overflow */
  showNavigation?: boolean;
  children?: ReactNode;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ showNavigation = true, className, children, ...props }, ref) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [overflows, setOverflows] = useState(false);

    const checkScroll = useCallback(() => {
      const el = scrollRef.current;
      if (!el) return;

      const hasOverflow = el.scrollWidth > el.clientWidth;
      setOverflows(hasOverflow);
      setCanScrollLeft(el.scrollLeft > 1);
      setCanScrollRight(
        el.scrollLeft + el.clientWidth < el.scrollWidth - 1
      );
    }, []);

    useEffect(() => {
      const el = scrollRef.current;
      if (!el) return;

      checkScroll();

      el.addEventListener('scroll', checkScroll, { passive: true });
      const observer = new ResizeObserver(checkScroll);
      observer.observe(el);

      return () => {
        el.removeEventListener('scroll', checkScroll);
        observer.disconnect();
      };
    }, [checkScroll]);

    useEffect(() => {
      checkScroll();
    }, [Children.count(children), checkScroll]);

    const scroll = (direction: 'left' | 'right') => {
      const el = scrollRef.current;
      if (!el) return;
      const amount = el.clientWidth * 0.6;
      el.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    };

    const displayNav = showNavigation && overflows;

    return (
      <div
        ref={ref}
        className={['mds-tabs', className].filter(Boolean).join(' ')}
        {...props}
      >
        {displayNav && (
          <div className="mds-tabs__nav mds-tabs__nav--prev">
            <div className="mds-tabs__gradient mds-tabs__gradient--left" />
            <button
              type="button"
              className="mds-tabs__nav-btn"
              aria-label="Scroll tabs left"
              disabled={!canScrollLeft}
              onClick={() => scroll('left')}
            >
              <ChevronLeft size={24} />
            </button>
          </div>
        )}

        <div
          ref={scrollRef}
          role="tablist"
          className="mds-tabs__list"
        >
          {children}
        </div>

        {displayNav && (
          <div className="mds-tabs__nav mds-tabs__nav--next">
            <div className="mds-tabs__gradient mds-tabs__gradient--right" />
            <button
              type="button"
              className="mds-tabs__nav-btn"
              aria-label="Scroll tabs right"
              disabled={!canScrollRight}
              onClick={() => scroll('right')}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';

export { Tab, Tabs };
