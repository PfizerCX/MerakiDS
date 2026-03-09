import { forwardRef, useCallback, useId, useRef, useEffect, useState } from 'react';
import './Slider.css';

export interface SliderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current value — pass a number for continuous mode, or [number, number] for range mode */
  value?: number | [number, number];
  /** Minimum allowed value */
  min?: number;
  /** Maximum allowed value */
  max?: number;
  /** Step increment for keyboard and click interactions */
  step?: number;
  /** Label displayed above the slider */
  label?: string;
  /** Whether the slider is disabled */
  disabled?: boolean;
  /** Show value flag tooltip above the handle(s) */
  showFlag?: boolean;
  /** When true, flag is only visible while dragging; when false, flag follows showFlag */
  showFlagOnDragOnly?: boolean;
  /** Show min/max labels below the track */
  showRange?: boolean;
  /** Slider orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Callback fired when the value changes */
  onChange?: (value: number | [number, number]) => void;
}

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

function roundToStep(val: number, min: number, step: number) {
  const steps = Math.round((val - min) / step);
  return min + steps * step;
}

function pct(val: number, min: number, max: number) {
  if (max === min) return 0;
  return ((val - min) / (max - min)) * 100;
}

const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      value = 0,
      min = 0,
      max = 100,
      step = 1,
      label,
      disabled = false,
      showFlag = true,
      showFlagOnDragOnly = true,
      showRange = true,
      orientation = 'horizontal',
      className,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const labelId = `${generatedId}-label`;
    const isRange = Array.isArray(value);
    const isVertical = orientation === 'vertical';

    const lowVal = isRange ? value[0] : value;
    const highVal = isRange ? value[1] : value;

    const trackRef = useRef<HTMLDivElement>(null);
    const draggingRef = useRef<'low' | 'high' | null>(null);
    const [draggingHandle, setDraggingHandle] = useState<'low' | 'high' | null>(null);

    const getValueFromPosition = useCallback(
      (clientX: number, clientY: number) => {
        const track = trackRef.current;
        if (!track) return min;
        const rect = track.getBoundingClientRect();
        let ratio: number;
        if (isVertical) {
          ratio = 1 - (clientY - rect.top) / rect.height;
        } else {
          ratio = (clientX - rect.left) / rect.width;
        }
        ratio = clamp(ratio, 0, 1);
        const raw = min + ratio * (max - min);
        return clamp(roundToStep(raw, min, step), min, max);
      },
      [min, max, step, isVertical]
    );

    const handlePointerDown = useCallback(
      (e: React.PointerEvent, which: 'low' | 'high') => {
        if (disabled) return;
        e.preventDefault();
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        draggingRef.current = which;
        setDraggingHandle(which);
      },
      [disabled]
    );

    const handlePointerMove = useCallback(
      (e: React.PointerEvent) => {
        if (!draggingRef.current || disabled) return;
        const newVal = getValueFromPosition(e.clientX, e.clientY);
        if (isRange) {
          const arr = value as [number, number];
          if (draggingRef.current === 'low') {
            onChange?.([Math.min(newVal, arr[1]), arr[1]]);
          } else {
            onChange?.([arr[0], Math.max(newVal, arr[0])]);
          }
        } else {
          onChange?.(newVal);
        }
      },
      [disabled, getValueFromPosition, isRange, value, onChange]
    );

    const handlePointerUp = useCallback(() => {
      draggingRef.current = null;
      setDraggingHandle(null);
    }, []);

    const handleTrackClick = useCallback(
      (e: React.MouseEvent) => {
        if (disabled) return;
        const target = e.target as HTMLElement;
        if (target.closest('.mds-slider__handle')) return;
        const newVal = getValueFromPosition(e.clientX, e.clientY);
        if (isRange) {
          const arr = value as [number, number];
          const distLow = Math.abs(newVal - arr[0]);
          const distHigh = Math.abs(newVal - arr[1]);
          if (distLow <= distHigh) {
            onChange?.([Math.min(newVal, arr[1]), arr[1]]);
          } else {
            onChange?.([arr[0], Math.max(newVal, arr[0])]);
          }
        } else {
          onChange?.(newVal);
        }
      },
      [disabled, getValueFromPosition, isRange, value, onChange]
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent, which: 'low' | 'high') => {
        if (disabled) return;
        let delta = 0;
        const largeStep = step * 10;

        switch (e.key) {
          case 'ArrowRight':
          case 'ArrowUp':
            delta = step;
            break;
          case 'ArrowLeft':
          case 'ArrowDown':
            delta = -step;
            break;
          case 'PageUp':
            delta = largeStep;
            break;
          case 'PageDown':
            delta = -largeStep;
            break;
          case 'Home':
            if (isRange) {
              const arr = value as [number, number];
              onChange?.(
                which === 'low' ? [min, arr[1]] : [arr[0], min]
              );
            } else {
              onChange?.(min);
            }
            e.preventDefault();
            return;
          case 'End':
            if (isRange) {
              const arr = value as [number, number];
              onChange?.(
                which === 'low' ? [max, arr[1]] : [arr[0], max]
              );
            } else {
              onChange?.(max);
            }
            e.preventDefault();
            return;
          default:
            return;
        }

        e.preventDefault();

        if (isRange) {
          const arr = value as [number, number];
          if (which === 'low') {
            const next = clamp(arr[0] + delta, min, arr[1]);
            onChange?.([next, arr[1]]);
          } else {
            const next = clamp(arr[1] + delta, arr[0], max);
            onChange?.([arr[0], next]);
          }
        } else {
          onChange?.(clamp((value as number) + delta, min, max));
        }
      },
      [disabled, step, min, max, isRange, value, onChange]
    );

    useEffect(() => {
      const onUp = () => {
        draggingRef.current = null;
        setDraggingHandle(null);
      };
      window.addEventListener('pointerup', onUp);
      return () => window.removeEventListener('pointerup', onUp);
    }, []);

    const lowFlagScale = showFlagOnDragOnly ? (draggingHandle === 'low' ? 1 : 0) : 1;
    const lowFlagOpacity = lowFlagScale;
    const highFlagScale = showFlagOnDragOnly ? (draggingHandle === 'high' ? 1 : 0) : 1;
    const highFlagOpacity = highFlagScale;

    const lowFlagStyle: React.CSSProperties =
      showFlag && isVertical
        ? { transform: `translateY(-50%) scale(${lowFlagScale})`, opacity: lowFlagOpacity, transformOrigin: '50% 100%' }
        : showFlag
          ? { transform: `translateX(-50%) scale(${lowFlagScale})`, opacity: lowFlagOpacity, transformOrigin: '50% 100%' }
          : {};
    const highFlagStyle: React.CSSProperties =
      showFlag && isVertical
        ? { transform: `translateY(-50%) scale(${highFlagScale})`, opacity: highFlagOpacity, transformOrigin: '50% 100%' }
        : showFlag
          ? { transform: `translateX(-50%) scale(${highFlagScale})`, opacity: highFlagOpacity, transformOrigin: '50% 100%' }
          : {};

    const lowPct = pct(lowVal, min, max);
    const highPct = pct(highVal, min, max);

    const activeStyle: React.CSSProperties = isVertical
      ? isRange
        ? { bottom: `${lowPct}%`, top: `${100 - highPct}%` }
        : { bottom: '0%', top: `${100 - lowPct}%` }
      : isRange
        ? { left: `${lowPct}%`, right: `${100 - highPct}%` }
        : { left: '0%', right: `${100 - lowPct}%` };

    const lowHandleStyle: React.CSSProperties = isVertical
      ? { bottom: `${lowPct}%` }
      : { left: `${lowPct}%` };

    const highHandleStyle: React.CSSProperties = isVertical
      ? { bottom: `${highPct}%` }
      : { left: `${highPct}%` };

    return (
      <div
        ref={ref}
        className={['mds-slider', className].filter(Boolean).join(' ')}
        data-disabled={disabled || undefined}
        data-orientation={orientation}
        role="group"
        aria-labelledby={label ? labelId : undefined}
        {...props}
      >
        {label && (
          <span className="mds-slider__label" id={labelId}>
            {label}
          </span>
        )}

        <div
          ref={trackRef}
          className="mds-slider__track-container"
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onClick={handleTrackClick}
        >
          <div className="mds-slider__track-inactive" />
          <div className="mds-slider__track-active" style={activeStyle} />

          {isRange && (
            <div
              className="mds-slider__handle"
              role="slider"
              tabIndex={disabled ? -1 : 0}
              aria-valuemin={min}
              aria-valuemax={(value as [number, number])[1]}
              aria-valuenow={(value as [number, number])[0]}
              aria-orientation={orientation}
              aria-label="Range start"
              style={lowHandleStyle}
              onPointerDown={(e) => handlePointerDown(e, 'low')}
              onKeyDown={(e) => handleKeyDown(e, 'low')}
            >
              {showFlag && (
                <span className="mds-slider__flag" style={lowFlagStyle}>
                  {(value as [number, number])[0]}
                </span>
              )}
            </div>
          )}

          <div
            className="mds-slider__handle"
            role="slider"
            tabIndex={disabled ? -1 : 0}
            aria-valuemin={isRange ? (value as [number, number])[0] : min}
            aria-valuemax={max}
            aria-valuenow={isRange ? (value as [number, number])[1] : (value as number)}
            aria-orientation={orientation}
            aria-label={isRange ? 'Range end' : 'Value'}
            style={isRange ? highHandleStyle : lowHandleStyle}
            onPointerDown={(e) => handlePointerDown(e, 'high')}
            onKeyDown={(e) => handleKeyDown(e, isRange ? 'high' : 'low')}
          >
            {showFlag && (
              <span className="mds-slider__flag" style={highFlagStyle}>
                {isRange ? (value as [number, number])[1] : (value as number)}
              </span>
            )}
          </div>
        </div>

        {showRange && (
          <div className="mds-slider__range">
            <span>{min}</span>
            <span>{max}</span>
          </div>
        )}
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export { Slider };
