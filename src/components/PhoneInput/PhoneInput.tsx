import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ChevronDown } from '../../icons/ChevronDown';
import { ChevronUp } from '../../icons/ChevronUp';
import { ErrorCircle } from '../../icons/ErrorCircle';
import './PhoneInput.css';

export interface CountryOption {
  /** ISO 3166-1 alpha-2 country code */
  code: string;
  /** International dialing code (e.g. "+1") */
  dialCode: string;
  /** Flag emoji */
  flag: string;
  /** Country name */
  name: string;
}

const DEFAULT_COUNTRIES: CountryOption[] = [
  { code: 'US', dialCode: '+1', flag: '🇺🇸', name: 'United States' },
  { code: 'CA', dialCode: '+1', flag: '🇨🇦', name: 'Canada' },
  { code: 'GB', dialCode: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'AU', dialCode: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: 'DE', dialCode: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: 'FR', dialCode: '+33', flag: '🇫🇷', name: 'France' },
  { code: 'IT', dialCode: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: 'ES', dialCode: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: 'NL', dialCode: '+31', flag: '🇳🇱', name: 'Netherlands' },
  { code: 'BE', dialCode: '+32', flag: '🇧🇪', name: 'Belgium' },
  { code: 'PT', dialCode: '+351', flag: '🇵🇹', name: 'Portugal' },
  { code: 'CH', dialCode: '+41', flag: '🇨🇭', name: 'Switzerland' },
  { code: 'AT', dialCode: '+43', flag: '🇦🇹', name: 'Austria' },
  { code: 'IE', dialCode: '+353', flag: '🇮🇪', name: 'Ireland' },
  { code: 'SE', dialCode: '+46', flag: '🇸🇪', name: 'Sweden' },
  { code: 'NO', dialCode: '+47', flag: '🇳🇴', name: 'Norway' },
  { code: 'DK', dialCode: '+45', flag: '🇩🇰', name: 'Denmark' },
  { code: 'FI', dialCode: '+358', flag: '🇫🇮', name: 'Finland' },
  { code: 'PL', dialCode: '+48', flag: '🇵🇱', name: 'Poland' },
  { code: 'GR', dialCode: '+30', flag: '🇬🇷', name: 'Greece' },
  { code: 'BR', dialCode: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: 'MX', dialCode: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: 'AR', dialCode: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: 'CL', dialCode: '+56', flag: '🇨🇱', name: 'Chile' },
  { code: 'CO', dialCode: '+57', flag: '🇨🇴', name: 'Colombia' },
  { code: 'IN', dialCode: '+91', flag: '🇮🇳', name: 'India' },
  { code: 'CN', dialCode: '+86', flag: '🇨🇳', name: 'China' },
  { code: 'JP', dialCode: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: 'KR', dialCode: '+82', flag: '🇰🇷', name: 'South Korea' },
  { code: 'SG', dialCode: '+65', flag: '🇸🇬', name: 'Singapore' },
  { code: 'TH', dialCode: '+66', flag: '🇹🇭', name: 'Thailand' },
  { code: 'PH', dialCode: '+63', flag: '🇵🇭', name: 'Philippines' },
  { code: 'RU', dialCode: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: 'KZ', dialCode: '+7', flag: '🇰🇿', name: 'Kazakhstan' },
  { code: 'ZA', dialCode: '+27', flag: '🇿🇦', name: 'South Africa' },
  { code: 'EG', dialCode: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: 'AE', dialCode: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
  { code: 'SA', dialCode: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: 'IL', dialCode: '+972', flag: '🇮🇱', name: 'Israel' },
  { code: 'NZ', dialCode: '+64', flag: '🇳🇿', name: 'New Zealand' },
];

export interface PhoneInputProps {
  /** Label text displayed above the input */
  label?: string;
  /** Placeholder for the phone number field */
  placeholder?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Show error state */
  error?: boolean;
  /** Error message text */
  errorText?: string;
  /** Helper text displayed below the field */
  helperText?: string;
  /** Phone number value (controlled) */
  value?: string;
  /** Default phone number value (uncontrolled) */
  defaultValue?: string;
  /** Called when the phone number changes */
  onChange?: (phoneNumber: string) => void;
  /** Selected country ISO code (controlled) */
  country?: string;
  /** Default country ISO code */
  defaultCountry?: string;
  /** Called when the country selection changes */
  onCountryChange?: (country: CountryOption) => void;
  /** Available country options */
  countries?: CountryOption[];
  /** Additional CSS class name */
  className?: string;
  /** HTML id attribute */
  id?: string;
  /** HTML name attribute for form submission */
  name?: string;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      label = 'Phone Number',
      placeholder = 'Enter phone number',
      required = false,
      disabled = false,
      error = false,
      errorText,
      helperText,
      value: controlledValue,
      defaultValue = '',
      onChange,
      country: controlledCountry,
      defaultCountry = 'US',
      onCountryChange,
      countries = DEFAULT_COUNTRIES,
      className,
      id: externalId,
      name,
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = externalId || generatedId;
    const helperId = `${inputId}-helper`;
    const listboxId = `${inputId}-listbox`;

    const isValueControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const phoneNumber = isValueControlled ? controlledValue : internalValue;

    const isCountryControlled = controlledCountry !== undefined;
    const [internalCountry, setInternalCountry] = useState(defaultCountry);
    const selectedCountryCode = isCountryControlled
      ? controlledCountry
      : internalCountry;
    const selectedCountry = useMemo(
      () =>
        countries.find((c) => c.code === selectedCountryCode) ?? countries[0],
      [countries, selectedCountryCode],
    );

    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const wrapperRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const showError = error && errorText;
    const showHelper = helperText || showError;

    const filteredCountries = useMemo(() => {
      if (!search) return countries;
      const q = search.toLowerCase();
      return countries.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q) ||
          c.dialCode.includes(q),
      );
    }, [countries, search]);

    const openMenu = useCallback(() => {
      if (disabled) return;
      setOpen(true);
      setSearch('');
      setHighlightedIndex(-1);
    }, [disabled]);

    const closeMenu = useCallback(() => {
      setOpen(false);
      setSearch('');
      setHighlightedIndex(-1);
      triggerRef.current?.focus();
    }, []);

    const selectCountry = useCallback(
      (country: CountryOption) => {
        if (!isCountryControlled) setInternalCountry(country.code);
        onCountryChange?.(country);
        closeMenu();
      },
      [isCountryControlled, onCountryChange, closeMenu],
    );

    useEffect(() => {
      if (!open) return;
      const handler = (e: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(e.target as Node)
        ) {
          closeMenu();
        }
      };
      document.addEventListener('mousedown', handler);
      return () => document.removeEventListener('mousedown', handler);
    }, [open, closeMenu]);

    useEffect(() => {
      if (open) {
        requestAnimationFrame(() => searchInputRef.current?.focus());
      }
    }, [open]);

    useEffect(() => {
      if (open && highlightedIndex >= 0) {
        optionRefs.current[highlightedIndex]?.scrollIntoView({
          block: 'nearest',
        });
      }
    }, [open, highlightedIndex]);

    const handlePhoneChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (!isValueControlled) setInternalValue(val);
        onChange?.(val);
      },
      [isValueControlled, onChange],
    );

    const handleSearchChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setHighlightedIndex(0);
      },
      [],
    );

    const handleSearchKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            setHighlightedIndex((prev) =>
              Math.min(prev + 1, filteredCountries.length - 1),
            );
            break;
          case 'ArrowUp':
            e.preventDefault();
            setHighlightedIndex((prev) => Math.max(prev - 1, 0));
            break;
          case 'Enter':
            e.preventDefault();
            if (
              highlightedIndex >= 0 &&
              filteredCountries[highlightedIndex]
            ) {
              selectCountry(filteredCountries[highlightedIndex]);
            }
            break;
          case 'Escape':
            e.preventDefault();
            closeMenu();
            break;
          case 'Home':
            e.preventDefault();
            setHighlightedIndex(0);
            break;
          case 'End':
            e.preventDefault();
            setHighlightedIndex(filteredCountries.length - 1);
            break;
        }
      },
      [filteredCountries, highlightedIndex, selectCountry, closeMenu],
    );

    const handleTriggerKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (
          e.key === 'Enter' ||
          e.key === ' ' ||
          e.key === 'ArrowDown' ||
          e.key === 'ArrowUp'
        ) {
          e.preventDefault();
          openMenu();
        }
      },
      [openMenu],
    );

    return (
      <div
        ref={wrapperRef}
        className={['mds-phone-input', className].filter(Boolean).join(' ')}
        data-error={error || undefined}
        data-disabled={disabled || undefined}
      >
        {label && (
          <div className="mds-phone-input__label">
            {required && (
              <span className="mds-phone-input__required">*</span>
            )}
            <span>{label}</span>
          </div>
        )}

        <div className="mds-phone-input__fields">
          <div className="mds-phone-input__country">
            <button
              ref={triggerRef}
              type="button"
              className="mds-phone-input__country-trigger"
              aria-haspopup="listbox"
              aria-expanded={open}
              aria-label={`Country code: ${selectedCountry.name} ${selectedCountry.dialCode}`}
              disabled={disabled}
              onClick={() => (open ? closeMenu() : openMenu())}
              onKeyDown={handleTriggerKeyDown}
            >
              <span className="mds-phone-input__country-flag">
                {selectedCountry.flag}
              </span>
              <span className="mds-phone-input__country-code">
                {selectedCountry.dialCode}
              </span>
              <span className="mds-phone-input__country-chevron">
                <ChevronDown size={24} />
              </span>
              {error && (
                <span className="mds-phone-input__error-icon">
                  <ErrorCircle
                    size={24}
                    style={{ color: 'var(--color-negative)' }}
                  />
                </span>
              )}
            </button>

            {open && (
              <div
                ref={panelRef}
                className="mds-phone-input__country-panel"
                role="presentation"
              >
                <div className="mds-phone-input__country-search">
                  <input
                    ref={searchInputRef}
                    type="text"
                    className="mds-phone-input__country-search-input"
                    value={search}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchKeyDown}
                    placeholder={selectedCountry.dialCode}
                    aria-label="Search countries"
                    aria-controls={listboxId}
                    aria-activedescendant={
                      highlightedIndex >= 0
                        ? `${listboxId}-option-${highlightedIndex}`
                        : undefined
                    }
                  />
                  <button
                    type="button"
                    className="mds-phone-input__country-close"
                    tabIndex={-1}
                    onClick={closeMenu}
                    aria-label="Close dropdown"
                  >
                    <ChevronUp size={24} />
                  </button>
                </div>
                <ul
                  id={listboxId}
                  className="mds-phone-input__country-options"
                  role="listbox"
                >
                  {filteredCountries.map((country, index) => (
                    <li key={country.code} role="presentation">
                      <button
                        ref={(el) => {
                          optionRefs.current[index] = el;
                        }}
                        id={`${listboxId}-option-${index}`}
                        type="button"
                        role="option"
                        className="mds-phone-input__country-option"
                        aria-selected={country.code === selectedCountryCode}
                        data-selected={
                          country.code === selectedCountryCode || undefined
                        }
                        data-highlighted={
                          index === highlightedIndex || undefined
                        }
                        onClick={() => selectCountry(country)}
                      >
                        {country.dialCode} {country.code}
                      </button>
                    </li>
                  ))}
                  {filteredCountries.length === 0 && (
                    <li className="mds-phone-input__country-empty">
                      No results
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>

          <div className="mds-phone-input__input-wrapper">
            <input
              ref={ref}
              id={inputId}
              name={name}
              type="tel"
              className="mds-phone-input__input"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder={placeholder}
              disabled={disabled}
              aria-invalid={error || undefined}
              aria-describedby={showHelper ? helperId : undefined}
            />
          </div>
        </div>

        {showHelper && (
          <p className="mds-phone-input__helper" id={helperId}>
            {showError ? errorText : helperText}
          </p>
        )}
      </div>
    );
  },
);

PhoneInput.displayName = 'PhoneInput';

export { PhoneInput, DEFAULT_COUNTRIES };
