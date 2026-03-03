import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const CheckCircle = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M20.4089 11L14.8222 20.5787L12.2409 18H9.76758L13.7676 22H16.0182L22.4342 11H20.4076H20.4089Z" fill="currentColor" /><path d="M16.0036 30.8746C7.80091 30.8746 1.12891 24.2026 1.12891 16C1.12891 7.79731 7.80091 1.12531 16.0036 1.12531C24.2062 1.12531 30.8782 7.79731 30.8782 16C30.8782 24.2026 24.2062 30.8746 16.0036 30.8746ZM16.0036 2.87464C8.76624 2.87464 2.87824 8.76264 2.87824 16C2.87824 23.2373 8.76624 29.1253 16.0036 29.1253C23.2409 29.1253 29.1289 23.2373 29.1289 16C29.1289 8.76264 23.2409 2.87464 16.0036 2.87464Z" fill="currentColor" /></svg>);
CheckCircle.displayName = "CheckCircle";
export { CheckCircle };