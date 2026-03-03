import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const MenuDotHorizontal = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M7.5 14.25H4V17.75H7.5V14.25Z" fill="currentColor" /><path d="M17.5 14.25H14V17.75H17.5V14.25Z" fill="currentColor" /><path d="M27.5 14.25H24V17.75H27.5V14.25Z" fill="currentColor" /></svg>);
MenuDotHorizontal.displayName = "MenuDotHorizontal";
export { MenuDotHorizontal };