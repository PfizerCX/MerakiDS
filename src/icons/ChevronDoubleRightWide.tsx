import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChevronDoubleRightWide = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.51367 6.88552L14.6281 15.9999L5.51367 25.1143V27.5892L16.4842 16.6187V15.3812L5.51367 4.41064V6.88552ZM15.5159 6.88574L24.6303 16.0001L15.5159 25.1146V27.5894L26.4865 16.6189V15.3814L15.5159 4.41086V6.88574Z" fill="currentColor" /></svg>);
ChevronDoubleRightWide.displayName = "ChevronDoubleRightWide";
export { ChevronDoubleRightWide };