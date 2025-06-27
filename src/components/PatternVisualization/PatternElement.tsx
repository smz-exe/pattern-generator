import React from 'react';
import type { PatternElement as PatternElementType } from '../../types';
import styles from './styles.module.css';

interface PatternElementProps {
  element: PatternElementType;
  color: string;
}

export const PatternElement: React.FC<PatternElementProps> = React.memo(
  ({ element, color }) => {
    const style: React.CSSProperties = {
      left: '50%',
      top: '50%',
      transform: `translate3d(${element.x}px, ${element.y}px, ${element.height}px) rotateZ(${element.rotation}deg) scale(${element.scale})`,
      opacity: element.opacity,
      background: `linear-gradient(135deg, ${color}, rgba(255,255,255,0.8))`,
      boxShadow: `0 0 20px ${color}40, 0 0 40px ${color}20, inset 0 0 6px rgba(255,255,255,0.3)`,
      willChange: 'transform, opacity',
    };

    return <div className={styles.element} style={style} />;
  },
  (prevProps, nextProps) => {
    // Custom comparison for better memoization
    const prevElement = prevProps.element;
    const nextElement = nextProps.element;

    return (
      prevProps.color === nextProps.color &&
      prevElement.x === nextElement.x &&
      prevElement.y === nextElement.y &&
      Math.abs(prevElement.height - nextElement.height) < 0.01 &&
      Math.abs(prevElement.rotation - nextElement.rotation) < 0.1 &&
      Math.abs(prevElement.scale - nextElement.scale) < 0.001 &&
      Math.abs(prevElement.opacity - nextElement.opacity) < 0.001
    );
  }
);
