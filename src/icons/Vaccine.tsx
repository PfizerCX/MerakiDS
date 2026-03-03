import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Vaccine = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M7.61996 23.1386L1.89062 28.8533L3.12529 30.0906L8.85462 24.3786L7.61996 23.1386ZM23.0106 1.97326L21.7746 3.20926L24.684 6.12926L22.3866 8.41459L18.0666 4.08259L16.8306 5.31859L19.04 7.52792L7.00396 19.5146L12.4733 24.9946L24.496 13.0093L26.6933 15.2199L27.9293 13.9839L23.6093 9.65059L25.9066 7.36659L28.816 10.2866L30.052 9.05192L23.0106 1.97192V1.97326ZM9.46396 19.5253L13.1226 15.8679H19.14L12.46 22.5213L9.46396 19.5253ZM20.9 14.1319H14.8826L20.2506 8.77592L23.248 11.7853L20.9 14.1319Z" fill="currentColor" /></svg>);
Vaccine.displayName = "Vaccine";
export { Vaccine };