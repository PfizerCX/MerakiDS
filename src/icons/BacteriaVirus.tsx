import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const BacteriaVirus = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M3.76129 15L1.75195 26H3.53062L5.53995 15H3.76129ZM28.1013 15H26.3733L27 18.5426L28.4373 26H30.22L28.1013 15ZM22.7733 15L18.6413 19.1253H16.8813L16.8906 15.488L21.8773 12.496V5.50531L16.0026 1.97998L10.128 5.50531V12.496L15.14 15.5026L15.132 19.1253H13.3653L9.23995 15H7.69862L5.19862 30H6.97195L9.08662 17.3213L12.1426 20.3786V26.876H19.8933V20.3493L22.9426 17.304L25.0333 30H26.8066L24.336 15H22.7733ZM11.876 11.5066V6.49598L16.0026 4.02131L20.128 6.49598V11.5053L16.0026 13.98L11.8773 11.5053L11.876 11.5066ZM18.1426 25.1266H13.892V20.876H18.1413L18.1426 25.1266Z" fill="currentColor" /></svg>);
BacteriaVirus.displayName = "BacteriaVirus";
export { BacteriaVirus };