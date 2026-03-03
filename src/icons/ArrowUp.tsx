import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ArrowUp = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M15.9984 2.73733L23.7344 16L25.761 16L17.593 2L14.3997 2L6.23438 16H8.26104L15.9984 2.73733Z" fill="currentColor" /><path d="M15.1224 22.5L15.1224 30H16.873L16.873 8H15.1224V8.5H15.1197V22.5H15.1224Z" fill="currentColor" /></svg>);
ArrowUp.displayName = "ArrowUp";
export { ArrowUp };