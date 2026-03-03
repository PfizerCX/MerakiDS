import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChevronLeftWide = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M12.37 16L21.4844 6.88558V4.41071L10.5138 15.3813V16.6187L21.4844 27.5893V25.1144L12.37 16Z" fill="currentColor" /></svg>);
ChevronLeftWide.displayName = "ChevronLeftWide";
export { ChevronLeftWide };