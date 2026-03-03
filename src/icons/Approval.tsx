import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Approval = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.875 7.5C13.875 6.32639 14.8264 5.375 16 5.375C17.1736 5.375 18.125 6.32639 18.125 7.5V16.375H19.875V7.5C19.875 5.3599 18.1401 3.625 16 3.625C13.8599 3.625 12.125 5.3599 12.125 7.5V16.375H13.875V7.5ZM3.125 25.375V17.625H28.875V25.375H3.125ZM4.875 19.375V23.625H27.125V19.375H4.875ZM5.125 28.375V26.625H26.875V28.375H5.125Z" fill="currentColor" /></svg>);
Approval.displayName = "Approval";
export { Approval };