import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const LoveFilled = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M8.40984 26.0493C11.5138 28.7386 14.5805 30.3386 15.4152 30.7506H16.5858C17.4165 30.3386 20.4778 28.74 23.5738 26.048C28.3512 21.8986 30.8752 17.1306 30.8752 12.2613C30.8752 7.98663 27.2645 4.37463 22.9885 4.37463C19.7858 4.37463 17.2485 5.7213 15.9832 7.88397C14.7165 5.71997 12.1805 4.37463 8.97784 4.37463C4.70184 4.37463 1.08984 7.98797 1.08984 12.2613C1.08984 17.132 3.62184 21.8986 8.40984 26.048V26.0493Z" fill="currentColor" /></svg>);
LoveFilled.displayName = "LoveFilled";
export { LoveFilled };