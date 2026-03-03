import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChevronDownWide = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M16.0006 19.6292L25.115 10.5148H27.5898L16.6193 21.4854H15.3818L4.41127 10.5148H6.88614L16.0006 19.6292Z" fill="currentColor" /></svg>);
ChevronDownWide.displayName = "ChevronDownWide";
export { ChevronDownWide };