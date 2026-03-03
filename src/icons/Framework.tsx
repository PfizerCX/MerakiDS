import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Framework = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M19.8743 2.12531H12.125V9.87464H19.8743V2.12531ZM18.125 8.12531H13.8743V3.87464H18.125V8.12531ZM2.125 29.8746H9.87433V22.1253H2.125V29.8746ZM3.87433 23.8746H8.125V28.1253H3.87433V23.8746ZM22.125 22.1253V29.8746H29.8743V22.1253H22.125ZM28.125 28.1253H23.8743V23.8746H28.125V28.1253ZM5.125 19.9946H6.87433V6.87464H10.001V5.12531H5.125V19.9946ZM25.125 19.9946H26.8743V5.12531H22.001V6.87464H25.125V19.9946ZM19.9997 25.1253H11.9997V26.8746H19.9997V25.1253Z" fill="currentColor" /></svg>);
Framework.displayName = "Framework";
export { Framework };