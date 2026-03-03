import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const MenuHorizontal = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.5 14H4V17.5H7.5V14ZM17.5 14H14V17.5H17.5V14ZM27.5 14H24V17.5H27.5V14Z" fill="currentColor" /></svg>);
MenuHorizontal.displayName = "MenuHorizontal";
export { MenuHorizontal };