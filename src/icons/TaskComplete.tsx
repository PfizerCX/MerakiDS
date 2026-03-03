import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const TaskComplete = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M20.8895 10.9999L15.3029 20.5786L12.7215 17.9999H10.2482L14.2482 21.9999H16.4989L22.9149 10.9999H20.8895Z" fill="currentColor" /><path d="M26.8748 4.12524H21.0002V5.87458H25.1255V28.1252H6.87482V5.87458H11.0002V4.12524H5.12549V29.8746H26.8748V4.12524ZM21.0002 2.12524H11.0002V3.87458H21.0002V2.12524Z" fill="currentColor" /><path d="M21.0002 6.12524H11.0002V7.87458H21.0002V6.12524Z" fill="currentColor" /></svg>);
TaskComplete.displayName = "TaskComplete";
export { TaskComplete };