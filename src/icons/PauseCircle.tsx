import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const PauseCircle = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M13.8734 9.99998H12.124V22H13.8734V9.99998ZM19.8734 9.99998H18.124V22H19.8734V9.99998Z" fill="currentColor" /><path d="M15.9987 30.8746C7.79602 30.8746 1.12402 24.2026 1.12402 16C1.12402 7.79731 7.79602 1.12531 15.9987 1.12531C24.2014 1.12531 30.8734 7.79731 30.8734 16C30.8734 24.2026 24.2014 30.8746 15.9987 30.8746ZM15.9987 2.87464C8.76136 2.87464 2.87336 8.76264 2.87336 16C2.87336 23.2373 8.76136 29.1253 15.9987 29.1253C23.236 29.1253 29.124 23.2373 29.124 16C29.124 8.76264 23.236 2.87464 15.9987 2.87464Z" fill="currentColor" /></svg>);
PauseCircle.displayName = "PauseCircle";
export { PauseCircle };