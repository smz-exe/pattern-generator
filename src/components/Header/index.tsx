import React from 'react';
import { IntensityControl } from './IntensityControl';
import type { Pattern } from '../../types';
import styles from './styles.module.css';

interface HeaderProps {
  currentPattern: Pattern;
  intensity: number;
  onIntensityChange: (value: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPattern,
  intensity,
  onIntensityChange,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Pattern Studio</h1>
        <p className={styles.subtitle}>Generative Art Laboratory</p>
      </div>

      <div className={styles.controls}>
        <IntensityControl
          intensity={intensity}
          onIntensityChange={onIntensityChange}
        />
        <div className={styles.currentPattern}>
          {currentPattern.name.toUpperCase()}
        </div>
      </div>
    </header>
  );
};
