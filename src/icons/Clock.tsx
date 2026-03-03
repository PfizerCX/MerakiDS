import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Clock = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M15.9815 30.8746C7.7788 30.8746 1.10547 24.2026 1.10547 16C1.1068 7.79731 7.7788 1.12531 15.9815 1.12531C24.1828 1.12531 30.8561 7.79731 30.8561 16C30.8561 24.2026 24.1828 30.8746 15.9815 30.8746ZM15.9815 2.87464C8.74413 2.87464 2.85614 8.76264 2.85614 16C2.85614 23.2373 8.74413 29.1253 15.9815 29.1253C23.2175 29.1253 29.1055 23.2373 29.1055 16C29.1055 8.76264 23.2175 2.87464 15.9815 2.87464Z" fill="currentColor" /><path d="M16.8763 5.99996H15.127V14.9946H16.8763V5.99996ZM22.0016 15.1253H17.0016V16.8746H22.0016V15.1253Z" fill="currentColor" /></svg>);
Clock.displayName = "Clock";
export { Clock };