import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ArrowRight = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M24 16.8746V15.1253H2V16.8746H24Z" fill="currentColor" /><path d="M16.0007 6.23596V8.26263L29.2634 16L15.998 23.7373V25.764L30.0007 17.596V14.404L16.0007 6.23596Z" fill="currentColor" /></svg>);
ArrowRight.displayName = "ArrowRight";
export { ArrowRight };