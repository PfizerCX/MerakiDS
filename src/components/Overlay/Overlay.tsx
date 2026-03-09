import { forwardRef, useEffect, useCallback } from 'react';
import './Overlay.css';

export interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the overlay is visible */
  open?: boolean;
  /** Called when the user requests to close (clicks scrim or presses Escape) */
  onClose?: () => void;
}

const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  ({ open = true, onClose, className, children, onClick, ...props }, ref) => {
    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose?.();
      },
      [onClose]
    );

    useEffect(() => {
      if (!open) return;
      document.addEventListener('keydown', handleKeyDown);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = prevOverflow;
      };
    }, [open, handleKeyDown]);

    if (!open) return null;

    return (
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        className={['mds-overlay', className].filter(Boolean).join(' ')}
        onClick={(e) => {
          onClick?.(e);
          if (e.target === e.currentTarget) onClose?.();
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Overlay.displayName = 'Overlay';

export { Overlay };
