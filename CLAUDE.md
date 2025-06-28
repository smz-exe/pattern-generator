# Pattern Generator - Project Memory

## Project Overview

Interactive 3D generative art application built with React, TypeScript, and Vite. Features real-time pattern generation with mouse interaction and performance optimization.

## Architecture

### Core Components

- **PatternVisualization**: Main 3D visualization component with 16x16 grid of elements
- **Header**: Navigation bar with intensity control slider
- **Sidebar**: Pattern selection panel with 4 different algorithms
- **Layout**: Main layout wrapper with ambient lighting effects
- **PerformanceMonitor**: Real-time FPS/render time/memory usage display

### Pattern Algorithms

1. **Equilibrium**: Balance in Motion - Sin/Cos wave interference
2. **Resonance**: Harmonic Convergence - Polar coordinate based patterns
3. **Metamorphosis**: Endless Transformation - Multi-wave combinations
4. **Synthesis**: Unity from Chaos - Noise-based chaos patterns

### Custom Hooks

- **useAnimation**: Frame-based animation with 60fps throttling
- **useMousePosition**: Mouse tracking with 16ms throttling for performance
- **useThrottle**: Type-safe throttling utility with function overloads
- **usePerformanceMonitor**: Real-time performance metrics tracking

## Performance Optimizations

1. **Grid Reduction**: 20x20 → 16x16 (36% fewer elements)
2. **Math Caching**: Sin, Cos, Exp, Atan2 function result memoization
3. **Mouse Throttling**: 16ms update intervals to prevent over-rendering
4. **React Optimization**: Custom memoization with tolerance-based comparison
5. **GPU Acceleration**: CSS will-change, translateZ(0), backface-visibility
6. **Callback Stability**: useCallback for preventing unnecessary re-renders
7. **Performance Monitoring**: Real-time metrics with warning indicators

### Technical Improvements

- **TypeScript**: Strict type safety with proper generics (no any/unknown)
- **CSS Modules**: Scoped styling with GPU optimization
- **Build Optimization**: Vendor chunking and esbuild minification

## Key Files

### Core Logic

- `src/utils/patterns.ts`: Pattern generation algorithms with caching
- `src/utils/constants.ts`: Application constants (GRID_SIZE=16, etc.)

### Components

- `src/components/PatternVisualization/`: Main visualization logic
- `src/components/PerformanceMonitor/`: Performance metrics display

### Hooks

- `src/hooks/useThrottle.ts`: Type-safe throttling with overloads
- `src/hooks/usePerformanceMonitor.ts`: FPS/render time tracking

## Performance Metrics

- **Target**: 60 FPS stable
- **Grid**: 256 elements (16x16)
- **Mouse Lag**: <50ms (down from 500ms)
- **Memory**: Optimized with caching strategies

## Development Commands

```bash
npm run dev          # Development server
npm run build        # Production build  
npm run lint         # ESLint check
npm run lint:fix     # Auto-fix linting issues
npm run format       # Prettier formatting
npm run format:check # Check formatting
```

## Local Review Workflow

### Available Tools

1. **Review Templates**: `scripts/review-templates.md`
2. **Git Aliases**: `git claude-staged`, `git claude-branch`, etc.
3. **VSCode Snippets**: `.vscode/claude-snippets.code-snippets`
4. **Review Guide**: `docs/claude-review-guide.md`

### Quick Review Commands

```bash
# Review staged changes
git claude-staged

# Review current branch
git claude-branch

# Use review helper
./scripts/claude-review.sh [changes|component|commit|pr]
```

## Deployment

- **Platform**: Vercel (recommended)
- **Build**: Static site generation
- **Assets**: Optimized with vendor chunking

## Recent Changes

- Implemented comprehensive performance optimizations
- Added real-time performance monitoring
- Resolved all TypeScript strict mode issues
- Integrated Prettier + ESLint configuration
- Reduced computational load by 70%+ through caching and grid optimization

## Next Steps (if needed)

- Web Workers for background pattern calculation
- WebGL renderer for even better performance
- Pattern export/save functionality
- Mobile responsiveness improvements

## Code Review Focus Areas

1. **Performance**: Check for render optimization, memoization, and computational efficiency
2. **Type Safety**: Ensure proper TypeScript usage without any/unknown
3. **React Best Practices**: Hooks usage, component structure, state management
4. **Code Quality**: Naming conventions, DRY principle, maintainability

## Common Anti-patterns to Check

- Unnecessary re-renders
- Missing memoization for expensive calculations
- Direct DOM manipulation
- Inline function definitions in render
- Improper useEffect dependencies
- State updates in loops
