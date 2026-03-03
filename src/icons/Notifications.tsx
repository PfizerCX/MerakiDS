import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Notifications = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M16.9834 3.24225C16.9943 3.18315 17 3.12224 17 3.06C17 2.50771 16.5523 2.06 16 2.06C15.4477 2.06 15 2.50771 15 3.06C15 3.12134 15.0055 3.18139 15.0161 3.23968C11.1252 3.71994 8.11014 7.03978 8.11014 11.06V17.8L6.64014 20.06H8.73014H8.75014L9.88014 18.32V11.06C9.88014 7.67999 12.6301 4.93999 16.0001 4.93999C19.3701 4.93999 22.1201 7.68999 22.1201 11.06V18.33L23.3001 20.06H25.4201L23.8701 17.79V11.06C23.8701 7.05564 20.865 3.73233 16.9834 3.24225ZM16.3402 29.94L16.3502 29.94H16.3302L16.3402 29.94ZM20.2102 26.06C20.2102 28.1967 18.4756 29.9346 16.3402 29.94C14.2048 29.9346 12.4702 28.1967 12.4702 26.06H14.2202C14.2202 27.23 15.1702 28.18 16.3402 28.18C17.5102 28.18 18.4602 27.23 18.4602 26.06H20.2102ZM26 22.18H6V23.93H26V22.18Z" fill="currentColor" /></svg>);
Notifications.displayName = "Notifications";
export { Notifications };