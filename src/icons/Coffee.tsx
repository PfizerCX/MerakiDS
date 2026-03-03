import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Coffee = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M20.2983 28.1253H11.701L11.0077 25H9.213L10.297 29.8746H21.6997L22.7837 25H20.9903L20.297 28.1253H20.2983ZM25.8743 5.12531V2.12531H6.125V5.12531H4.125V9.87464H27.8743V5.12531H25.8743ZM7.87433 3.87464H24.125V5.12531H7.87433V3.87464ZM26.125 8.12531H5.87433V6.87464H26.125V8.12531ZM23.409 14.1253H8.59033L8.11967 12H6.325L8.74233 22.8746H23.257L25.6743 12H23.8797L23.409 14.1253ZM21.853 21.1253H10.1463L8.97967 15.8746H23.0197L21.853 21.1253Z" fill="currentColor" /></svg>);
Coffee.displayName = "Coffee";
export { Coffee };