import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChevronLeft = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M21 6.04529V8.10129L8.16933 16L21 23.8933V25.9466L6 16.72V15.28L21 6.04529Z" fill="currentColor" /></svg>);
ChevronLeft.displayName = "ChevronLeft";
export { ChevronLeft };