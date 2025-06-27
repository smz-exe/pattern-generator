import { useState, useCallback } from 'react';
import type { RefObject } from 'react';
import type { MousePosition } from '../types';

export const useMousePosition = (
  containerRef: RefObject<HTMLDivElement | null>
) => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    },
    [containerRef]
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
