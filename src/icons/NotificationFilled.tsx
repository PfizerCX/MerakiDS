import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const NotificationFilled = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M24.8747 17.7626V10.9999C24.8803 9.8349 24.6546 8.68033 24.2106 7.60321C23.7665 6.52609 23.113 5.54786 22.288 4.72527C20.8398 3.26289 18.9237 2.35584 16.8747 2.16261V0.999939H15.1253V2.16261C13.081 2.35887 11.1702 3.26569 9.72533 4.72527C8.89841 5.54716 8.24281 6.52496 7.79651 7.60204C7.3502 8.67912 7.12207 9.83406 7.12533 10.9999V17.7626L4 23.2373V25.8746H12.1253V29.8746H19.8747V25.8746H28V23.2373L24.8747 17.7626ZM18.1253 28.1253H13.8747V25.8746H18.1253V28.1253Z" fill="currentColor" /></svg>);
NotificationFilled.displayName = "NotificationFilled";
export { NotificationFilled };