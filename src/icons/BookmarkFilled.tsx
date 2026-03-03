import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const BookmarkFilled = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M15.9997 21.2373L24.7623 30H26.8743V2.12531H5.125V30H7.237L15.9997 21.2373Z" fill="currentColor" /></svg>);
BookmarkFilled.displayName = "BookmarkFilled";
export { BookmarkFilled };