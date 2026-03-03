import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChevronDoubleLeftWide = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M26.4863 6.88552L17.3719 15.9999L26.4863 25.1143V27.5892L15.5158 16.6187V15.3812L26.4863 4.41064V6.88552ZM16.4841 6.88574L7.36969 16.0001L16.4841 25.1146V27.5894L5.51353 16.6189V15.3814L16.4841 4.41086V6.88574Z" fill="currentColor" /></svg>);
ChevronDoubleLeftWide.displayName = "ChevronDoubleLeftWide";
export { ChevronDoubleLeftWide };