import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Blood = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M23.0713 15.0453L23.038 15H22.126V20H23.8753V15H23.1327L23.0713 15.0453ZM29.0007 20.1253H24.0007V21.8747H29.0007V20.1253ZM23.8753 22H22.126V27H23.8753V22ZM22.0007 20.1253H17.0007V21.8747H22.0007V20.1253Z" fill="currentColor" /><path d="M15.6047 2H14.438L6.07802 13.496L6.06735 13.5093C3.72202 16.876 3.46069 21.256 5.38469 24.9413C7.31402 28.6387 10.918 30.8453 15.022 30.8453V29.0933C11.582 29.0933 8.55802 27.2387 6.93669 24.1307C5.29135 20.98 5.50202 17.3867 7.49802 14.516L15.0287 4.16267L21.5594 12.9987H23.7354L15.6047 2Z" fill="currentColor" /></svg>);
Blood.displayName = "Blood";
export { Blood };