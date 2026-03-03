import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const ChatWith = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M24.002 2.12H4.00195V3.87066H24.002V2.12ZM15.8766 20.996H14.1273V24.996H15.8766V20.996ZM28.002 14.12H25.8766V15.8707H28.002V14.12ZM28.1273 27.6667L25.8993 25.12H16.002V26.8707H25.1046L27.8393 29.996H29.8766V15.996H28.1273V27.6667Z" fill="currentColor" /><path d="M24.127 3.99597V17.996H25.8763V3.99597H24.127ZM8.63895 18.12L3.87629 22.8826V3.99597H2.12695V24.996H4.23895L9.36429 19.8706H24.0016V18.12H8.63895Z" fill="currentColor" /></svg>);
ChatWith.displayName = "ChatWith";
export { ChatWith };