import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const LikeFilled = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M26.9986 9.87463H20.1252V4.7493C20.1112 4.46032 19.9865 4.18783 19.777 3.98828C19.5675 3.78873 19.2892 3.67743 18.9999 3.67743C18.7106 3.67743 18.4323 3.78873 18.2228 3.98828C18.0133 4.18783 17.8886 4.46032 17.8746 4.7493L17.8719 6.96663C17.8138 8.75108 17.0645 10.4431 15.7823 11.6855C14.5001 12.9279 12.7853 13.6235 10.9999 13.6253H8.99991V27.6266H22.8906C23.8892 27.6266 24.8012 27.12 25.3306 26.2746L29.4372 19.7013C29.7226 19.244 29.8732 18.7173 29.8732 18.1773V12.7506C29.8722 11.9885 29.569 11.258 29.0301 10.7191C28.4912 10.1802 27.7607 9.87569 26.9986 9.87463ZM6.87457 10.8506H3.00391V28.5333H6.87457V10.8506Z" fill="currentColor" /></svg>);
LikeFilled.displayName = "LikeFilled";
export { LikeFilled };
