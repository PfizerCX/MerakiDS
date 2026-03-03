import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Survey = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M26.8734 29.8746H5.12402V4.12531H10.9987V5.87464H6.87336V28.1253H25.124V5.87464H20.9987V4.12531H26.8734V29.8746ZM20.9987 2.12531H10.9987V3.87464H20.9987V2.12531Z" fill="currentColor" /><path d="M20.9989 6.12531H10.9989V7.87464H20.9989V6.12531ZM22.0029 10.1253H10.0029V11.8746H22.0029V10.1253ZM22.0029 14.1253H10.0029V15.8746H22.0029V14.1253ZM22.0029 18.1253H10.0029V19.8746H22.0029V18.1253ZM22.0029 22.1253H10.0029V23.8746H22.0029V22.1253Z" fill="currentColor" /></svg>);
Survey.displayName = "Survey";
export { Survey };