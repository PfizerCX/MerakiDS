import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Asterisk = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M28 15.1253H18.112L25.24 8H22.764L16.876 13.888V4H15.1267V13.888L9.23867 8H6.76133L13.8867 15.1253H4V16.8747H13.888L6.76 24H9.236L15.124 18.112V28H16.8733V18.112L22.7613 24H25.2373L18.112 16.8747H28V15.1253Z" fill="currentColor" /></svg>);
Asterisk.displayName = "Asterisk";
export { Asterisk };