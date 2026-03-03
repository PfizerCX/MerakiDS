import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const DrawerClose = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.125 4.125H29.875V27.875H2.125V4.125ZM3.875 5.875V26.125H28.125V5.875H3.875Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M24.232 11.112L18.3664 15.9999L24.232 20.8879L23.1116 22.2323L15.6328 15.9999L23.1116 9.76758L24.232 11.112Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.875 4.125V27.875H10.125V4.125H11.875Z" fill="currentColor" /></svg>);
DrawerClose.displayName = "DrawerClose";
export { DrawerClose };