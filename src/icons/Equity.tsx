import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Equity = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M22.0023 2.87997V4.91997L23.8023 5.99997L22.0023 7.07997V9.11997L26.0023 6.71997V5.27997L22.0023 2.87997ZM22.0023 12.88V14.92L23.8023 16L22.0023 17.08V19.12L26.0023 16.72V15.28L22.0023 12.88ZM22.0023 22.88V24.92L23.8023 26L22.0023 27.08V29.12L26.0023 26.72V25.28L22.0023 22.88ZM29.905 1.99597H28.1543V29.9933H29.905V1.99597ZM20.0023 5.12531H2.01562V6.87464H20.0023V5.12531ZM20.0023 15.1253H2.01562V16.876H20.0023V15.1253ZM20.0023 25.1253H2.01562V26.876H20.0023V25.1253Z" fill="currentColor" /></svg>);
Equity.displayName = "Equity";
export { Equity };