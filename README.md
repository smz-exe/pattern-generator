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

## 📋 Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build  
npm run lint         # ESLint check
npm run lint:fix     # Auto-fix linting issues
npm run format       # Prettier formatting
npm run format:check # Check formatting

# Vercel Commands
npm run vercel:dev   # Local Vercel environment
npm run vercel:build # Test Vercel build
npm run vercel:deploy # Deploy to preview
npm run vercel:prod  # Deploy to production
```

## 🌐 Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment:

1. **Quick Setup**:

   ```bash
   npm install -g vercel
   ./scripts/vercel-setup.sh
   vercel link
   ```

2. **Environment Variables**:

   ```bash
   cp .env.example .env.local
   vercel env add VITE_ANALYTICS_ID production
   ```

3. **Deploy**:

   ```bash
   npm run vercel:prod
   ```

See [docs/vercel-optimization.md](docs/vercel-optimization.md) for detailed configuration.

### Other Platforms

- **Netlify**: Works out of the box
- **GitHub Pages**: Static site deployment
- **Any Static Host**: Build to `dist` folder

## 🎯 Usage

1. **Pattern Selection**: Choose from 4 different generative patterns in the sidebar
2. **Mouse Interaction**: Move your cursor over the visualization to influence the pattern
3. **Intensity Control**: Use the slider in the header to adjust pattern amplitude
4. **Real-time Animation**: Watch as patterns evolve and respond to your input

## 📊 Performance

- **Target**: 60 FPS stable
- **Grid**: 256 elements (16x16)
- **Mouse Lag**: <50ms
- **Bundle Size**: <500KB initial load

Performance metrics are displayed in real-time in the top-right corner.

## 🔧 Development Tools

### Claude Code Integration

This project includes tools for efficient code reviews:

- **Review Templates**: `scripts/review-templates.md`
- **Git Aliases**: Custom commands for Claude workflows
- **Project Guidelines**: `CLAUDE.md` for consistent reviews

### Review Workflow

```bash
git claude-staged    # Review staged changes
git claude-branch    # Review entire branch
./scripts/claude-review.sh # Interactive review helper
```

## 📁 Project Structure

```plaintext
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

## 📄 License

MIT © [Yuki Shimizu](https://github.com/smz-exe)

This project is open source and available under the MIT License.
