import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Note = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={{ color: 'var(--color-on-background)', ...style }} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M22 6.12524H10V7.87458H22V6.12524ZM22 10.1252H10V11.8746H22V10.1252ZM22 14.1252H10V15.8746H22V14.1252Z" fill="currentColor" /><path d="M26.8743 29.8746H6.99967V28.1252H25.125V3.87458H6.99967V2.12524H26.8743V29.8746ZM6.87433 3.99991H5.125V27.9999H6.87433V3.99991Z" fill="currentColor" /></svg>);
Note.displayName = "Note";
export { Note };