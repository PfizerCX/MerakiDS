import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const AccessTime = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.875 16C3.875 9.30355 9.30355 3.875 16 3.875C22.6965 3.875 28.125 9.30355 28.125 16C28.125 22.6965 22.6965 28.125 16 28.125C9.30355 28.125 3.875 22.6965 3.875 16ZM16 2.125C8.33705 2.125 2.125 8.33705 2.125 16C2.125 23.663 8.33705 29.875 16 29.875C23.663 29.875 29.875 23.663 29.875 16C29.875 8.33705 23.663 2.125 16 2.125ZM16.875 15.6376V7.125H15.125V16.3624L22 23.2374L23.2374 22L16.875 15.6376Z" fill="currentColor" /></svg>);
AccessTime.displayName = "AccessTime";
export { AccessTime };