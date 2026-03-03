import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Travel = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M12.1503 5.97337V11.348L2.125 14.348V20.0014H3.87567V15.652L13.901 12.652V5.97337C13.901 4.81603 14.8423 3.87337 15.9997 3.87337C17.157 3.87337 18.0997 4.81603 18.0997 5.97337V12.6507L28.125 15.6507V20H29.8743V14.348L19.849 11.348V5.9747C19.8479 4.95412 19.442 3.97564 18.7204 3.25398C17.9987 2.53232 17.0202 2.12643 15.9997 2.12537C14.9793 2.12642 14.001 2.53213 13.2794 3.25351C12.5578 3.97488 12.1517 4.95302 12.1503 5.97337Z" fill="currentColor" /><path d="M26 19.8747V18.1254H18.1253V26.468L20.6107 28.1254H11.3907L13.876 26.468V18.1254H6V19.8747H12.1253V25.532L9.12533 27.532V29.8747H22.8747V27.5334L19.8747 25.5334V19.876L26 19.8747Z" fill="currentColor" /></svg>);
Travel.displayName = "Travel";
export { Travel };