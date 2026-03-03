import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const StarFilled = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M30.2946 13.9146L29.8146 12.1253H20.1706L16.628 1.99994H15.4733L11.9293 12.1253H1.78529L1.39062 13.5973L9.53729 19.8279L6.57463 29.7053L7.78662 30.4039L16.0493 24.5706L24.3133 30.4039L25.5253 29.7053L22.5613 19.8279L30.2946 13.9146Z" fill="currentColor" /></svg>);
StarFilled.displayName = "StarFilled";
export { StarFilled };