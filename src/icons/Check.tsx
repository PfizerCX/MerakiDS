import { forwardRef } from 'react';
import type { IconProps } from './Icon';

const Check = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, style, ...props }, ref) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={style} ref={ref} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
);

Check.displayName = 'Check';

export { Check };
