import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const BloodType = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M23.25 19C23.25 15.1 17.9 7.34 16 5.89C14.1 7.34 8.75 15 8.75 19C8.75 23 12 26.25 16 26.25C20 26.25 23.25 22.9 23.25 19ZM7 19C7 14.03 14 4 16 4C18 4 25 14.03 25 19C25 23.97 20.97 28 16 28C11.03 28 7 23.97 7 19ZM15.1201 13H16.8701V15.12H19V16.87H16.8701V19H15.1201V16.87H13V15.12H15.1201V13ZM13 22.87V21.12H19V22.87H13Z" fill="currentColor" /></svg>);
BloodType.displayName = "BloodType";
export { BloodType };