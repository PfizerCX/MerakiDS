import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Diagnostics = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M23.2149 18.4587V16.7067H19.7483L18.2149 19.004L15.2696 14.5853H13.1616L11.7483 16.7067H9.21094V18.4573H12.6843L14.2149 16.1587L17.1643 20.5813H19.2669L20.6843 18.4573L23.2149 18.4587Z" fill="currentColor" /><path d="M21.2106 6.41729H25.3359V28.6666H7.08527V6.41596H11.2106V4.66663H5.33594V30.4173H27.0866V4.66663H21.2106V6.41729ZM21.2106 2.66663H11.2106V4.41729H21.2106V2.66663Z" fill="currentColor" /><path d="M21.2109 6.66663H11.2109V8.41729H21.2109V6.66663Z" fill="currentColor" /></svg>);
Diagnostics.displayName = "Diagnostics";
export { Diagnostics };