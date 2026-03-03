import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Bathroom = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M16 28H4V30H16V28ZM4 27H6V18H26V20C26 21.6533 24.6533 23 23 23H14V27H16V25H23C24.3256 24.9986 25.5966 24.4713 26.534 23.534C27.4713 22.5966 27.9986 21.3256 28 20V16H4V27ZM6 4H14V15H16V2H4V15H6V4ZM28 13H17V15H28V13Z" fill="currentColor" /></svg>);
Bathroom.displayName = "Bathroom";
export { Bathroom };