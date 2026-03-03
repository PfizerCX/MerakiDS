import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Flowchart = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M22.124 2.12531V4.99997H23.8734V3.87464H28.124V8.12531H23.8734V6.99997H22.124V9.87464H29.8734V2.12531H22.124ZM22.124 25H23.8734V23.8746H28.124V28.1253H23.8734V27H22.124V29.8746H29.8734V22.1253H22.124V25ZM2.12402 29.8746H9.87336V17H8.12402V28.1253H3.87336V3.87464H8.12402V15H9.87336V2.12531H2.12402V29.8746ZM14.9987 15.1253H9.99869V16.8746H14.9987V15.1253ZM15.124 15H16.8734V6.87464H21.9987V5.12531H15.124V15ZM16.8734 17H15.124V26.8746H21.9987V25.1253H16.8734V17Z" fill="currentColor" /></svg>);
Flowchart.displayName = "Flowchart";
export { Flowchart };