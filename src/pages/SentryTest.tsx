import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Bug, Send, ShieldCheck, RefreshCw } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import { captureError, captureMessage } from '../lib/telemetry';
import styles from './SentryTest.module.css';

export const SentryTest: React.FC = () => {
  const [dsnConfigured, setDsnConfigured] = useState(false);
  const [dsnValue, setDsnValue] = useState('');
  const [envMode, setEnvMode] = useState('');
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    document.title = 'Sentry Telemetry Diagnostic | TGB Enterprise';
    
    // Check DSN status
    const dsn = import.meta.env.VITE_SENTRY_DSN;
    const mode = import.meta.env.MODE;
    
    setEnvMode(mode);
    
    if (dsn && !dsn.startsWith('https://example')) {
      setDsnConfigured(true);
      setDsnValue(dsn);
    } else {
      setDsnConfigured(false);
      setDsnValue(dsn || '');
    }
  }, []);

  const addLog = (msg: string) => {
    setLogs((prev) => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev]);
  };

  const handleTriggerUnhandledError = () => {
    addLog('Triggering unhandled React error (will bubble up to root)...');
    setTimeout(() => {
      throw new Error('Intentional Unhandled Sentry Diagnostic Error');
    }, 100);
  };

  const handleCaptureException = () => {
    try {
      addLog('Throwing exception in try-catch block...');
      throw new Error('Intentional Caught Sentry Diagnostic Exception');
    } catch (err) {
      addLog('Capturing exception using Sentry SDK captureError...');
      captureError(err, { testing: true, timestamp: Date.now() });
      addLog('Exception passed to Telemetry library.');
    }
  };

  const handleCaptureMessage = () => {
    addLog('Capturing diagnostic message using Sentry SDK captureMessage...');
    captureMessage('Sentry diagnostic test warning message', 'warning');
    addLog('Message passed to Telemetry library.');
  };

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      <div className={styles.page}>
        <Container>
          <div className={styles.card}>
            <div className={styles.header}>
              <ShieldCheck size={36} className={styles.headerIcon} />
              <div>
                <h1 className={styles.heading}>Sentry Diagnostic Center</h1>
                <p className={styles.subheading}>Validate application error capturing and telemetry dispatching.</p>
              </div>
            </div>

            <div className={styles.grid}>
              <div className={styles.statusSection}>
                <h2 className={styles.sectionTitle}>Telemetry Status</h2>
                <div className={styles.statusItem}>
                  <span className={styles.statusLabel}>VITE_SENTRY_DSN:</span>
                  {dsnConfigured ? (
                    <span className={`${styles.badge} ${styles.badgeSuccess}`}>
                      <CheckCircle size={14} /> Configured
                    </span>
                  ) : (
                    <span className={`${styles.badge} ${styles.badgeDanger}`}>
                      <AlertCircle size={14} /> Missing / Example
                    </span>
                  )}
                </div>
                <div className={styles.dsnContainer}>
                  <code>{dsnValue || 'No Sentry DSN detected'}</code>
                </div>
                <div className={styles.statusItem} style={{ marginTop: '1rem' }}>
                  <span className={styles.statusLabel}>Environment Mode:</span>
                  <span className={styles.badge} style={{ backgroundColor: '#1A1A1A', color: '#FFF' }}>
                    {envMode}
                  </span>
                </div>
              </div>

              <div className={styles.actionsSection}>
                <h2 className={styles.sectionTitle}>Diagnostic Controls</h2>
                <div className={styles.btnGrid}>
                  <button
                    onClick={handleTriggerUnhandledError}
                    className={`${styles.btn} ${styles.btnDanger}`}
                    disabled={!dsnConfigured}
                  >
                    <Bug size={18} />
                    Unhandled Error
                  </button>

                  <button
                    onClick={handleCaptureException}
                    className={`${styles.btn} ${styles.btnWarning}`}
                    disabled={!dsnConfigured}
                  >
                    <AlertCircle size={18} />
                    Capture Exception
                  </button>

                  <button
                    onClick={handleCaptureMessage}
                    className={`${styles.btn} ${styles.btnInfo}`}
                    disabled={!dsnConfigured}
                  >
                    <Send size={18} />
                    Capture Message
                  </button>
                </div>
                {!dsnConfigured && (
                  <p className={styles.warningText}>
                    Please configure a valid Sentry DSN in your env file to enable the controls.
                  </p>
                )}
              </div>
            </div>

            <div className={styles.consoleSection}>
              <div className={styles.consoleHeader}>
                <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>
                  Telemetry Log Stream
                </h2>
                <button onClick={() => setLogs([])} className={styles.clearBtn}>
                  <RefreshCw size={14} /> Clear logs
                </button>
              </div>
              <div className={styles.console}>
                {logs.length === 0 ? (
                  <span className={styles.placeholder}>Waiting for diagnostic events...</span>
                ) : (
                  logs.map((log, idx) => (
                    <div key={idx} className={styles.logLine}>
                      {log}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </motion.div>
  );
};

export default SentryTest;
