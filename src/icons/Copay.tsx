import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Copay = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M3.87433 6.87464H28.125V8.99997H29.8743V5.12531H2.125V8.99997H3.87433V6.87464ZM29.8743 11H28.125V13H29.8743V11ZM3.87433 11H2.125V13H3.87433V11ZM28.125 25.1253H3.87433V15H2.125V26.8746H29.8743V15H28.125V25.1253ZM27.9997 9.1253H3.99967V10.8746H27.9997V9.1253ZM27.9997 13.1253H3.99967V14.8746H27.9997V13.1253Z" fill="currentColor" /><path d="M16 17.1253H6V18.8746H16V17.1253ZM13 21.1253H6V22.8746H13V21.1253Z" fill="currentColor" /></svg>);
Copay.displayName = "Copay";
export { Copay };