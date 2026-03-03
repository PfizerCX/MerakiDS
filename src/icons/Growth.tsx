import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Growth = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M11.874 29.8746H5.12468V20.1253H11.874V29.8746ZM6.87401 28.1253H10.1247V21.8746H6.87401V28.1253ZM20.874 29.8746H14.1247V14.1253H20.874V29.8746ZM15.874 28.1253H19.1247V15.8746H15.874V28.1253ZM29.874 29.8746H23.1247V5.12531H29.874V29.8746ZM24.874 28.1253H28.1247V6.87464H24.874V28.1253ZM14.9993 2.12531V3.87464H17.8873L11.638 10.124L6.65268 10.12L2.02734 14.7453V17.22L7.37668 11.8706L12.362 11.876L19.1247 5.11197V7.97864H20.874V2.12531H14.9993Z" fill="currentColor" /></svg>);
Growth.displayName = "Growth";
export { Growth };