import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const PlayCircle = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M21.9993 14.98L13.6993 10H11.126V21.9947H13.71L22.0006 17.0213L21.9993 14.98ZM12.874 11.5453L20.2993 16L12.874 20.4547V11.5453Z" fill="currentColor" /><path d="M15.9997 30.8746C7.797 30.8746 1.125 24.2026 1.125 16C1.125 7.79731 7.797 1.12531 15.9997 1.12531C24.2023 1.12531 30.8743 7.79731 30.8743 16C30.8743 24.2026 24.2023 30.8746 15.9997 30.8746ZM15.9997 2.87464C8.76233 2.87464 2.87433 8.76264 2.87433 16C2.87433 23.2373 8.76233 29.1253 15.9997 29.1253C23.237 29.1253 29.125 23.2373 29.125 16C29.125 8.76264 23.237 2.87464 15.9997 2.87464Z" fill="currentColor" /></svg>);
PlayCircle.displayName = "PlayCircle";
export { PlayCircle };