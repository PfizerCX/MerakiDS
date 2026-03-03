import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Revert = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M2 8.91439L7 13.9143V11.086L3.91419 8.00015L7 4.91434L6.99998 2.08594L2 7.08591V8.91439Z" fill="currentColor" /><path d="M2 26.8751V25.1251H25C26.7259 25.1251 28.125 23.726 28.125 22.0001V12.0001C28.125 10.2742 26.7259 8.87507 25 8.87507H7V7.12507H25C27.6924 7.12507 29.875 9.30769 29.875 12.0001V22.0001C29.875 24.6925 27.6924 26.8751 25 26.8751H2Z" fill="currentColor" /></svg>);
Revert.displayName = "Revert";
export { Revert };