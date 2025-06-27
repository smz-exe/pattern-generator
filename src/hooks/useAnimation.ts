import { useState, useEffect, useRef } from 'react';

export const useAnimation = () => {
  const [frame, setFrame] = useState(0);
  const lastTime = useRef(0);
  const targetFPS = 60;
  const frameInterval = 1000 / targetFPS;

  useEffect(() => {
    let animationId: number;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime.current >= frameInterval) {
        setFrame(f => f + 1);
        lastTime.current = currentTime;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [frameInterval]);

  return frame;
};
