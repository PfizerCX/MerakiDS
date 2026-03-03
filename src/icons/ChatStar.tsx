import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChatStar = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M10 13.8746H13.888L10.7627 17H13.24L15.128 15.112V19H16.8773V15.1133L18.764 17H21.24L18.1147 13.8746H22.0027V12.1253H18.1147L21.24 8.99998H18.7653L16.8773 10.888V6.99998H15.128V10.888L13.2387 8.99998H10.764L13.8893 12.1253H10V13.8746Z" fill="currentColor" /><path d="M3.87433 27.28V4.99997H2.125V30H3.73033L10.3797 22.8746H27.9997V21.1253H9.61967L3.87433 27.28ZM27.9997 3.12531H3.99967V4.87464H27.9997V3.12531ZM29.8743 4.99997H28.125V21H29.8743V4.99997Z" fill="currentColor" /></svg>);
ChatStar.displayName = "ChatStar";
export { ChatStar };