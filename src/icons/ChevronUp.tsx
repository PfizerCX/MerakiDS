import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChevronUp = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M6.04492 23.5H8.10092L15.9996 10.6693L23.8929 23.5H25.9463L16.7196 8.5L15.2796 8.5L6.04492 23.5Z" fill="currentColor" /></svg>);
ChevronUp.displayName = "ChevronUp";
export { ChevronUp };