import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Wallet = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.125 9C2.125 7.41218 3.41218 6.125 5 6.125H27C28.5878 6.125 29.875 7.41218 29.875 9V12H28.125V9C28.125 8.37868 27.6213 7.875 27 7.875H5C4.37868 7.875 3.875 8.37868 3.875 9V12H2.125V9ZM3.875 14V18H2.125V14H3.875ZM28.125 18V14H29.875V18H28.125ZM3.875 20V23C3.875 23.6213 4.37868 24.125 5 24.125H27C27.6213 24.125 28.125 23.6213 28.125 23V20H29.875V23C29.875 24.5878 28.5878 25.875 27 25.875H5C3.41218 25.875 2.125 24.5878 2.125 23V20H3.875ZM4.125 12.125H27.875V13.875H4.125V12.125ZM12.4205 18.125H4.125V19.875H11.5873C13.9206 22.5365 18.0794 22.5365 20.4127 19.875H27.875V18.125H19.5795L19.2211 18.573C17.5697 20.6371 14.4303 20.6371 12.7789 18.573L12.4205 18.125Z" fill="currentColor" /></svg>);
Wallet.displayName = "Wallet";
export { Wallet };