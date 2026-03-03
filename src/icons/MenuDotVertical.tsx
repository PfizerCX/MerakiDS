import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const MenuDotVertical = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M14.25 24L14.25 27.5H17.75V24H14.25Z" fill="currentColor" /><path d="M14.25 14L14.25 17.5H17.75V14H14.25Z" fill="currentColor" /><path d="M14.25 4L14.25 7.5L17.75 7.5L17.75 4L14.25 4Z" fill="currentColor" /></svg>);
MenuDotVertical.displayName = "MenuDotVertical";
export { MenuDotVertical };