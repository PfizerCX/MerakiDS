import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChevronRight = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M11 6.04529V8.10129L23.8307 16L11 23.8933V25.9466L26 16.72V15.28L11 6.04529Z" fill="currentColor" /></svg>);
ChevronRight.displayName = "ChevronRight";
export { ChevronRight };