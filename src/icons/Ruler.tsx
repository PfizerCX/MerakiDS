import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Ruler = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M28.125 24V28.1253H24.8743V26H23.125V28.1253H19.8743V26H18.125V28.1253H14.8743V26H13.125V28.1253H9.87433V26H8.125V28.1253H3.87433V23.8746H5.99967V22.1253H3.87433V18.8746H5.99967V17.1253H3.87433V13.8746H5.99967V12.1253H3.87433V8.87464H5.99967V7.12531H3.87433V3.87464H7.99967V2.12531H2.125V29.8746H29.8743V24H28.125Z" fill="currentColor" /><path d="M27.9997 22.1253H9.87433V3.99998H8.125V23.8746H27.9997V22.1253Z" fill="currentColor" /></svg>);
Ruler.displayName = "Ruler";
export { Ruler };