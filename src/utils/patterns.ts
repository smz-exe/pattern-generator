import type {
  PatternElement,
  PatternType,
  PatternCalculationParams,
} from '../types';
import { GRID_SIZE, ANIMATION_SPEED } from './constants';

// Pre-computed grid positions for performance
const GRID_POSITIONS = Array.from({ length: GRID_SIZE }, (_, i) =>
  Array.from({ length: GRID_SIZE }, (_, j) => ({
    x: (i / (GRID_SIZE - 1)) * 2 - 1,
    y: (j / (GRID_SIZE - 1)) * 2 - 1,
    index: i * GRID_SIZE + j,
  }))
).flat();

// Distance cache for mouse influence calculations
const distanceCache = new Map<string, number>();
const getDistance = (x: number, y: number): number => {
  const key = `${x.toFixed(3)},${y.toFixed(3)}`;
  if (!distanceCache.has(key)) {
    distanceCache.set(key, Math.sqrt(x * x + y * y));
  }
  return distanceCache.get(key)!;
};

// Math function cache for performance
const mathCache = {
  sin: new Map<number, number>(),
  cos: new Map<number, number>(),
  atan2: new Map<string, number>(),
  exp: new Map<number, number>(),
};

const cachedSin = (x: number): number => {
  const rounded = Math.round(x * 1000) / 1000;
  if (!mathCache.sin.has(rounded)) {
    mathCache.sin.set(rounded, Math.sin(rounded));
  }
  return mathCache.sin.get(rounded)!;
};

const cachedCos = (x: number): number => {
  const rounded = Math.round(x * 1000) / 1000;
  if (!mathCache.cos.has(rounded)) {
    mathCache.cos.set(rounded, Math.cos(rounded));
  }
  return mathCache.cos.get(rounded)!;
};

const cachedAtan2 = (y: number, x: number): number => {
  const key = `${y.toFixed(3)},${x.toFixed(3)}`;
  if (!mathCache.atan2.has(key)) {
    mathCache.atan2.set(key, Math.atan2(y, x));
  }
  return mathCache.atan2.get(key)!;
};

const cachedExp = (x: number): number => {
  const rounded = Math.round(x * 100) / 100;
  if (!mathCache.exp.has(rounded)) {
    mathCache.exp.set(rounded, Math.exp(rounded));
  }
  return mathCache.exp.get(rounded)!;
};

const calculateEquilibrium = (x: number, y: number, t: number) => {
  const dist = getDistance(x, y);
  const height =
    cachedSin(x * 2.5 + t * 0.8) *
    cachedCos(y * 2.5 + t * 0.6) *
    cachedSin(dist * 3 - t * 1.2);
  const rotation = t * 15 + height * 60;
  const scale = 0.6 + Math.abs(height) * 0.8;
  const opacity = 0.3 + Math.abs(height) * 0.6;

  return { height, rotation, scale, opacity };
};

const calculateResonance = (x: number, y: number, t: number) => {
  const angle = cachedAtan2(y, x);
  const dist = getDistance(x, y);
  const height =
    cachedSin(angle * 4 + dist * 6 - t * 2) *
    cachedCos(dist * 3 + t * 1.5) *
    cachedExp(-dist * 0.3);
  const rotation = angle * 57.3 + t * 25;
  const scale = 0.5 + Math.abs(height) * 1.2;
  const opacity = 0.2 + Math.abs(height) * 0.7;

  return { height, rotation, scale, opacity };
};

const calculateMetamorphosis = (x: number, y: number, t: number) => {
  const wave1 = cachedSin(x * 3 + t * 1.2);
  const wave2 = cachedCos(y * 4 - t * 0.9);
  const wave3 = cachedSin((x + y) * 2 + t * 1.6);
  const height = (wave1 + wave2 * 0.7 + wave3 * 0.5) / 2.2;
  const rotation = height * 90 + t * 20;
  const scale = 0.4 + Math.abs(height) * 1.1;
  const opacity = 0.25 + Math.abs(height) * 0.65;

  return { height, rotation, scale, opacity };
};

const calculateSynthesis = (x: number, y: number, t: number) => {
  const noise1 = cachedSin(x * 4 + t * 0.7) * cachedCos(y * 3 - t * 0.5);
  const noise2 = cachedSin(y * 5 + t * 1.1) * cachedCos(x * 2 + t * 0.8);
  const chaos = cachedSin(t * 0.3) * 0.4;
  const height = (noise1 + noise2 * 0.8 + chaos) / 1.8;
  const rotation = t * 35 + (x + y) * 30;
  const scale = 0.3 + Math.abs(height) * 1.3;
  const opacity = 0.2 + Math.abs(height) * 0.75;

  return { height, rotation, scale, opacity };
};

const applyMouseInfluence = (
  baseValues: {
    height: number;
    rotation: number;
    scale: number;
    opacity: number;
  },
  mouseInfluence: number,
  t: number
) => {
  return {
    height: baseValues.height + mouseInfluence * cachedSin(t * 3) * 0.8,
    rotation: baseValues.rotation + mouseInfluence * 80,
    scale: baseValues.scale + mouseInfluence * 0.4,
    opacity: Math.min(0.9, baseValues.opacity + mouseInfluence * 0.3),
  };
};

export const generatePatternElements = (
  frame: number,
  patternType: PatternType,
  params: PatternCalculationParams
): PatternElement[] => {
  const t = frame * ANIMATION_SPEED;
  const elements: PatternElement[] = [];
  const mouseX = params.mousePos.x * 2 - 1;
  const mouseY = params.mousePos.y * 2 - 1;
  const hoverMultiplier = params.isHovering ? 2 : 0.5;

  // Use pre-computed positions for better performance
  for (const pos of GRID_POSITIONS) {
    const { x, y } = pos;

    // Optimized mouse influence calculation
    const dx = x - mouseX;
    const dy = y - mouseY;
    const mouseDist = getDistance(dx, dy);
    const mouseInfluence = cachedExp(-mouseDist * 2) * hoverMultiplier;

    // Calculate base pattern values
    let baseValues;
    switch (patternType) {
      case 0:
        baseValues = calculateEquilibrium(x, y, t);
        break;
      case 1:
        baseValues = calculateResonance(x, y, t);
        break;
      case 2:
        baseValues = calculateMetamorphosis(x, y, t);
        break;
      case 3:
        baseValues = calculateSynthesis(x, y, t);
        break;
      default:
        baseValues = calculateEquilibrium(x, y, t);
    }

    // Apply mouse influence
    const finalValues = applyMouseInfluence(baseValues, mouseInfluence, t);

    elements.push({
      x: x * 180,
      y: y * 180,
      height: finalValues.height * 40 * params.intensity,
      rotation: finalValues.rotation,
      scale: finalValues.scale * params.intensity,
      opacity: finalValues.opacity,
    });
  }

  return elements;
};
