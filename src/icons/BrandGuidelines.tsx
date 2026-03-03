import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const BrandGuidelines = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M3.79102 4V7.87467H5.54035V5.75067H28.791V26H5.54035V23.8747H3.79102V27.7493H30.5403V4H3.79102Z" fill="currentColor" /><path d="M5.66602 20H2.66602V21.7493H5.66602V19.9987V20ZM5.66602 10H2.66602V11.7493H5.66602V10ZM5.54068 13.8747H3.79135V17.8747H5.54068V13.8747ZM17.666 10H7.66602V11.7507H17.666V10ZM14.666 14H7.66602V15.7507H14.666V14Z" fill="currentColor" /></svg>);
BrandGuidelines.displayName = "BrandGuidelines";
export { BrandGuidelines };