import { useState, useEffect, useRef } from 'react';

export interface PerformanceMetrics {
  fps: number;
  renderTime: number;
  memoryUsage: number;
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    renderTime: 0,
    memoryUsage: 0,
  });

  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const renderStart = useRef(0);

  useEffect(() => {
    let animationId: number;

    const updateMetrics = () => {
      const now = performance.now();
      frameCount.current++;

      // Calculate FPS every second
      if (now - lastTime.current >= 1000) {
        const fps = Math.round(
          (frameCount.current * 1000) / (now - lastTime.current)
        );

        // Get memory usage if available
        const memory = (performance as unknown as Record<string, unknown>)
          .memory as { usedJSHeapSize: number } | undefined;
        const memoryUsage = memory
          ? Math.round(memory.usedJSHeapSize / 1048576)
          : 0;

        setMetrics(prev => ({
          ...prev,
          fps,
          memoryUsage,
        }));

        frameCount.current = 0;
        lastTime.current = now;
      }

      animationId = requestAnimationFrame(updateMetrics);
    };

    animationId = requestAnimationFrame(updateMetrics);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const startRenderMeasure = () => {
    renderStart.current = performance.now();
  };

  const endRenderMeasure = () => {
    const renderTime = performance.now() - renderStart.current;
    setMetrics(prev => ({
      ...prev,
      renderTime: Math.round(renderTime * 100) / 100,
    }));
  };

  return { metrics, startRenderMeasure, endRenderMeasure };
};
