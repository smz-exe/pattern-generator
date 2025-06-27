import type {
  PatternElement,
  PatternType,
  PatternCalculationParams,
} from '../types';
import { GRID_SIZE, ANIMATION_SPEED } from './constants';

const calculateEquilibrium = (x: number, y: number, t: number) => {
  const height =
    Math.sin(x * 2.5 + t * 0.8) *
    Math.cos(y * 2.5 + t * 0.6) *
    Math.sin(Math.sqrt(x * x + y * y) * 3 - t * 1.2);
  const rotation = t * 15 + height * 60;
  const scale = 0.6 + Math.abs(height) * 0.8;
  const opacity = 0.3 + Math.abs(height) * 0.6;

  return { height, rotation, scale, opacity };
};

const calculateResonance = (x: number, y: number, t: number) => {
  const angle = Math.atan2(y, x);
  const dist = Math.sqrt(x * x + y * y);
  const height =
    Math.sin(angle * 4 + dist * 6 - t * 2) *
    Math.cos(dist * 3 + t * 1.5) *
    Math.exp(-dist * 0.3);
  const rotation = angle * 57.3 + t * 25;
  const scale = 0.5 + Math.abs(height) * 1.2;
  const opacity = 0.2 + Math.abs(height) * 0.7;

  return { height, rotation, scale, opacity };
};

const calculateMetamorphosis = (x: number, y: number, t: number) => {
  const wave1 = Math.sin(x * 3 + t * 1.2);
  const wave2 = Math.cos(y * 4 - t * 0.9);
  const wave3 = Math.sin((x + y) * 2 + t * 1.6);
  const height = (wave1 + wave2 * 0.7 + wave3 * 0.5) / 2.2;
  const rotation = height * 90 + t * 20;
  const scale = 0.4 + Math.abs(height) * 1.1;
  const opacity = 0.25 + Math.abs(height) * 0.65;

  return { height, rotation, scale, opacity };
};

const calculateSynthesis = (x: number, y: number, t: number) => {
  const noise1 = Math.sin(x * 4 + t * 0.7) * Math.cos(y * 3 - t * 0.5);
  const noise2 = Math.sin(y * 5 + t * 1.1) * Math.cos(x * 2 + t * 0.8);
  const chaos = Math.sin(t * 0.3) * 0.4;
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
    height: baseValues.height + mouseInfluence * Math.sin(t * 3) * 0.8,
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

  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      const x = (i / (GRID_SIZE - 1)) * 2 - 1;
      const y = (j / (GRID_SIZE - 1)) * 2 - 1;

      // Calculate mouse influence
      const dx = x - (params.mousePos.x * 2 - 1);
      const dy = y - (params.mousePos.y * 2 - 1);
      const mouseDist = Math.sqrt(dx * dx + dy * dy);
      const mouseInfluence =
        Math.exp(-mouseDist * 2) * (params.isHovering ? 2 : 0.5);

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
  }

  return elements;
};
