import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const OpenInNew = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M25.3333 25.3333H6.66667V6.66667H16V4H6.66667C5.19333 4 4 5.2 4 6.66667V25.3333C4 26.8 5.19333 28 6.66667 28H25.3333C26.8 28 28 26.8 28 25.3333V16H25.3333V25.3333ZM18.6667 4V6.66667H23.4533L10.3867 19.7333L12.2667 21.6133L25.3333 8.54667V13.3333H28V4H18.6667Z" fill="currentColor" /></svg>);
OpenInNew.displayName = "OpenInNew";
export { OpenInNew };
