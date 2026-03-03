import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Filter = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M22 24.125V25.875H10V24.125H22ZM26 14.625V16.375H6V14.625H26ZM30 6.125V7.875H2V6.125H30Z" fill="currentColor" /></svg>);
Filter.displayName = "Filter";
export { Filter };