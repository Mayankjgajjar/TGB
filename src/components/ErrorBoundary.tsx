import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { captureError } from '../lib/telemetry';
import styles from './ErrorBoundary.module.css';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    captureError(error, { componentStack: errorInfo.componentStack ?? '' });
    this.props.onError?.(error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return <DefaultFallback error={this.state.error} onReset={this.handleReset} />;
    }

    return this.props.children;
  }
}

function DefaultFallback({ error, onReset }: { error: Error | null; onReset: () => void }) {
  return (
    <div role="alert" className={styles.container}>
      <div className={styles.icon}>⚠</div>
      <h2 className={styles.heading}>Something went wrong</h2>
      <p className={styles.message}>
        An unexpected error occurred. Our team has been notified.
      </p>
      {error && (
        <details className={styles.details}>
          <summary>Error details</summary>
          <pre className={styles.stack}>{error.message}</pre>
        </details>
      )}
      <button onClick={onReset} className={styles.resetBtn}>
        Try Again
      </button>
    </div>
  );
}
