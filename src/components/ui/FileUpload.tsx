import React, { useRef, useState, useCallback } from 'react';
import styles from './FileUpload.module.css';

export interface FileUploadProps {
  id?: string;
  label?: string;
  maxSizeMB?: number;
  allowedExtensions?: string[];
  selectedFile?: File | null;
  fileBase64?: string | null;
  fileError?: string | null;
  onFileSelect?: (file: File | null, base64: string | null, error: string | null) => void;
  accept?: string;
  helperText?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  id = 'file-upload-input',
  label = 'Upload Attachment',
  maxSizeMB = 10,
  allowedExtensions = ['.jpg', '.jpeg', '.png', '.pdf', '.webp', '.ai', '.cdr'],
  selectedFile: externalSelectedFile,
  fileError: externalFileError,
  onFileSelect,
  accept = 'image/*,.pdf,.ai,.cdr',
  helperText,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [internalFile, setInternalFile] = useState<File | null>(null);
  const [internalError, setInternalError] = useState<string | null>(null);

  const activeFile = externalSelectedFile !== undefined ? externalSelectedFile : internalFile;
  const activeError = externalFileError !== undefined ? externalFileError : internalError;

  const extensionsList = Array.isArray(allowedExtensions) ? allowedExtensions : [];
  const extString = extensionsList.length > 0 ? extensionsList.join(', ') : 'PDF, JPG, PNG';

  const processFile = useCallback(
    (file: File) => {
      // 1. Validate file size
      const maxSizeBytes = maxSizeMB * 1024 * 1024;
      if (file.size > maxSizeBytes) {
        const errorMsg = `File is too large. Please select a file under ${maxSizeMB}MB.`;
        setInternalFile(null);
        setInternalError(errorMsg);
        onFileSelect?.(null, null, errorMsg);
        return;
      }

      // 2. Validate extension
      const fileExt = '.' + (file.name.split('.').pop()?.toLowerCase() || '');
      const isAllowedExt =
        extensionsList.length === 0 || extensionsList.some((ext) => ext.toLowerCase() === fileExt);

      if (!isAllowedExt) {
        const errorMsg = `Invalid file format. Allowed types: ${extString}.`;
        setInternalFile(null);
        setInternalError(errorMsg);
        onFileSelect?.(null, null, errorMsg);
        return;
      }

      // 3. Convert to base64
      setInternalFile(file);
      setInternalError(null);

      const reader = new FileReader();
      reader.onloadend = () => {
        onFileSelect?.(file, reader.result as string, null);
      };
      reader.onerror = () => {
        const err = 'Error reading file content.';
        setInternalError(err);
        onFileSelect?.(null, null, err);
      };
      reader.readAsDataURL(file);
    },
    [maxSizeMB, extensionsList, extString, onFileSelect],
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInternalFile(null);
    setInternalError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onFileSelect?.(null, null, null);
  };

  const handleClickDropzone = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.fileUploadContainer}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      {activeFile ? (
        <div className={styles.fileSelectedBox}>
          <div className={styles.fileInfo}>
            <span className={styles.fileName}>{activeFile.name}</span>
            <span className={styles.fileSize}>
              ({(activeFile.size / (1024 * 1024)).toFixed(2)} MB)
            </span>
          </div>
          <button
            type="button"
            onClick={handleRemoveFile}
            className={styles.removeBtn}
            aria-label="Remove uploaded file"
          >
            ✕
          </button>
        </div>
      ) : (
        <div
          className={`${styles.dropzone} ${isDragActive ? styles.dropzoneActive : ''} ${activeError ? styles.dropzoneError : ''}`}
          onClick={handleClickDropzone}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className={styles.uploadIcon} aria-hidden="true">
            ↑
          </div>
          <span className={styles.uploadText}>Select or drag a design file / photo here</span>
          <span className={styles.uploadLimit}>
            {helperText || `Max file size: ${maxSizeMB}MB (${extString})`}
          </span>
          <input
            id={id}
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className={styles.hiddenFileInput}
          />
        </div>
      )}

      {activeError && (
        <span className={styles.errorText} role="alert">
          {activeError}
        </span>
      )}
    </div>
  );
};

export default FileUpload;
