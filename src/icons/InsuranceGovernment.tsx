import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const InsuranceGovernment = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M16.8933 1.99994H15.104L2 9.36394V11.8746H30V9.42661L16.8933 1.99994ZM16 3.50527L27.6813 10.1253H4.21867L15.9987 3.50527H16ZM2.12533 29.8746H29.8747V24.1253H2.12533V29.8746ZM3.87467 25.8746H28.1253V28.1253H3.87467V25.8746ZM13.1253 14.1253V22.0933H18.8747V14.1253H13.1253ZM17.1253 20.3439H14.8747V15.8746H17.1253V20.3439ZM5.12533 14.1253V22.0933H10.8747V14.1253H5.12533ZM9.12533 20.3439H6.87467V15.8746H9.12533V20.3439ZM21.1253 14.1253V22.0933H26.8747V14.1253H21.1253ZM25.1253 20.3439H22.8747V15.8746H25.1253V20.3439Z" fill="currentColor" /></svg>);
InsuranceGovernment.displayName = "InsuranceGovernment";
export { InsuranceGovernment };