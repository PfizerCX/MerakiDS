import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Tv = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.125 6.9375C2.125 5.34968 3.41218 4.0625 5 4.0625H27C28.5878 4.0625 29.875 5.34968 29.875 6.9375V20.9375C29.875 22.5253 28.5878 23.8125 27 23.8125H19.875V27.9375H18.125V23.8125H13.875V27.9375H12.125V23.8125H5C3.41218 23.8125 2.125 22.5253 2.125 20.9375V6.9375ZM5 5.8125C4.37868 5.8125 3.875 6.31618 3.875 6.9375V20.9375C3.875 21.5588 4.37868 22.0625 5 22.0625H27C27.6213 22.0625 28.125 21.5588 28.125 20.9375V6.9375C28.125 6.31618 27.6213 5.8125 27 5.8125H5Z" fill="currentColor" /></svg>);
Tv.displayName = "Tv";
export { Tv };