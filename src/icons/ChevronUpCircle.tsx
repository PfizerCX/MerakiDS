import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChevronUpCircle = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M30.8724 15.9999C30.8724 24.2026 24.2004 30.8746 15.9977 30.8746C7.79504 30.8746 1.12305 24.2026 1.12305 15.9999C1.12305 7.79724 7.79505 1.12524 15.9977 1.12524C24.2004 1.12525 30.8724 7.79725 30.8724 15.9999ZM2.87238 15.9999C2.87238 23.2372 8.76038 29.1252 15.9977 29.1252C23.235 29.1252 29.123 23.2372 29.123 15.9999C29.123 8.76258 23.2351 2.87458 15.9977 2.87458C8.76038 2.87458 2.87238 8.76258 2.87238 15.9999Z" fill="currentColor" /><path d="M9.66442 19.9996H11.6964L15.9978 12.7196L20.2991 19.9996H22.3324L17.0138 10.9996H14.9818L9.66442 19.9996Z" fill="currentColor" /></svg>);
ChevronUpCircle.displayName = "ChevronUpCircle";
export { ChevronUpCircle };