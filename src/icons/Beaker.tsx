import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Beaker = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M19.8733 16.2573L19.8747 5.99997H18.1253L18.1227 16.7426L24.9547 28.1253H7.052L13.8773 16.7426L13.8747 5.99997H12.1253L12.1267 16.2573L5 28.1466V29.876H27V28.1333L19.8733 16.2573ZM21 2.12531H11V3.87464H21V2.12531Z" fill="currentColor" /></svg>);
Beaker.displayName = "Beaker";
export { Beaker };