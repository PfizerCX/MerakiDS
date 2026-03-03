import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const MenuCircled = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M23.002 11.1252H9.00195V12.8746H23.002V11.1252ZM23.002 19.1252H9.00195V20.8746H23.002V19.1252ZM23.002 15.1199H9.00195V16.8706H23.002V15.1199Z" fill="currentColor" /><path d="M16.0016 1.12524C7.79895 1.12524 1.12695 7.79724 1.12695 15.9999C1.12695 24.2026 7.79895 30.8746 16.0016 30.8746C24.2043 30.8746 30.8763 24.2026 30.8763 15.9999C30.8763 7.79724 24.2043 1.12524 16.0016 1.12524ZM16.0016 29.1252C8.76429 29.1252 2.87629 23.2372 2.87629 15.9999C2.87629 8.76258 8.76429 2.87458 16.0016 2.87458C23.239 2.87458 29.127 8.76258 29.127 15.9999C29.127 23.2372 23.239 29.1252 16.0016 29.1252Z" fill="currentColor" /></svg>);
MenuCircled.displayName = "MenuCircled";
export { MenuCircled };