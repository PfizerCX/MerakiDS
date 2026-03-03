import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Flag = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M22.6373 13.9947L30.0453 8.09206V6.12539L6.13867 6.12006V21.8707H30.0453V19.9014L22.6373 13.9947ZM7.88801 7.87072L27.5107 7.87472L21.0133 13.0521V14.9387L27.512 20.1201H7.88801V7.87072Z" fill="currentColor" /><path d="M7.87371 22.9946H6.12305V28.1253H3.87371V3.87464H6.12305V4.99997H7.87371V2.12531H2.12305V29.8746H7.87371V22.9946Z" fill="currentColor" /></svg>);
Flag.displayName = "Flag";
export { Flag };