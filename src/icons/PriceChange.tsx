import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const PriceChange = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.7246 6V9.125H15.8496V10.875H5.72461V15.125H15.7246V22.875H10.7246V26H8.97461V22.875H3.84961V21.125H13.9746V16.875H3.97461V9.125H8.97461V6H10.7246ZM23.9717 11.2374L26.9139 14.1797L28.1514 12.9423L23.9717 8.76257L19.792 12.9423L21.0294 14.1797L23.9717 11.2374ZM23.9707 20.7626L21.0285 17.8203L19.791 19.0577L23.9707 23.2374L28.1504 19.0577L26.913 17.8203L23.9707 20.7626Z" fill="currentColor" /></svg>);
PriceChange.displayName = "PriceChange";
export { PriceChange };