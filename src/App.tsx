import { useState } from 'react';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { PatternVisualization } from './components/PatternVisualization';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import type { PatternType } from './types';
import { PATTERNS, DEFAULT_INTENSITY } from './utils/constants';
import styles from './App.module.css';

function App() {
  const [patternType, setPatternType] = useState<PatternType>(0);
  const [intensity, setIntensity] = useState(DEFAULT_INTENSITY);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const currentPattern = PATTERNS[patternType];

  return (
    <Layout>
      <Header
        currentPattern={currentPattern}
        intensity={intensity}
        onIntensityChange={setIntensity}
      />

      <div className={styles.content}>
        <Sidebar
          patterns={PATTERNS}
          currentPattern={currentPattern}
          currentPatternIndex={patternType}
          onPatternSelect={setPatternType}
        />

        <PatternVisualization
          currentPattern={currentPattern}
          patternType={patternType}
          intensity={intensity}
          mousePos={mousePos}
          onMousePosChange={setMousePos}
        />
      </div>

      <div
        className={styles.ambientOverlay}
        style={{
          background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%,
                       rgba(255,255,255,0.03) 0%, transparent 60%)`,
        }}
      />

      <PerformanceMonitor />
      <SpeedInsights />
      <Analytics />
    </Layout>
  );
}

export default App;
