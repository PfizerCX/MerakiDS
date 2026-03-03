import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const UpDownChevronWide = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M25.1139 13L15.9994 3.88557L6.88503 13H4.41016L15.3807 2.02942H16.6182L27.5887 13H25.1139ZM6.88587 19L16.0003 28.1144L25.1147 19L27.5896 19L16.619 29.9706H15.3816L4.411 19H6.88587Z" fill="currentColor" /></svg>);
UpDownChevronWide.displayName = "UpDownChevronWide";
export { UpDownChevronWide };