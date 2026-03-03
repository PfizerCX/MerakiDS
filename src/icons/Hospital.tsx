import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Hospital = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M26.89 25.996V2.12H5.14062V25.996H6.89129V3.87066H25.1406V25.996H26.89Z" fill="currentColor" /><path d="M16.877 5.99994H15.1276V9.99994H16.877V5.99994ZM21.0023 10.1253H17.0023V11.8746H21.0023V10.1253ZM16.877 11.9999H15.1276V15.9999H16.877V11.9999ZM15.0156 10.1253H11.0023V11.8746H15.0156V10.1253ZM19.877 25.9999V18.1253H12.1276V25.9999H13.877V19.8746H18.1276V25.9999H19.877ZM30.0156 28.1199H2.01562V29.8706H30.0156V28.1199Z" fill="currentColor" /></svg>);
Hospital.displayName = "Hospital";
export { Hospital };