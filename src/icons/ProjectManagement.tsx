import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ProjectManagement = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M16.3997 5.00001L17.9997 3.72001V1.47601L14.4997 4.28001V5.72001L17.9997 8.51601V6.27601L16.3997 5.00001ZM14.9997 23.4773V25.7187L16.5997 26.9987L14.9997 28.276V30.516L18.4997 27.72V26.28L14.9997 23.4773ZM2.125 27.8747V4.12535H12.4997V5.87468H3.87433V26.124L13.0023 26.12V27.8707L2.125 27.8747ZM29.8743 27.8747H20.4997V26.1253H28.125V5.87468H19.9997V4.12535H29.8743V27.8747Z" fill="currentColor" /><path d="M25.8743 21.8747H6.125V8.12006L14.8743 8.12539V10.1254H25.8743V21.8747ZM7.87433 20.1254H24.125V11.8747H13.125V9.87472L7.87433 9.87072V20.1254Z" fill="currentColor" /></svg>);
ProjectManagement.displayName = "ProjectManagement";
export { ProjectManagement };