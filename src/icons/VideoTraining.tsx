import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const VideoTraining = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M9.65306 11.2079H11.4037V7.08258H28.6664V25.3333H11.4051L11.4171 21.2106L9.66639 21.2053L9.65039 27.0839H30.4171V5.33325H9.65306V11.2079Z" fill="currentColor" /><path d="M13.5487 17.2239V15.1453L5.08068 9.20793H2.67402L2.66602 22.2039H5.25002L13.5487 17.2239ZM4.42335 10.8853L11.9353 16.1519L4.41668 20.6626L4.42335 10.8853ZM26.55 9.33326H13.55V11.0839H26.55V9.33326ZM26.55 21.3333H13.55V23.0839H26.55V21.3333Z" fill="currentColor" /></svg>);
VideoTraining.displayName = "VideoTraining";
export { VideoTraining };