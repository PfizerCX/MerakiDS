import { forwardRef } from 'react';
import { InformationCircle } from '../../icons/InformationCircle';
import './CardNumber.css';

export interface CardNumberProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: 'base' | 'solid' | 'outline' | 'outline-inverse';
  /** Large number / stat displayed prominently */
  number?: React.ReactNode;
  /** Headline text shown alongside the tooltip icon */
  headline?: React.ReactNode;
  /** Optional body text (e.g. units or description) */
  body?: React.ReactNode;
  /** Optional footnote text */
  footnote?: React.ReactNode;
  /** When true, headline appears above the number instead of below */
  headlineLead?: boolean;
  /** Whether to show the info tooltip icon next to the headline */
  showTooltip?: boolean;
  /** Click handler for the tooltip icon */
  onTooltipClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CardNumber = forwardRef<HTMLDivElement, CardNumberProps>(
  (
    {
      variant = 'base',
      number,
      headline,
      body,
      footnote,
      headlineLead = false,
      showTooltip = true,
      onTooltipClick,
      className,
      ...props
    },
    ref
  ) => {
    const headlineRow = headline ? (
      <div className="mds-card-number__headline-row">
        <p className="mds-card-number__headline">{headline}</p>
        {showTooltip && (
          <button
            type="button"
            className="mds-card-number__tooltip"
            onClick={onTooltipClick}
            aria-label="More information"
          >
            <InformationCircle size={20} style={{ color: 'inherit' }} />
          </button>
        )}
      </div>
    ) : null;

    const numberEl = number != null ? (
      <p className="mds-card-number__number">{number}</p>
    ) : null;

    return (
      <div
        ref={ref}
        className={['mds-card-number', className].filter(Boolean).join(' ')}
        data-variant={variant}
        {...props}
      >
        <div className="mds-card-number__top">
          {headlineLead ? (
            <>
              {headlineRow}
              {numberEl}
            </>
          ) : (
            <>
              {numberEl}
              {headlineRow}
            </>
          )}
        </div>

        {(body || footnote) && (
          <div className="mds-card-number__copy">
            {body && <p className="mds-card-number__body">{body}</p>}
            {footnote && <p className="mds-card-number__footnote">{footnote}</p>}
          </div>
        )}
      </div>
    );
  }
);

CardNumber.displayName = 'CardNumber';

export { CardNumber };
