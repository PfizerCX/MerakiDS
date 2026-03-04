import { forwardRef } from 'react';
import { Search } from '../../icons/Search';
import { Close } from '../../icons/Close';
import { Filter } from '../../icons/Filter';
import { MicNone } from '../../icons/MicNone';
import './SearchField.css';

export interface SearchFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Visual variant — `"search"` renders a full input bar, `"icon"` renders a circular button */
  variant?: 'search' | 'icon';
  /** Component size */
  size?: 'small' | 'base' | 'large';
  /** Show the leading search icon (search variant) */
  showSearchIcon?: boolean;
  /** Show the microphone action button */
  showMicrophoneButton?: boolean;
  /** Show the filter action button */
  showFilterButton?: boolean;
  /** Show the close / clear action button */
  showCloseButton?: boolean;
  /** Called when the close / clear button is clicked */
  onClear?: () => void;
  /** Called when the microphone button is clicked */
  onMicrophoneClick?: () => void;
  /** Called when the filter button is clicked */
  onFilterClick?: () => void;
  /** Called when the icon button is clicked (icon variant only) */
  onSearchClick?: () => void;
}

const SEARCH_ICON_SIZE: Record<string, number> = {
  small: 16,
  base: 24,
  large: 24,
};

const ACTION_ICON_SIZE: Record<string, number> = {
  small: 16,
  base: 20,
  large: 24,
};

/**
 * SearchField provides a pill-shaped search input (`variant="search"`) or a
 * compact circular search button (`variant="icon"`).
 */
const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      variant = 'search',
      size = 'base',
      showSearchIcon = true,
      showMicrophoneButton = false,
      showFilterButton = false,
      showCloseButton = false,
      onClear,
      onMicrophoneClick,
      onFilterClick,
      onSearchClick,
      className,
      disabled = false,
      placeholder = 'Search',
      ...inputProps
    },
    ref
  ) => {
    const searchIconSize = SEARCH_ICON_SIZE[size];
    const actionIconSize = ACTION_ICON_SIZE[size];

    if (variant === 'icon') {
      return (
        <button
          type="button"
          className={['mds-search-field-icon', `mds-search-field-icon--${size}`, className]
            .filter(Boolean)
            .join(' ')}
          disabled={disabled}
          onClick={onSearchClick}
          aria-label="Search"
          data-disabled={disabled || undefined}
        >
          <Search size={searchIconSize} />
        </button>
      );
    }

    const hasActions = showMicrophoneButton || showFilterButton || showCloseButton;

    return (
      <div
        className={['mds-search-field', `mds-search-field--${size}`, className]
          .filter(Boolean)
          .join(' ')}
        data-disabled={disabled || undefined}
      >
        {showSearchIcon && (
          <span className="mds-search-field__icon">
            <Search size={searchIconSize} />
          </span>
        )}

        <input
          ref={ref}
          type="search"
          className="mds-search-field__input"
          placeholder={placeholder}
          disabled={disabled}
          {...inputProps}
        />

        {hasActions && (
          <div className="mds-search-field__actions">
            {showMicrophoneButton && (
              <button
                type="button"
                className="mds-search-field__action-btn"
                onClick={onMicrophoneClick}
                disabled={disabled}
                aria-label="Voice search"
              >
                <MicNone size={actionIconSize} />
              </button>
            )}
            {showFilterButton && (
              <button
                type="button"
                className="mds-search-field__action-btn"
                onClick={onFilterClick}
                disabled={disabled}
                aria-label="Filter"
              >
                <Filter size={actionIconSize} />
              </button>
            )}
            {showCloseButton && (
              <button
                type="button"
                className="mds-search-field__action-btn"
                onClick={onClear}
                disabled={disabled}
                aria-label="Clear search"
              >
                <Close size={actionIconSize} />
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
);

SearchField.displayName = 'SearchField';

export { SearchField };
