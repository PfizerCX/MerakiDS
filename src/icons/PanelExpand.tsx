import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const PanelExpand = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.9375 7.875H29.9375V6.125H9.9375V7.875ZM2.06265 8.48975V23.581L14.6387 15.7L2.06265 8.48975ZM11.2366 15.7667L3.81265 20.4191V11.5103L11.2366 15.7667ZM29.9375 25.875H9.9375V24.125H29.9375V25.875ZM17.9375 13.875H29.9375V12.125H17.9375V13.875ZM29.9375 19.875H17.9375V18.125H29.9375V19.875Z" fill="currentColor" /></svg>);
PanelExpand.displayName = "PanelExpand";
export { PanelExpand };