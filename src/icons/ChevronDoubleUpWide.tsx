import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChevronDoubleUpWide = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.88503 26.4864L15.9994 17.372L25.1139 26.4864H27.5887L16.6182 15.5158H15.3807L4.41016 26.4864H6.88503ZM6.88525 16.4842L15.9997 7.36975L25.1141 16.4842H27.5889L16.6184 5.5136H15.3809L4.41037 16.4842H6.88525Z" fill="currentColor" /></svg>);
ChevronDoubleUpWide.displayName = "ChevronDoubleUpWide";
export { ChevronDoubleUpWide };