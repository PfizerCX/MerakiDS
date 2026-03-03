import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const IdeaFilled = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M20.9997 28.8746H10.9997V30.6253H20.9997V28.8746ZM11.125 22.472V26.6253H20.8743V22.4706C22.6773 21.566 24.1932 20.1779 25.2527 18.4615C26.3123 16.745 26.8737 14.7678 26.8743 12.7506C26.8743 6.7533 21.9957 1.87463 15.9997 1.87463C10.0037 1.87463 5.125 6.75463 5.125 12.7493C5.12513 14.7669 5.68634 16.7447 6.74592 18.4617C7.80549 20.1787 9.32167 21.5672 11.125 22.472Z" fill="currentColor" /></svg>);
IdeaFilled.displayName = "IdeaFilled";
export { IdeaFilled };