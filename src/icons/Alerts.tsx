import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Alerts = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M29.8748 4.99997H28.1255V21H29.8748V4.99997ZM9.62016 21.1253L3.87482 27.28V4.99997H2.12549V30H3.73082L10.3802 22.8746H28.0002V21.1253H9.62016ZM28.0002 3.12531H4.00015V4.87464H28.0002V3.12531Z" fill="currentColor" /><path d="M16.8615 7H15.1122V14H16.8615V7ZM16.8615 16H15.1108V19H16.8615V16Z" fill="currentColor" /></svg>);
Alerts.displayName = "Alerts";
export { Alerts };