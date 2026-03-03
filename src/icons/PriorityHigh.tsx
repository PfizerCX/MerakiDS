import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const PriorityHigh = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.125 3.875H18.125V2.125H14.125V3.875ZM13.875 4V16C13.875 17.1736 14.8264 18.125 16 18.125C17.1736 18.125 18.125 17.1736 18.125 16V4H19.875V16C19.875 18.1401 18.1401 19.875 16 19.875C13.8599 19.875 12.125 18.1401 12.125 16V4H13.875ZM16 23.875C14.8264 23.875 13.875 24.8264 13.875 26C13.875 27.1736 14.8264 28.125 16 28.125C17.1736 28.125 18.125 27.1736 18.125 26C18.125 24.8264 17.1736 23.875 16 23.875ZM12.125 26C12.125 23.8599 13.8599 22.125 16 22.125C18.1401 22.125 19.875 23.8599 19.875 26C19.875 28.1401 18.1401 29.875 16 29.875C13.8599 29.875 12.125 28.1401 12.125 26Z" fill="currentColor" /></svg>);
PriorityHigh.displayName = "PriorityHigh";
export { PriorityHigh };