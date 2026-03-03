import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ArrowLeft = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M2.73733 16L16 8.26397V6.2373L2 14.4053V17.5986L16 25.764V23.7373L2.73733 16Z" fill="currentColor" /><path d="M22.5 16.876H30V15.1253H8V16.876H8.5V16.8786H22.5V16.876Z" fill="currentColor" /></svg>);
ArrowLeft.displayName = "ArrowLeft";
export { ArrowLeft };