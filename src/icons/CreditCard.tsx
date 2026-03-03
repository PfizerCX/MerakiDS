import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const CreditCard = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5 6.125C3.41218 6.125 2.125 7.41218 2.125 9V12H3.875V9C3.875 8.37868 4.37868 7.875 5 7.875H27C27.6213 7.875 28.125 8.37868 28.125 9V12H29.875V9C29.875 7.41218 28.5878 6.125 27 6.125H5ZM3.875 23V14H2.125V23C2.125 24.5878 3.41218 25.875 5 25.875H27C28.5878 25.875 29.875 24.5878 29.875 23V14H28.125V23C28.125 23.6213 27.6213 24.125 27 24.125H5C4.37868 24.125 3.875 23.6213 3.875 23ZM27.875 12.125H4.125V13.875H27.875V12.125ZM6.125 16.125H15.875V17.875H6.125V16.125ZM15.875 20.125H6.125V21.875H15.875V20.125Z" fill="currentColor" /></svg>);
CreditCard.displayName = "CreditCard";
export { CreditCard };