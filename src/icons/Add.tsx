import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Add = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M16.8747 4H15.1253V15H16.8747V4ZM28 15.1253H17V16.8747H28V15.1253ZM16.8747 17H15.1253V28H16.8747V17ZM15 15.1253H4V16.8747H15V15.1253Z" fill="currentColor" /></svg>);
Add.displayName = "Add";
export { Add };