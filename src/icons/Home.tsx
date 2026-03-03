import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Home = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M16 2L2.125 15.875V29.875H12V21H20V29.875H29.875V15.875L16 2ZM16 4.475L28.125 16.6V28.125H18.25V22.75H13.75V28.125H3.875V16.6L16 4.475Z" fill="currentColor" /></svg>);
Home.displayName = "Home";
export { Home };
