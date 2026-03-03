import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const DrawerOpen = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.125 4.125H29.875V27.875H2.125V4.125ZM3.875 5.875V26.125H28.125V5.875H3.875Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.6328 11.112L21.4984 15.9999L15.6328 20.8879L16.7531 22.2323L24.232 15.9999L16.7531 9.76758L15.6328 11.112Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.875 4.125V27.875H10.125V4.125H11.875Z" fill="currentColor" /></svg>);
DrawerOpen.displayName = "DrawerOpen";
export { DrawerOpen };