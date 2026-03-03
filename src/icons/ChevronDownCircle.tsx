import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChevronDownCircle = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M1.12305 16C1.12305 7.7973 7.79505 1.1253 15.9977 1.12531C24.2004 1.12531 30.8724 7.79731 30.8724 16C30.8724 24.2026 24.2004 30.8746 15.9977 30.8746C7.79505 30.8746 1.12305 24.2026 1.12305 16ZM29.123 16C29.123 8.76264 23.235 2.87464 15.9977 2.87464C8.76038 2.87464 2.87238 8.76264 2.87238 16C2.87238 23.2373 8.76038 29.1253 15.9977 29.1253C23.235 29.1253 29.123 23.2373 29.123 16Z" fill="currentColor" /><path d="M22.331 12.0003H20.299L15.9977 19.2803L11.6963 12.0003H9.66301L14.9817 21.0003H17.0137L22.331 12.0003Z" fill="currentColor" /></svg>);
ChevronDownCircle.displayName = "ChevronDownCircle";
export { ChevronDownCircle };