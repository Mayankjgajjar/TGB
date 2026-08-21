import React from 'react';
import styles from './Input.module.css';

export interface InputOption {
  value: string;
  label: string;
}

export interface InputProps extends React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
> {
  label: string;
  id?: string;
  as?: 'input' | 'textarea' | 'select';
  error?: string;
  touched?: boolean;
  options?: InputOption[];
  rows?: number; // specifically for textarea
}

export const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  InputProps
>(
  (
    { label, id, as = 'input', error, touched, options, className = '', required, ...props },
    ref,
  ) => {
    const fieldId = id || (props.name ? `field-${props.name}` : undefined);
    const hasError = !!error;

    const getFieldClass = () => {
      let baseClass = styles.textInput;
      if (as === 'textarea') baseClass = styles.textareaInput;
      if (as === 'select') baseClass = styles.selectInput;

      return `${baseClass} ${hasError ? styles.inputError : ''} ${className}`;
    };

    const fieldClass = getFieldClass();

    return (
      <div className={styles.inputGroup}>
        <label htmlFor={fieldId} className={styles.fieldLabel}>
          {label} {required && '*'}
        </label>

        {as === 'textarea' ? (
          <textarea
            id={fieldId}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={fieldClass}
            aria-invalid={hasError}
            aria-describedby={hasError && fieldId ? `${fieldId}-error` : undefined}
            required={required}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : as === 'select' ? (
          <div className={styles.selectWrapper}>
            <select
              id={fieldId}
              ref={ref as React.Ref<HTMLSelectElement>}
              className={fieldClass}
              aria-invalid={hasError}
              aria-describedby={hasError && fieldId ? `${fieldId}-error` : undefined}
              required={required}
              {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
            >
              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <input
            id={fieldId}
            ref={ref as React.Ref<HTMLInputElement>}
            className={fieldClass}
            aria-invalid={hasError}
            aria-describedby={hasError && fieldId ? `${fieldId}-error` : undefined}
            required={required}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {hasError && (
          <span
            id={fieldId ? `${fieldId}-error` : undefined}
            className={styles.fieldError}
            role="alert"
          >
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
