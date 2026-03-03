import { forwardRef } from 'react';
import type { IconProps } from './Icon';
const Fpo = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  style,
  ...props
}, ref) => <svg style={style} width={size} height={size} fill="currentColor" viewBox="0 0 32 32" ref={ref} {...props}><g clipPath="url(#clip0_2470_690)"><path d="M30 0.125H2V1.875H30V0.125Z" fill="currentColor" /><path d="M30.125 2V30H31.875V2H30.125Z" fill="currentColor" /><path d="M0.125 2V30H1.875V2H0.125Z" fill="currentColor" /><path d="M30 31.875H2V30.125H30V31.875Z" fill="currentColor" /><path d="M4.95479 20V11.95H10.7048V13.468H6.74879V15.308H10.4748V16.826H6.74879V20H4.95479Z" fill="currentColor" /><path d="M11.8503 20V11.95H15.3348C17.0368 11.95 18.3593 12.6515 18.3593 14.434C18.3593 16.251 16.9908 16.918 15.3348 16.918H13.6443V20H11.8503ZM15.3003 15.4345C16.1513 15.4345 16.5193 15.055 16.5193 14.434C16.5193 13.8245 16.1858 13.445 15.3003 13.445H13.6443V15.4345H15.3003Z" fill="currentColor" /><path d="M22.9857 20.207C20.6742 20.207 18.9607 18.689 18.9607 15.975C18.9607 13.3415 20.6742 11.743 22.9857 11.743C25.2857 11.743 27.0452 13.3875 27.0452 15.975C27.0452 18.6545 25.2857 20.207 22.9857 20.207ZM22.9857 18.7005C24.2737 18.7005 25.1937 17.746 25.1937 15.975C25.1937 14.273 24.2852 13.2495 22.9857 13.2495C21.6747 13.2495 20.8237 14.25 20.8237 15.975C20.8237 17.723 21.6862 18.7005 22.9857 18.7005Z" fill="currentColor" /></g><defs><clipPath id="clip0_2470_690"><rect width={32} height={32} fill="white" /></clipPath></defs></svg>);
Fpo.displayName = "Fpo";
export { Fpo };