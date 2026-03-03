import { forwardRef, type SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, width, height, style, children, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? size}
      height={height ?? size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      {...props}
    >
      {children}
    </svg>
  ),
);

Icon.displayName = 'Icon';
