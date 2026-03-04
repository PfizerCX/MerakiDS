import { forwardRef, useId, useState, useCallback } from 'react';
import { Star } from '../../icons/Star';
import { StarFilled } from '../../icons/StarFilled';
import { StarHalf } from '../../icons/StarHalf';
import { Like } from '../../icons/Like';
import { LikeFilled } from '../../icons/LikeFilled';
import './Rating.css';

/* ===========================================================================
   Shared: Rating Label
   =========================================================================== */

interface RatingLabelProps {
  label?: string;
  required?: boolean;
  id?: string;
}

function RatingLabel({ label, required, id }: RatingLabelProps) {
  if (!label) return null;
  return (
    <div className="mds-rating__label" id={id}>
      {required && <span className="mds-rating__required">*</span>}
      <span>{label}</span>
    </div>
  );
}

/* ===========================================================================
   RatingStarScore
   =========================================================================== */

export interface RatingStarScoreProps {
  label?: string;
  required?: boolean;
  /** Controlled value (0–5, supports 0.5 increments). */
  value?: number;
  /** Uncontrolled default value. */
  defaultValue?: number;
  onChange?: (value: number) => void;
  /** When true the component is read-only (Display mode). */
  readOnly?: boolean;
  /** Compact display variant (only applies when readOnly is true). */
  compact?: boolean;
  /** Text shown after the score in Display mode, e.g. "(12 ratings)". */
  ratingCount?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
}

const RatingStarScore = forwardRef<HTMLDivElement, RatingStarScoreProps>(
  (
    {
      label,
      required = false,
      value: controlledValue,
      defaultValue = 0,
      onChange,
      readOnly = false,
      compact = false,
      ratingCount,
      disabled = false,
      className,
      id: externalId,
    },
    ref
  ) => {
    const generatedId = useId();
    const baseId = externalId || generatedId;
    const labelId = `${baseId}-label`;

    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [hoverValue, setHoverValue] = useState<number | null>(null);

    const currentValue = isControlled ? controlledValue : internalValue;
    const displayValue = hoverValue ?? currentValue;

    const handleSelect = useCallback(
      (star: number) => {
        if (readOnly || disabled) return;
        if (!isControlled) setInternalValue(star);
        onChange?.(star);
      },
      [readOnly, disabled, isControlled, onChange]
    );

    const handleStarClick = useCallback(
      (index: number, event: React.MouseEvent<HTMLButtonElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const half = clickX < rect.width / 2;
        handleSelect(index + (half ? 0.5 : 1));
      },
      [handleSelect]
    );

    const handleStarKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleSelect(index + 1);
        }
      },
      [handleSelect]
    );

    const renderStar = (index: number) => {
      const starValue = index + 1;
      const filled = displayValue >= starValue;
      const halfFilled = !filled && displayValue >= starValue - 0.5;

      const iconProps = { size: 32, 'aria-hidden': true as const };

      const icon = filled ? (
        <StarFilled {...iconProps} />
      ) : halfFilled ? (
        <StarHalf {...iconProps} />
      ) : (
        <Star {...iconProps} />
      );

      if (readOnly) {
        return (
          <span
            key={index}
            className="mds-rating-star__star"
            data-state={filled ? 'full' : halfFilled ? 'half' : 'empty'}
          >
            {icon}
          </span>
        );
      }

      return (
        <button
          key={index}
          type="button"
          className="mds-rating-star__star"
          data-state={filled ? 'full' : halfFilled ? 'half' : 'empty'}
          disabled={disabled}
          aria-label={`${starValue} star${starValue !== 1 ? 's' : ''}`}
          onClick={(e) => handleStarClick(index, e)}
          onKeyDown={(e) => handleStarKeyDown(e, index)}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setHoverValue(index + (x < rect.width / 2 ? 0.5 : 1));
          }}
          onMouseLeave={() => setHoverValue(null)}
        >
          {icon}
        </button>
      );
    };

    const score = currentValue.toFixed(1);

    return (
      <div
        ref={ref}
        className={['mds-rating', 'mds-rating-star', className]
          .filter(Boolean)
          .join(' ')}
        data-readonly={readOnly || undefined}
        data-compact={compact || undefined}
        data-disabled={disabled || undefined}
        role={readOnly ? undefined : 'radiogroup'}
        aria-labelledby={label ? labelId : undefined}
        aria-required={required || undefined}
      >
        {!readOnly && (
          <RatingLabel label={label} required={required} id={labelId} />
        )}
        <div className="mds-rating-star__content">
          <div
            className="mds-rating-star__stars"
            onMouseLeave={() => setHoverValue(null)}
          >
            {[0, 1, 2, 3, 4].map(renderStar)}
          </div>
          <span className="mds-rating-star__score">{score}</span>
          {readOnly && ratingCount && (
            <>
              <span className="mds-rating-star__separator" aria-hidden="true">
                &bull;
              </span>
              <span className="mds-rating-star__count">{ratingCount}</span>
            </>
          )}
        </div>
      </div>
    );
  }
);

RatingStarScore.displayName = 'RatingStarScore';

/* ===========================================================================
   RatingNumberScore
   =========================================================================== */

export interface RatingNumberScoreProps {
  label?: string;
  required?: boolean;
  /** Controlled value (1–10). */
  value?: number;
  /** Uncontrolled default value. */
  defaultValue?: number;
  onChange?: (value: number) => void;
  leftLabel?: string;
  middleLabel?: string;
  rightLabel?: string;
  /** Whether to show the position labels. Defaults to true when any label text is provided. */
  showLabels?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
}

const RatingNumberScore = forwardRef<HTMLDivElement, RatingNumberScoreProps>(
  (
    {
      label,
      required = false,
      value: controlledValue,
      defaultValue,
      onChange,
      leftLabel,
      middleLabel,
      rightLabel,
      showLabels,
      disabled = false,
      className,
      id: externalId,
    },
    ref
  ) => {
    const generatedId = useId();
    const baseId = externalId || generatedId;
    const labelId = `${baseId}-label`;

    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState<number | null>(
      defaultValue ?? null
    );
    const currentValue = isControlled ? controlledValue : internalValue;

    const hasLabels =
      showLabels ?? Boolean(leftLabel || middleLabel || rightLabel);

    const handleSelect = useCallback(
      (num: number) => {
        if (disabled) return;
        if (!isControlled) setInternalValue(num);
        onChange?.(num);
      },
      [disabled, isControlled, onChange]
    );

    return (
      <div
        ref={ref}
        className={['mds-rating', 'mds-rating-number', className]
          .filter(Boolean)
          .join(' ')}
        data-disabled={disabled || undefined}
        role="radiogroup"
        aria-labelledby={label ? labelId : undefined}
        aria-required={required || undefined}
      >
        <RatingLabel label={label} required={required} id={labelId} />
        <div className="mds-rating-number__scale">
          {Array.from({ length: 10 }, (_, i) => {
            const num = i + 1;
            const selected = currentValue === num;
            return (
              <button
                key={num}
                type="button"
                className="mds-rating-number__item"
                data-selected={selected || undefined}
                disabled={disabled}
                role="radio"
                aria-checked={selected}
                aria-label={String(num)}
                onClick={() => handleSelect(num)}
              >
                {num}
              </button>
            );
          })}
        </div>
        {hasLabels && (
          <div className="mds-rating-number__labels">
            <span className="mds-rating-number__label mds-rating-number__label--left">
              {leftLabel}
            </span>
            <span className="mds-rating-number__label mds-rating-number__label--middle">
              {middleLabel}
            </span>
            <span className="mds-rating-number__label mds-rating-number__label--right">
              {rightLabel}
            </span>
          </div>
        )}
      </div>
    );
  }
);

RatingNumberScore.displayName = 'RatingNumberScore';

/* ===========================================================================
   RatingLikeDislike
   =========================================================================== */

export interface RatingLikeDislikeProps {
  label?: string;
  required?: boolean;
  /** Controlled value. */
  value?: 'like' | 'dislike' | null;
  /** Uncontrolled default value. */
  defaultValue?: 'like' | 'dislike' | null;
  onChange?: (value: 'like' | 'dislike' | null) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
}

const RatingLikeDislike = forwardRef<HTMLDivElement, RatingLikeDislikeProps>(
  (
    {
      label,
      required = false,
      value: controlledValue,
      defaultValue = null,
      onChange,
      disabled = false,
      className,
      id: externalId,
    },
    ref
  ) => {
    const generatedId = useId();
    const baseId = externalId || generatedId;
    const labelId = `${baseId}-label`;

    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState<
      'like' | 'dislike' | null
    >(defaultValue);
    const currentValue = isControlled ? controlledValue : internalValue;

    const handleToggle = useCallback(
      (kind: 'like' | 'dislike') => {
        if (disabled) return;
        const next = currentValue === kind ? null : kind;
        if (!isControlled) setInternalValue(next);
        onChange?.(next);
      },
      [disabled, currentValue, isControlled, onChange]
    );

    const iconSize = 32;

    return (
      <div
        ref={ref}
        className={['mds-rating', 'mds-rating-like', className]
          .filter(Boolean)
          .join(' ')}
        data-disabled={disabled || undefined}
        aria-labelledby={label ? labelId : undefined}
      >
        <RatingLabel label={label} required={required} id={labelId} />
        <div className="mds-rating-like__buttons">
          <button
            type="button"
            className="mds-rating-like__btn"
            data-selected={currentValue === 'like' || undefined}
            disabled={disabled}
            aria-pressed={currentValue === 'like'}
            aria-label="Like"
            onClick={() => handleToggle('like')}
          >
            {currentValue === 'like' ? (
              <LikeFilled size={iconSize} aria-hidden />
            ) : (
              <Like size={iconSize} aria-hidden />
            )}
          </button>
          <button
            type="button"
            className="mds-rating-like__btn mds-rating-like__btn--dislike"
            data-selected={currentValue === 'dislike' || undefined}
            disabled={disabled}
            aria-pressed={currentValue === 'dislike'}
            aria-label="Dislike"
            onClick={() => handleToggle('dislike')}
          >
            {currentValue === 'dislike' ? (
              <LikeFilled size={iconSize} aria-hidden />
            ) : (
              <Like size={iconSize} aria-hidden />
            )}
          </button>
        </div>
      </div>
    );
  }
);

RatingLikeDislike.displayName = 'RatingLikeDislike';

export { RatingStarScore, RatingNumberScore, RatingLikeDislike };
