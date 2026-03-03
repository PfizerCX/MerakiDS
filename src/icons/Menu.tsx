import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Menu = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M30 10.875H2V9.125H30V10.875Z" fill="currentColor" /><path d="M30 16.875H2V15.125H30V16.875Z" fill="currentColor" /><path d="M2 22.875H30V21.125H2V22.875Z" fill="currentColor" /></svg>);
Menu.displayName = "Menu";
export { Menu };