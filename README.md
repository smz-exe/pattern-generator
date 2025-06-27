# Pattern Studio - Generative Art Laboratory

An interactive 3D generative art application built with React, TypeScript, and Vite.

## 🎨 Features

- **Interactive 3D Visualization**: Real-time 3D pattern generation with mouse interaction
- **4 Unique Patterns**:
  - **Equilibrium** - Balance in Motion
  - **Resonance** - Harmonic Convergence  
  - **Metamorphosis** - Endless Transformation
  - **Synthesis** - Unity from Chaos
- **Intensity Control**: Adjustable amplitude for pattern effects
- **Responsive Design**: Clean, modern interface with glassmorphism effects
- **Performance Optimized**: 60fps animations with efficient rendering

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **CSS Modules** - Scoped styling
- **ESLint** - Code quality and consistency

## 🚀 Getting Started

### Development

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```text
src/
├── components/          # React components
│   ├── Header/         # Top navigation with controls
│   ├── Sidebar/        # Pattern selection panel
│   ├── Layout/         # Main layout wrapper
│   └── PatternVisualization/  # 3D visualization
├── hooks/              # Custom React hooks
│   ├── useAnimation.ts # Animation frame management
│   └── useMousePosition.ts # Mouse interaction
├── utils/              # Utilities and logic
│   ├── patterns.ts     # Pattern generation algorithms
│   └── constants.ts    # App constants
├── types/              # TypeScript type definitions
└── App.tsx            # Main application component
```

## 🎯 Usage

1. **Pattern Selection**: Choose from 4 different generative patterns in the sidebar
2. **Mouse Interaction**: Move your cursor over the visualization to influence the pattern
3. **Intensity Control**: Use the slider in the header to adjust pattern amplitude
4. **Real-time Animation**: Watch as patterns evolve and respond to your input

## 🌐 Deployment

The application is optimized for deployment on platforms like:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**

Simply connect your repository and deploy the `dist` folder after building.

## 📄 License

This project is open source and available under the MIT License.
