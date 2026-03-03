import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const PanelCollapse = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M22.0625 7.875H2.0625V6.125H22.0625V7.875ZM29.9373 8.48975V23.581L17.3613 15.7L29.9373 8.48975ZM20.7634 15.7667L28.1873 20.4191V11.5103L20.7634 15.7667ZM2.0625 25.875H22.0625V24.125H2.0625V25.875ZM14.0625 13.875H2.0625V12.125H14.0625V13.875ZM2.0625 19.875H14.0625V18.125H2.0625V19.875Z" fill="currentColor" /></svg>);
PanelCollapse.displayName = "PanelCollapse";
export { PanelCollapse };