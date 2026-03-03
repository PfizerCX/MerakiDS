import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChevronDown = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M25.9541 9.75L23.8981 9.75L15.9994 22.5807L8.10607 9.75L6.05273 9.75L15.2794 24.75H16.7194L25.9541 9.75Z" fill="currentColor" /></svg>);
ChevronDown.displayName = "ChevronDown";
export { ChevronDown };