import { forwardRef, useId } from 'react';
import './Toggle.css';

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Primary label text */
  label?: string;
  /** Secondary descriptive text below the primary label */
  contextLabel?: string;
  /** Text shown to the left of the switch (e.g. "Off") */
  leftLabel?: string;
  /** Text shown to the right of the switch (e.g. "On") */
  rightLabel?: string;
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      label,
      contextLabel,
      leftLabel,
      rightLabel,
      className,
      id: externalId,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const toggleId = externalId || generatedId;

    return (
      <div
        className={['mds-toggle', className].filter(Boolean).join(' ')}
        data-disabled={disabled || undefined}
      >
        {(label || contextLabel) && (
          <div className="mds-toggle__label-container">
            {label && (
              <label className="mds-toggle__label" htmlFor={toggleId}>
                {label}
              </label>
            )}
            {contextLabel && (
              <span className="mds-toggle__context-label">{contextLabel}</span>
            )}
          </div>
        )}

        <div className="mds-toggle__control">
          {leftLabel && (
            <span className="mds-toggle__switch-label mds-toggle__switch-label--left">
              {leftLabel}
            </span>
          )}

          <div className="mds-toggle__switch">
            <input
              ref={ref}
              id={toggleId}
              type="checkbox"
              role="switch"
              className="mds-toggle__input"
              disabled={disabled}
              {...props}
            />
            <label className="mds-toggle__track" htmlFor={toggleId}>
              <span className="mds-toggle__handle" />
            </label>
          </div>

          {rightLabel && (
            <span className="mds-toggle__switch-label mds-toggle__switch-label--right">
              {rightLabel}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';

export { Toggle };
