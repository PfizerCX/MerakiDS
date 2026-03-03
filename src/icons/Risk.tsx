import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Risk = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M20.125 29.8747H26.8743V20.1253H20.125V29.8747ZM21.8743 21.8747H25.125V28.1253H21.8743V21.8747ZM11.125 29.8747H17.8743V14.1253H11.125V29.8747ZM12.8743 15.8747H16.125V28.1253H12.8743V15.8747ZM2.125 29.8747H8.87433V5.12533H2.125V29.8747ZM3.87433 6.87467H7.125V28.1253H3.87433V6.87467ZM28.125 9.98667V12.8533L21.3597 6.092L16.3757 6.09733L12.281 2H9.80633L15.653 7.84667L20.6383 7.84267L26.8877 14.092H23.9997V15.8413H29.8743V9.988H28.125V9.98667Z" fill="currentColor" /></svg>);
Risk.displayName = "Risk";
export { Risk };