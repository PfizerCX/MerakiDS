import { forwardRef, useCallback, useId, useRef, useState } from 'react';
import { CloudUpload } from '../../icons/CloudUpload';
import { CloudDone } from '../../icons/CloudDone';
import { ErrorCircle } from '../../icons/ErrorCircle';
import { Close } from '../../icons/Close';
import './FileUpload.css';

export interface FileUploadProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrop'> {
  /** Accepted file types (e.g. ".jpg,.gif,.pdf") */
  accept?: string;
  /** Description of accepted file types shown to the user */
  acceptLabel?: string;
  /** Maximum file size in bytes */
  maxSize?: number;
  /** Custom heading text */
  heading?: string;
  /** Custom body text shown below the heading */
  description?: string;
  /** Label for the browse button */
  browseLabel?: string;
  /** Currently uploaded file (controlled) */
  file?: File | { name: string } | null;
  /** Whether the component is in a loading state */
  loading?: boolean;
  /** Whether the component is in an error state */
  error?: boolean;
  /** Error message displayed in the error banner */
  errorMessage?: string;
  /** Callback when a file is selected via drag-and-drop or browse */
  onFileSelect?: (file: File) => void;
  /** Callback when the uploaded file is removed */
  onFileRemove?: () => void;
  /** Whether the component is disabled */
  disabled?: boolean;
}

const FileUpload = forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      accept = '.jpg,.gif,.pdf',
      acceptLabel = 'jpg, gif, pdf accepted, 1GB max',
      maxSize = 1_073_741_824,
      heading = 'Drag & Drop files here',
      description,
      browseLabel = 'Browse Files Instead',
      file = null,
      loading = false,
      error = false,
      errorMessage = 'File size exceeds allowable maximum',
      onFileSelect,
      onFileRemove,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const id = useId();
    const inputRef = useRef<HTMLInputElement>(null);
    const [dragOver, setDragOver] = useState(false);

    const isSuccess = !!file && !loading && !error;

    const handleDragOver = useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        if (!disabled && !loading) setDragOver(true);
      },
      [disabled, loading]
    );

    const handleDragLeave = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
    }, []);

    const handleDrop = useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
        if (disabled || loading) return;

        const dropped = e.dataTransfer.files[0];
        if (dropped) onFileSelect?.(dropped);
      },
      [disabled, loading, onFileSelect]
    );

    const handleBrowse = useCallback(() => {
      inputRef.current?.click();
    }, []);

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0];
        if (selected) onFileSelect?.(selected);
        e.target.value = '';
      },
      [onFileSelect]
    );

    return (
      <div
        ref={ref}
        className={['mds-file-upload', className].filter(Boolean).join(' ')}
        data-drag-over={dragOver || undefined}
        data-error={error || undefined}
        data-success={isSuccess || undefined}
        data-loading={loading || undefined}
        data-disabled={disabled || undefined}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        {...props}
      >
        {error && (
          <div className="mds-file-upload__error-banner">
            <ErrorCircle
              size={24}
              style={{ color: 'var(--color-negative)' }}
            />
            <span className="mds-file-upload__error-text">
              {errorMessage}
            </span>
          </div>
        )}

        <div
          className="mds-file-upload__icon"
          data-hidden={error || undefined}
        >
          {isSuccess ? (
            <CloudDone
              size={48}
              style={{ color: 'var(--color-primary)' }}
            />
          ) : (
            <CloudUpload
              size={48}
              style={{ color: 'var(--color-primary)' }}
            />
          )}
        </div>

        <div className="mds-file-upload__content">
          <p className="mds-file-upload__heading">
            {isSuccess ? 'Success!' : heading}
          </p>
          <p className="mds-file-upload__description">
            {isSuccess
              ? 'Your file uploaded successfully'
              : description || acceptLabel}
          </p>
        </div>

        {!loading && (
          <div className="mds-file-upload__actions">
            {isSuccess ? (
              <div className="mds-file-upload__file-row">
                <span className="mds-file-upload__filename">
                  {file.name}
                </span>
                <button
                  type="button"
                  className="mds-file-upload__remove"
                  onClick={onFileRemove}
                  aria-label="Remove file"
                >
                  <Close size={24} />
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="mds-file-upload__browse"
                onClick={handleBrowse}
                disabled={disabled}
              >
                {browseLabel}
              </button>
            )}
          </div>
        )}

        {loading && (
          <div className="mds-file-upload__loader">
            <svg
              className="mds-file-upload__spinner"
              viewBox="0 0 40 40"
              width="40"
              height="40"
              aria-label="Uploading"
            >
              <circle
                cx="20"
                cy="20"
                r="17"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeDasharray="80 107"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}

        <input
          ref={inputRef}
          id={`${id}-input`}
          type="file"
          accept={accept}
          className="mds-file-upload__input"
          onChange={handleInputChange}
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';

export { FileUpload };
