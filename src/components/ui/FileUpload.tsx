import React, { useRef, useState, useCallback } from 'react';
import styles from './FileUpload.module.css';

interface FileUploadProps {
  id: string;
  label: string;
  maxSizeMB: number;
  allowedExtensions: string[]; // e.g. ['.jpg', '.png', '.pdf']
  selectedFile: File | null;
  fileBase64: string | null;
  fileError: string | null;
  onFileSelect: (file: File | null, base64: string | null, error: string | null) => void;
  accept?: string;
  helperText?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  id,
  label,
  maxSizeMB,
  allowedExtensions,
  selectedFile,
  fileBase64,
  fileError,
  onFileSelect,
  accept = 'image/*',
  helperText,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const processFile = useCallback((file: File) => {
    // 1. Validate file size
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      const errorMsg = `File is too large. Please select a file under ${maxSizeMB}MB.`;
      onFileSelect(null, null, errorMsg);
      return;
    }

    // 2. Validate extension
    const fileExt = '.' + file.name.split('.').pop()?.toLowerCase();
    const isAllowedExt = allowedExtensions.some(ext => ext.toLowerCase() === fileExt);
    if (allowedExtensions.length > 0 && !isAllowedExt) {
      const errorMsg = `Invalid file format. Allowed types: ${allowedExtensions.join(', ')}.`;
      onFileSelect(null, null, errorMsg);
      return;
    }

    // 3. Convert to base64
    const reader = new FileReader();
    reader.onloadend = () => {
      onFileSelect(file, reader.result as string, null);
    };
    reader.onerror = () => {
      onFileSelect(null, null, 'Error reading file content.');
    };
    reader.readAsDataURL(file);
  }, [maxSizeMB, allowedExtensions, onFileSelect]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  }, [processFile]);

  const handleRemoveFile = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onFileSelect(null, null, null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [onFileSelect]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true);
    } else if (e.type === 'dragleave') {
      setIsDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  }, [processFile]);

  return (
    <div className={styles.fileInputGroup}>
      <label className={styles.fieldLabel} htmlFor={id}>
        {label}
      </label>

      {selectedFile ? (
        <div className={styles.previewContainer}>
          {fileBase64 && selectedFile.type.startsWith('image/') ? (
            <img
              src={fileBase64}
              alt="Preview of upload"
              className={styles.previewImage}
              loading="lazy"
            />
          ) : (
            <div className={styles.documentPlaceholderIcon} aria-hidden="true">
              📄
            </div>
          )}
          <div className={styles.previewInfo}>
            <span className={styles.previewName}>{selectedFile.name}</span>
            <span className={styles.previewSize}>
              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
            </span>
          </div>
          <button
            type="button"
            onClick={handleRemoveFile}
            className={styles.removeFileBtn}
            aria-label="Remove uploaded file"
          >
            Remove
          </button>
        </div>
      ) : (
        <div
          className={`${styles.fileInputWrapper} ${isDragActive ? styles.dragActive : ''}`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <div className={styles.uploadIcon} aria-hidden="true">
            ↑
          </div>
          <span className={styles.uploadText}>Select or drag a file here</span>
          <span className={styles.uploadLimit}>
            {helperText || `Max file size: ${maxSizeMB}MB (${allowedExtensions.join(', ')})`}
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

      {fileError && (
        <div className={styles.fileErrorContainer}>
          <span className={styles.fieldError} role="alert">
            {fileError}
          </span>
          <button
            type="button"
            onClick={handleRemoveFile}
            className={styles.clearErrorBtn}
            aria-label="Clear file upload error"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
