import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Close = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M16.2274 14.5338L27.3809 3.38123L28.6183 4.61871L17.4648 15.7713L16.2274 14.5338ZM14.5304 15.7713L3.38086 4.62012L4.61838 3.38276L15.768 14.5339L14.5304 15.7713ZM15.7679 17.4683L4.61836 28.6187L3.38088 27.3813L14.5305 16.2309L15.7679 17.4683ZM27.3769 28.6187L16.2273 17.4683L17.4648 16.2309L28.6144 27.3813L27.3769 28.6187Z" fill="currentColor" /></svg>);
Close.displayName = "Close";
export { Close };