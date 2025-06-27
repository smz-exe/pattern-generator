import { useState, useEffect } from 'react';

export const useAnimation = () => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      setFrame(f => f + 1);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return frame;
};
