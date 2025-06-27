import React from 'react';
import type { Pattern, PatternType } from '../../types';
import styles from './styles.module.css';

interface PatternSelectorProps {
  patterns: Pattern[];
  currentPatternIndex: PatternType;
  onPatternSelect: (index: PatternType) => void;
}

export const PatternSelector: React.FC<PatternSelectorProps> = ({
  patterns,
  currentPatternIndex,
  onPatternSelect,
}) => {
  return (
    <div className={styles.patternSelector}>
      <h3 className={styles.sectionTitle}>Patterns</h3>
      <div className={styles.patternList}>
        {patterns.map((pattern, index) => (
          <button
            key={index}
            onClick={() => onPatternSelect(index as PatternType)}
            className={`${styles.patternButton} ${
              index === currentPatternIndex ? styles.active : ''
            }`}
          >
            <div className={styles.patternName}>{pattern.name}</div>
            <div className={styles.patternSubtitle}>{pattern.subtitle}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
