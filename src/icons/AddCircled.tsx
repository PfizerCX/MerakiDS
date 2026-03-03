import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const AddCircled = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><path d="M16.0114 30.8707C7.81139 30.8707 1.13672 24.1974 1.13672 15.9961C1.13672 7.79339 7.81005 1.12006 16.0114 1.12006C24.2141 1.12006 30.8861 7.79339 30.8861 15.9961C30.8861 24.1974 24.2141 30.8707 16.0114 30.8707ZM16.0114 2.87072C8.77405 2.87072 2.88605 8.75872 2.88605 15.9961C2.88605 23.2321 8.77405 29.1201 16.0114 29.1201C23.2487 29.1201 29.1367 23.2321 29.1367 15.9961C29.1367 8.75872 23.2487 2.87072 16.0114 2.87072Z" fill="currentColor" /><path d="M16.8727 6H15.1234V15H16.8727V6ZM25.998 15.1253H16.998V16.876H25.998V15.1253ZM16.8727 17H15.1234V26H16.8727V17ZM14.998 15.1253H5.99805V16.876H14.998V15.1253Z" fill="currentColor" /></svg>);
AddCircled.displayName = "AddCircled";
export { AddCircled };