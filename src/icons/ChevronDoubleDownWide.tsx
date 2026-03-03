import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChevronDoubleDownWide = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.88698 5.51355L16.0014 14.628L25.1158 5.51355L27.5907 5.51355L16.6201 16.4841H15.3827L4.41211 5.51355L6.88698 5.51355ZM6.8872 15.5158L16.0016 24.6302L25.116 15.5158H27.5909L16.6203 26.4863H15.3829L4.41233 15.5158H6.8872Z" fill="currentColor" /></svg>);
ChevronDoubleDownWide.displayName = "ChevronDoubleDownWide";
export { ChevronDoubleDownWide };