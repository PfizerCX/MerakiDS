import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Email = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M2.125 5.12531V26.8746H29.8743V5.12531H2.125ZM25.9117 6.87464L15.9997 12.9746L6.08767 6.87464H25.9117ZM3.87433 25.1253V7.56264L14.325 14H17.6623L28.125 7.56264V25.1253H3.87433Z" fill="currentColor" /></svg>);
Email.displayName = "Email";
export { Email };