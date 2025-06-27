import React from 'react';
import { PatternSelector } from './PatternSelector';
import type { Pattern, PatternType } from '../../types';
import styles from './styles.module.css';

interface SidebarProps {
  patterns: Pattern[];
  currentPattern: Pattern;
  currentPatternIndex: PatternType;
  onPatternSelect: (index: PatternType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  patterns,
  currentPattern,
  currentPatternIndex,
  onPatternSelect,
}) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.patternInfo}>
        <h2
          className={styles.patternTitle}
          style={{ color: currentPattern.color }}
        >
          {currentPattern.name}
        </h2>
        <p className={styles.patternDescription}>{currentPattern.subtitle}</p>
      </div>

      <div className={styles.divider} />

      <PatternSelector
        patterns={patterns}
        currentPatternIndex={currentPatternIndex}
        onPatternSelect={onPatternSelect}
      />

      <div className={styles.instructions}>
        <div className={styles.instructionsText}>
          Move cursor to interact with the field.
          <br />
          Adjust intensity to control amplitude.
        </div>
      </div>
    </aside>
  );
};
