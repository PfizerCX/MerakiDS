import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Launch = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M16.8758 18.9999H15.1265V29.9999H16.8758V18.9999ZM22.8731 18.9999H21.1238V25.9999H22.8731V18.9999ZM10.8731 18.9999H9.12381V25.9999H10.8731V18.9999ZM17.2358 1.99994H14.7611L2.00781 14.7533V16.8746H29.9945V14.7599L17.2358 1.99994ZM15.9985 3.23727L27.8865 15.1253H4.11048L15.9985 3.23727Z" fill="currentColor" /></svg>);
Launch.displayName = "Launch";
export { Launch };