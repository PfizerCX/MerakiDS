import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Graph = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M30 28.1253H2V29.8746H30V28.1253ZM9.87467 26V16.1253H4.12533V26H5.87467V17.8746H8.12533V26H9.87467ZM27.8747 26V2.12531H22.1253V26H23.8747V3.87464H26.1253V26H27.8747ZM18.8747 26V9.12531H13.1253V26H14.8747V10.8746H17.1253V26H18.8747Z" fill="currentColor" /></svg>);
Graph.displayName = "Graph";
export { Graph };