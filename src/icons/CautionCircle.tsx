import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const CautionCircle = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M16.8724 21H15.123V24H16.8724V21ZM16.8724 8H15.123V19H16.8724V8Z" fill="currentColor" /><path d="M16.0101 30.8746C7.81015 30.8746 1.13281 24.2 1.13281 16C1.13281 7.79997 7.81015 1.12531 16.0101 1.12531C24.2101 1.12531 30.8848 7.79997 30.8848 16C30.8848 24.2 24.2088 30.8746 16.0088 30.8746H16.0101ZM16.0101 2.87464C8.77015 2.87464 2.88348 8.76264 2.88348 16C2.88348 23.2373 8.77015 29.1253 16.0075 29.1253C23.2448 29.1253 29.1328 23.2373 29.1328 16C29.1328 8.76264 23.2448 2.87464 16.0075 2.87464H16.0101Z" fill="currentColor" /></svg>);
CautionCircle.displayName = "CautionCircle";
export { CautionCircle };