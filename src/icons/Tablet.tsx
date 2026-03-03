import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Tablet = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M15.9976 29.1252C9.09625 29.1252 3.42292 23.7719 2.91092 16.9999H1.15625C1.67358 24.7372 8.13092 30.8746 15.9976 30.8746C23.8643 30.8746 30.3229 24.7372 30.8389 16.9999H29.0856C28.5736 23.7719 22.8989 29.1252 15.9989 29.1252H15.9976ZM15.9976 2.87458C22.8976 2.87458 28.5709 8.22791 29.0843 14.9999H30.8389C30.3203 7.26258 23.8629 1.12524 15.9976 1.12524C8.13092 1.12524 1.67358 7.26258 1.15758 14.9999H2.91092C3.42292 8.22791 9.09758 2.87458 15.9976 2.87458ZM28.9589 15.1252H3.03758V16.8746H28.9576V15.1252H28.9589Z" fill="currentColor" /></svg>);
Tablet.displayName = "Tablet";
export { Tablet };