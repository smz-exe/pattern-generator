import { useRef, useCallback } from 'react';

// Function overloads for common use cases
export function useThrottle<T>(
  fn: (value: T) => void,
  delay: number
): (value: T) => void;

export function useThrottle<T, U>(
  fn: (arg1: T, arg2: U) => void,
  delay: number
): (arg1: T, arg2: U) => void;

export function useThrottle<T, U, V>(
  fn: (arg1: T, arg2: U, arg3: V) => void,
  delay: number
): (arg1: T, arg2: U, arg3: V) => void;

// Generic fallback with constrained parameters
export function useThrottle<TFunc extends (...args: never[]) => void>(
  fn: TFunc,
  delay: number
): TFunc;

// Implementation
export function useThrottle<TFunc extends (...args: never[]) => void>(
  fn: TFunc,
  delay: number
): TFunc {
  const lastRun = useRef(Date.now());

  return useCallback(
    ((...args: Parameters<TFunc>) => {
      if (Date.now() - lastRun.current >= delay) {
        fn(...args);
        lastRun.current = Date.now();
      }
    }) as TFunc,
    [fn, delay]
  );
}
