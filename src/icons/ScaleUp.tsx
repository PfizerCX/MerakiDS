import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ScaleUp = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M3.87433 23H2.125V29.8747H8.99967V28.1254H3.87433V23ZM3.99967 22.8747H9.125V28H10.8743V21.1254H3.99967V22.8747Z" fill="currentColor" /><path d="M2.125 2.12537V21H3.87433V3.8747H28.125V28.1254H10.9997V29.8747H29.8743V2.12537H2.125Z" fill="currentColor" /><path d="M18.9991 6.12537V7.8747H22.8871L11.7617 19H14.2364L24.1244 9.11203V13H25.8737V6.12537H18.9991Z" fill="currentColor" /></svg>);
ScaleUp.displayName = "ScaleUp";
export { ScaleUp };