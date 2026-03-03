import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Download = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M22.3587 13.3593L16.875 18.843V4H15.125V18.8734L9.61091 13.3593L8.37347 14.5967L15.9848 22.2081L23.5961 14.5967L22.3587 13.3593Z" fill="currentColor" /><path d="M5.875 25V21H4.125V25C4.125 26.5878 5.41218 27.875 7 27.875H25C26.5878 27.875 27.875 26.5878 27.875 25V21H26.125V25C26.125 25.6213 25.6213 26.125 25 26.125H7C6.37868 26.125 5.875 25.6213 5.875 25Z" fill="currentColor" /></svg>);
Download.displayName = "Download";
export { Download };