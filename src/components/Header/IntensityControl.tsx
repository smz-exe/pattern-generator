import React from 'react';
import styles from './styles.module.css';

interface IntensityControlProps {
  intensity: number;
  onIntensityChange: (value: number) => void;
}

export const IntensityControl: React.FC<IntensityControlProps> = ({
  intensity,
  onIntensityChange,
}) => {
  return (
    <div className={styles.intensityControl}>
      <span className={styles.intensityLabel}>Intensity</span>
      <input
        type='range'
        min='0.3'
        max='1.5'
        step='0.1'
        value={intensity}
        onChange={e => onIntensityChange(parseFloat(e.target.value))}
        className={styles.intensitySlider}
      />
    </div>
  );
};
