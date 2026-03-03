import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Warning = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M15.9999 4.9375L28.9999 27.0625H3L15.9999 4.9375ZM15.9999 8.4375L6.08473 25.3125H25.9152L15.9999 8.4375ZM15.1095 19.6875V13.6875H16.8905V19.6875H15.1095ZM15.1095 21.6875V23.6875H16.8905V21.6875H15.1095Z" fill="currentColor" /></svg>);
Warning.displayName = "Warning";
export { Warning };