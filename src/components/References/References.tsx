import { forwardRef } from 'react';
import './References.css';

export interface ReferenceItem {
  /** Display number or marker for this reference */
  number: React.ReactNode;
  /** Citation text */
  text: React.ReactNode;
}

export interface ReferencesProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Heading rendered above the list of references */
  title?: React.ReactNode;
  /** Ordered list of citation items */
  items?: ReferenceItem[];
}

const References = forwardRef<HTMLDivElement, ReferencesProps>(
  ({ title = 'References', items = [], className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={['mds-references', className].filter(Boolean).join(' ')}
        {...props}
      >
        {title && <p className="mds-references__title">{title}</p>}

        {children ??
          items.map((item, index) => (
            <div key={index} className="mds-references__item">
              <span className="mds-references__number">{item.number}</span>
              <p className="mds-references__text">{item.text}</p>
            </div>
          ))}
      </div>
    );
  }
);

References.displayName = 'References';

export { References };
