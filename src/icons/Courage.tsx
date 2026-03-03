import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Courage = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M26 8.88V10.92L27.8 12L26 13.08V15.12L30 12.72V11.28L26 8.88ZM13 11.1253H2V12.8747H13V11.1253ZM16 4.2L17.08 6H19.12L16.72 2H15.28L12.88 6H14.92L16 4.2ZM26 22.88V24.92L27.8 26L26 27.08V29.12L30 26.72V25.28L26 22.88Z" fill="currentColor" /><path d="M16.8747 7.99463H15.1253V18.1253H2V19.8746H16.8733V7.99463H16.8747ZM24 25.1253H2V26.8746H24V25.1253ZM24 11.1253H19V12.8746H24V11.1253Z" fill="currentColor" /></svg>);
Courage.displayName = "Courage";
export { Courage };