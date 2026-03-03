import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Grid = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.875 3.125H3.125V14.875H14.875V3.125ZM4.875 13.125V4.875H13.125V13.125H4.875ZM14.875 17.125H3.125V28.875H14.875V17.125ZM4.875 27.125V18.875H13.125V27.125H4.875ZM17.125 3.125H28.875V14.875H17.125V3.125ZM18.875 4.875V13.125H27.125V4.875H18.875ZM28.875 17.125H17.125V28.875H28.875V17.125ZM18.875 27.125V18.875H27.125V27.125H18.875Z" fill="currentColor" /></svg>);
Grid.displayName = "Grid";
export { Grid };