import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChevronRightWide = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M19.6281 16.0001L10.5137 6.88564V4.41077L21.4842 15.3813V16.6188L10.5137 27.5893V25.1145L19.6281 16.0001Z" fill="currentColor" /></svg>);
ChevronRightWide.displayName = "ChevronRightWide";
export { ChevronRightWide };