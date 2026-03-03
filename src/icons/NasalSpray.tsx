import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const NasalSpray = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><g clipPath="url(#clip0_34_9821)" /><defs><clipPath id="clip0_34_9821"><rect width={32} height={32} fill="white" /></clipPath></defs></svg>);
NasalSpray.displayName = "NasalSpray";
export { NasalSpray };