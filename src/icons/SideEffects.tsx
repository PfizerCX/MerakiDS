import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const SideEffects = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M29.8753 5.00003H28.126V21H29.8753V5.00003ZM9.62064 21.1254L3.87531 27.28V5.00003H2.12598V30H3.73131L10.3806 22.8747H28.0006V21.1254H9.62064ZM28.0006 3.12537H4.00064V4.8747H28.0006V3.12537Z" fill="currentColor" /><path d="M16.8617 7.00004H15.1123V14H16.8617V7.00004ZM16.8617 16H15.111V19H16.8617V16Z" fill="currentColor" /></svg>);
SideEffects.displayName = "SideEffects";
export { SideEffects };