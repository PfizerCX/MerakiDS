import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Subtract = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M28 15.1254H4V16.8747H28V15.1254Z" fill="currentColor" /></svg>);
Subtract.displayName = "Subtract";
export { Subtract };