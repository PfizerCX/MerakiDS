import { forwardRef } from 'react';
import type { IconProps } from './Icon';

const Info = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, style, ...props }, ref) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={style} ref={ref} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  ),
);

Info.displayName = 'Info';

export { Info };
