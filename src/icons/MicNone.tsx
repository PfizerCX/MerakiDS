import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const MicNone = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 7C12 4.79086 13.7909 3 16 3C18.2091 3 20 4.79086 20 7V17C20 19.2091 18.2091 21 16 21C13.7909 21 12 19.2091 12 17V7ZM16 4.75C14.7574 4.75 13.75 5.75736 13.75 7V17C13.75 18.2426 14.7574 19.25 16 19.25C17.2426 19.25 18.25 18.2426 18.25 17V7C18.25 5.75736 17.2426 4.75 16 4.75ZM7.25 17V15.125H9V17C9 20.866 12.134 24 16 24C19.866 24 23 20.866 23 17V15.125H24.75V17C24.75 21.6845 21.1667 25.5382 16.625 25.9634V29.333H15.375V25.9634C10.8333 25.5382 7.25 21.6845 7.25 17Z" fill="currentColor" /></svg>);
MicNone.displayName = "MicNone";
export { MicNone };
