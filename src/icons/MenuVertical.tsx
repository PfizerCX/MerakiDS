import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const MenuVertical = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14 24L14 27.5L17.5 27.5L17.5 24L14 24ZM14 14L14 17.5L17.5 17.5L17.5 14L14 14ZM14 4L14 7.5L17.5 7.5L17.5 4L14 4Z" fill="currentColor" /></svg>);
MenuVertical.displayName = "MenuVertical";
export { MenuVertical };