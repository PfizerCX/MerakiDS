import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Head = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M17.0005 3.8747H26.0005V2.12537H17.0005C12.6605 2.12537 9.12315 5.65737 9.11515 10.0054L9.12316 11.6414L6.00049 14.78V17.8707H9.11116V21.996C9.11398 23.2917 9.63086 24.5334 10.5483 25.4483C11.4658 26.3633 12.7088 26.8767 14.0045 26.876L14.1245 26.8747V29.8747H26.0005V28.1254H15.8752V25.1174L14.0005 25.1254C13.1696 25.1257 12.3724 24.7964 11.784 24.2098C11.1956 23.6231 10.8639 22.827 10.8618 21.996V16.12H7.13382L10.8765 12.3574L10.8632 10C10.8684 8.37515 11.5169 6.81847 12.6667 5.67037C13.8166 4.52227 15.3743 3.87618 16.9992 3.87337L17.0005 3.8747Z" fill="currentColor" /></svg>);
Head.displayName = "Head";
export { Head };