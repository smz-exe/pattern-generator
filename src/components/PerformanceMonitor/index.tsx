import React from 'react';
import { usePerformanceMonitor } from '../../hooks/usePerformanceMonitor';
import styles from './styles.module.css';

export const PerformanceMonitor: React.FC = () => {
  const { metrics } = usePerformanceMonitor();

  return (
    <div className={styles.monitor}>
      <div className={styles.metric}>
        <span className={styles.label}>FPS:</span>
        <span
          className={`${styles.value} ${metrics.fps < 50 ? styles.warning : ''}`}
        >
          {metrics.fps}
        </span>
      </div>
      <div className={styles.metric}>
        <span className={styles.label}>Render:</span>
        <span
          className={`${styles.value} ${metrics.renderTime > 16 ? styles.warning : ''}`}
        >
          {metrics.renderTime}ms
        </span>
      </div>
      <div className={styles.metric}>
        <span className={styles.label}>Memory:</span>
        <span className={styles.value}>{metrics.memoryUsage}MB</span>
      </div>
    </div>
  );
};
