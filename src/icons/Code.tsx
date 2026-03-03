import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Code = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.31769 16L13.2359 8.07261L12.0733 6.76465L1.68359 16L12.0733 25.2353L13.2359 23.9273L4.31769 16ZM27.6823 16L18.7641 8.07261L19.9267 6.76465L30.3164 16L19.9267 25.2353L18.7641 23.9273L27.6823 16Z" fill="#00003A" /></svg>);
Code.displayName = "Code";
export { Code };