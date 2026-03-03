import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Star = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M20.1224 10.8747L16.5811 0.749329H15.4277L11.8811 10.876H1.73842L1.34375 12.3467L9.49042 18.5773L6.52775 28.4547L7.73842 29.1547L16.0024 23.32L24.2664 29.1533L25.4771 28.4533L22.5144 18.576L30.2464 12.6667L29.7664 10.876H20.1237L20.1224 10.8747ZM22.9357 26.0733L16.0024 21.18L9.06908 26.0733L11.5144 17.9227L4.58775 12.6253H13.1237L16.0024 4.39866L18.8797 12.6253H27.4157L20.4891 17.9227L22.9344 26.0733H22.9357Z" fill="currentColor" /></svg>);
Star.displayName = "Star";
export { Star };