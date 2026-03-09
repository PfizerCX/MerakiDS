import { forwardRef, useState, useCallback, useId } from 'react';
import { ChevronDownWide } from '../../icons/ChevronDownWide';
import './Accordion.css';

export interface AccordionItemData {
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultExpandedIndex?: number | number[];
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  panelId: string;
  triggerId: string;
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ title, isExpanded, onToggle, panelId, triggerId, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={['mds-accordion-item', className].filter(Boolean).join(' ')}
        data-expanded={isExpanded || undefined}
        {...props}
      >
        <button
          type="button"
          className="mds-accordion-trigger"
          id={triggerId}
          aria-expanded={isExpanded}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="mds-accordion-title">{title}</span>
          <ChevronDownWide size={24} className="mds-accordion-chevron" aria-hidden />
        </button>
        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          className="mds-accordion-panel"
          hidden={!isExpanded}
        >
          <div className="mds-accordion-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ items, allowMultiple = false, defaultExpandedIndex, className, ...props }, ref) => {
    const baseId = useId();

    const getInitialExpanded = (): Set<number> => {
      if (defaultExpandedIndex === undefined) return new Set();
      if (Array.isArray(defaultExpandedIndex)) return new Set(defaultExpandedIndex);
      return new Set([defaultExpandedIndex]);
    };

    const [expanded, setExpanded] = useState<Set<number>>(getInitialExpanded);

    const handleToggle = useCallback(
      (index: number) => {
        setExpanded((prev) => {
          const next = new Set(prev);
          if (next.has(index)) {
            next.delete(index);
          } else {
            if (!allowMultiple) next.clear();
            next.add(index);
          }
          return next;
        });
      },
      [allowMultiple]
    );

    return (
      <div
        ref={ref}
        className={['mds-accordion', className].filter(Boolean).join(' ')}
        {...props}
      >
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            isExpanded={expanded.has(index)}
            onToggle={() => handleToggle(index)}
            triggerId={`${baseId}-trigger-${index}`}
            panelId={`${baseId}-panel-${index}`}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';

export { Accordion, AccordionItem };
