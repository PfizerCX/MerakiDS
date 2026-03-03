import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Excellence = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M15.9867 4.21994L17.0133 5.99994H19.032L16.7253 1.99994H15.2827L12.864 5.99994H14.9093L15.9867 4.21994ZM16.8747 7.99994H15.1253V29.9999H16.8747V7.99994ZM10 13.6999L11.08 15.4999H13.12L10.72 11.4999H9.28L6.88 15.4999H8.92L10 13.6999ZM9.12533 28.1253H2V29.8746H10.8747V17.4999H9.12533V28.1253ZM22 13.6999L23.08 15.4999H25.12L22.72 11.4999H21.28L18.88 15.4999H20.92L22 13.6999ZM22.8747 28.1253V17.4999H21.1253V29.8746H30V28.1253H22.8747Z" fill="currentColor" /></svg>);
Excellence.displayName = "Excellence";
export { Excellence };