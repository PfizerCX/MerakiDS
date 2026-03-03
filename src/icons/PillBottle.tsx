import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const PillBottle = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M24.8743 6.00003H23.125V9.12537H7.87433V6.00003H6.125V10.8747H8.125V29.8747H22.8743V10.8747H24.8743V6.00003ZM9.87433 14.8747H17.125V24.1254H9.87433V14.8747ZM21.125 28.1254H9.87433V25.8747H18.8743V13.1254H9.87433V10.8747H21.125V28.1254ZM9.87433 3.8747H21.125V6.00003H22.8743V2.12537H8.125V6.00003H9.87433V3.8747Z" fill="currentColor" /></svg>);
PillBottle.displayName = "PillBottle";
export { PillBottle };