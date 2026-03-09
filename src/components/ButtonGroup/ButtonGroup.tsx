import { forwardRef } from 'react';
import './ButtonGroup.css';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Layout direction of the buttons */
  orientation?: 'horizontal' | 'vertical';
  /** When true, child buttons stretch to fill the available width equally */
  fill?: boolean;
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      orientation = 'horizontal',
      fill = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="group"
        className={['mds-btn-group', className].filter(Boolean).join(' ')}
        data-orientation={orientation}
        data-fill={fill || undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
