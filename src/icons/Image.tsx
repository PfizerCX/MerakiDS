import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Image = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.125 7C4.125 5.41218 5.41218 4.125 7 4.125H25C26.5878 4.125 27.875 5.41218 27.875 7V25C27.875 26.5878 26.5878 27.875 25 27.875H7C5.41218 27.875 4.125 26.5878 4.125 25V7ZM7 5.875C6.37868 5.875 5.875 6.37868 5.875 7V25C5.875 25.6213 6.37868 26.125 7 26.125H25C25.6213 26.125 26.125 25.6213 26.125 25V7C26.125 6.37868 25.6213 5.875 25 5.875H7ZM17.4685 20.1251H21.3362L17.5137 14.5651L15.6454 17.3904L17.4685 20.1251ZM14.5921 15.8105L13.0002 13.4226L7.36523 21.875H16.6246V21.8751H24.663L17.4855 11.4351L14.5921 15.8105ZM13.0002 16.5775L10.6351 20.125H15.3652L13.0002 16.5775Z" fill="#00003A" /></svg>);
Image.displayName = "Image";
export { Image };