import { useState, useCallback } from 'react';
import type { RefObject } from 'react';
import type { MousePosition } from '../types';
import { useThrottle } from './useThrottle';

export const useMousePosition = (
  containerRef: RefObject<HTMLDivElement | null>
) => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);

  // Throttle mouse position updates to ~60fps for better performance
  const throttledSetMousePos = useThrottle(setMousePos, 16);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        throttledSetMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    },
    [containerRef, throttledSetMousePos]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return {
    mousePos,
    isHovering,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
};
