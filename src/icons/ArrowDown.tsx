import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ArrowDown = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M16.0009 29.2627L8.26495 16H6.23828L14.4063 30H17.5996L25.7649 16H23.7383L16.0009 29.2627Z" fill="currentColor" /><path d="M16.8769 9.5L16.8769 2L15.1263 2L15.1263 24H16.8769V23.5H16.8796V9.5H16.8769Z" fill="currentColor" /></svg>);
ArrowDown.displayName = "ArrowDown";
export { ArrowDown };