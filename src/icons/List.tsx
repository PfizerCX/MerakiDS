import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const List = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3 9.875H7V8.125H3V9.875ZM3 16.875H7V15.125H3V16.875ZM7 23.875H3V22.125H7V23.875ZM9 9.875H29V8.125H9V9.875ZM29 16.875H9V15.125H29V16.875ZM9 23.875H29V22.125H9V23.875Z" fill="currentColor" /></svg>);
List.displayName = "List";
export { List };