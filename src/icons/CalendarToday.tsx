import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const CalendarToday = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M3.87433 7H2.125V3.12533H5.99967V4.87467H3.87433V7ZM29.8743 29.8747H2.125V9H3.87433V28.1253H28.125V9H29.8743V29.8747ZM29.8743 7H28.125V4.87467H25.9997V3.12533H29.8743V7ZM9.87433 2H8.125V5H9.87433V2ZM23.8743 2H22.125V5H23.8743V2ZM19.9997 3.12533H11.9997V4.87467H19.9997V3.12533ZM27.9997 7.12533H3.99967V8.87467H27.9997V7.12533Z" fill="currentColor" /></svg>);
CalendarToday.displayName = "CalendarToday";
export { CalendarToday };