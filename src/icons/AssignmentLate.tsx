import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const AssignmentLate = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M18.875 3.125H13.125V7.125H6V8.875H13.125H14H18H18.875H26V7.125H18.875V3.125ZM14.875 7.125V4.875H17.125V7.125H14.875ZM15.125 12V20H16.875V12H15.125ZM15.125 22V24H16.875V22H15.125ZM4.125 27V9H5.875V27H4.125ZM26.125 9V27H27.875V9H26.125ZM26 28.875H6V27.125H26V28.875Z" fill="currentColor" /></svg>);
AssignmentLate.displayName = "AssignmentLate";
export { AssignmentLate };