import React, { useRef, useMemo } from 'react';
import { PatternElement } from './PatternElement';
import { useAnimation } from '../../hooks/useAnimation';
import { useMousePosition } from '../../hooks/useMousePosition';
import { generatePatternElements } from '../../utils/patterns';
import type { Pattern, PatternType } from '../../types';
import styles from './styles.module.css';

interface PatternVisualizationProps {
  currentPattern: Pattern;
  patternType: PatternType;
  intensity: number;
  mousePos: { x: number; y: number };
  onMousePosChange: (pos: { x: number; y: number }) => void;
}

export const PatternVisualization: React.FC<PatternVisualizationProps> = ({
  currentPattern,
  patternType,
  intensity,
  onMousePosChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const frame = useAnimation();
  const {
    mousePos: localMousePos,
    isHovering,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useMousePosition(containerRef);

  // Update parent component's mouse position
  React.useEffect(() => {
    onMousePosChange(localMousePos);
  }, [localMousePos, onMousePosChange]);

  const elements = useMemo(() => {
    return generatePatternElements(frame, patternType, {
      x: 0,
      y: 0,
      t: 0,
      mousePos: localMousePos,
      isHovering,
      intensity,
    });
  }, [frame, patternType, localMousePos, isHovering, intensity]);

  const containerStyle: React.CSSProperties = {
    transform: `
      rotateX(${15 + localMousePos.y * 25}deg) 
      rotateY(${localMousePos.x * 30 - 15}deg)
      rotateZ(${Math.sin(frame * 0.01) * 2}deg)
    `,
  };

  return (
    <div className={styles.visualizationWrapper}>
      <div
        ref={containerRef}
        className={styles.container}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.elementsContainer} style={containerStyle}>
          {elements.map((element, index) => (
            <PatternElement
              key={index}
              element={element}
              color={currentPattern.color}
            />
          ))}
        </div>

        <div
          className={styles.cursor}
          style={{
            left: `${localMousePos.x * 100}%`,
            top: `${localMousePos.y * 100}%`,
            background: `radial-gradient(circle, ${currentPattern.color}20, transparent)`,
          }}
        />
      </div>

      <div
        className={styles.ambientGradient}
        style={{
          background: `radial-gradient(circle at ${localMousePos.x * 100}% ${localMousePos.y * 100}%, 
                       rgba(255,255,255,0.03) 0%, transparent 60%)`,
        }}
      />
    </div>
  );
};
