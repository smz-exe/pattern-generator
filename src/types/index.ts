export interface Pattern {
  name: string;
  subtitle: string;
  color: string;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface PatternElement {
  x: number;
  y: number;
  height: number;
  rotation: number;
  scale: number;
  opacity: number;
}

export type PatternType = 0 | 1 | 2 | 3;

export interface PatternCalculationParams {
  x: number;
  y: number;
  t: number;
  mousePos: MousePosition;
  isHovering: boolean;
  intensity: number;
}
