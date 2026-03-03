import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChevronUpWide = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M15.9986 12.3709L25.113 21.4854H27.5879L16.6173 10.5148H15.3799L4.40932 21.4854H6.88419L15.9986 12.3709Z" fill="currentColor" /></svg>);
ChevronUpWide.displayName = "ChevronUpWide";
export { ChevronUpWide };