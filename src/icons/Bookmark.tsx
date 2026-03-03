import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Bookmark = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M15.9997 21.2373L24.7623 30H26.8743V2.12531H5.125V30H7.237L15.9997 21.2373ZM6.87433 3.87464H25.125V27.888L17.237 20H14.7623L6.87433 27.888V3.87464Z" fill="currentColor" /></svg>);
Bookmark.displayName = "Bookmark";
export { Bookmark };