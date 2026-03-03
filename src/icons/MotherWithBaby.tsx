import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const MotherWithBaby = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><g clipPath="url(#clip0_34_6832)" /><defs><clipPath id="clip0_34_6832"><rect width={32} height={32} fill="white" /></clipPath></defs></svg>);
MotherWithBaby.displayName = "MotherWithBaby";
export { MotherWithBaby };