import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ErrorCircle = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18.25c-4.55 0-8.25-3.7-8.25-8.25S7.45 3.75 12 3.75s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25ZM11.11 7h1.78v6.5h-1.78V7Zm0 8h1.78v2h-1.78v-2Z" fill="currentColor" /></svg>);
ErrorCircle.displayName = "ErrorCircle";
export { ErrorCircle };
