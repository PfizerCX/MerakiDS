import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Water = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M26.2698 2L24.3045 12H26.0885L28.0538 2H26.2698ZM25.5832 14.1253H10.0005V15.8747H23.4178L20.7925 28.1253H11.2112L5.73917 2H3.95117L9.78984 29.8747H22.2085L25.5832 14.1253Z" fill="currentColor" /></svg>);
Water.displayName = "Water";
export { Water };