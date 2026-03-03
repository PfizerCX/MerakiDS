import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const CalendarAdd = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M29.9997 24.1253H25.8743V19.9947H24.125V24.1253H19.9997V25.8747H24.125V29.9947H25.8743V25.8747H29.9997V24.1253ZM3.87433 6.99467H2.125V3.12533H5.99967V4.87467H3.87433V6.99467ZM29.8743 8.99467H28.125V19H29.8743V8.99467ZM18.9997 29.8747H2.125V8.99467H3.87433V28.1253H18.9997V29.8747ZM29.8743 6.99467H28.125V4.87467H25.9997V3.12533H29.8743V6.99467ZM9.87433 2H8.125V5H9.87433V2ZM23.8743 2H22.125V5H23.8743V2ZM19.9997 3.12533H11.9997V4.87467H19.9997V3.12533ZM27.9997 7.12533H3.99967V8.87467H27.9997V7.12533Z" fill="currentColor" /></svg>);
CalendarAdd.displayName = "CalendarAdd";
export { CalendarAdd };