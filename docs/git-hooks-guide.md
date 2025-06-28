# Git Hooks Guide - Code Quality Automation

## 🎯 Overview

This project uses Git hooks to automatically ensure code quality before commits and pushes. The hooks are designed to catch issues early and maintain consistent code standards.

## 🔧 Setup

### Automatic Setup
```bash
npm run hooks:setup
```

### Manual Setup
```bash
chmod +x scripts/setup-git-hooks.sh
./scripts/setup-git-hooks.sh
```

## 📋 Hook Details

### Pre-commit Hook
Runs automatically before each commit:

1. **ESLint Check** 📝
   - Scans staged JavaScript/TypeScript files
   - Enforces coding standards and catches potential bugs
   - Fails commit if errors found

2. **Prettier Format** 🎨
   - Checks code formatting on staged files
   - Auto-formats code if issues found
   - Re-stages formatted files

3. **TypeScript Check** 🔧
   - Validates TypeScript compilation
   - Catches type errors before commit
   - Ensures type safety

### Pre-push Hook
Runs automatically before each push:

1. **Build Test** 🏗️
   - Tests production build process
   - Ensures code can be deployed
   - Catches build-time errors

2. **Bundle Analysis** 📦
   - Reports current bundle size
   - Monitors performance impact

3. **Console.log Detection** 🔍
   - Warns about console.log statements
   - Helps keep production code clean

## 🚀 Available Scripts

### Hook Management
```bash
npm run hooks:setup     # Install Git hooks
npm run hooks:remove    # Remove Git hooks
```

### Manual Quality Checks
```bash
npm run pre-commit      # Run pre-commit checks manually
npm run pre-push        # Run pre-push checks manually
npm run lint:staged     # Lint only staged files
npm run format:staged   # Format only staged files
npm run type-check      # TypeScript check
```

## 💡 Usage Examples

### Normal Development Flow
```bash
# 1. Make changes
git add .

# 2. Commit (hooks run automatically)
git commit -m "feat: add new feature"

# 3. Push (hooks run automatically)  
git push origin main
```

### If Hooks Fail
```bash
# ESLint errors
npm run lint:fix        # Auto-fix issues
git add .
git commit -m "fix: resolve linting issues"

# Format issues (auto-resolved)
# Hooks will auto-format and ask you to commit again

# TypeScript errors
# Fix manually, then commit again

# Build errors
npm run build           # Debug build issues
# Fix issues, then push again
```

### Emergency Bypass (Use Sparingly!)
```bash
# Skip pre-commit hook
git commit --no-verify -m "emergency fix"

# Skip pre-push hook
git push --no-verify origin main
```

## 🎯 Benefits

### Code Quality
- ✅ Consistent formatting across the team
- ✅ Early bug detection with ESLint
- ✅ Type safety enforcement
- ✅ Build validation before deployment

### Developer Experience
- ✅ Automated formatting (no manual work)
- ✅ Immediate feedback on issues
- ✅ Prevents broken code from reaching main branch
- ✅ Reduces CI/CD failures

### Team Productivity
- ✅ Standardized code style
- ✅ Reduced code review time
- ✅ Fewer production bugs
- ✅ Improved collaboration

## 🔧 Troubleshooting

### Hook Not Running
```bash
# Check if hooks exist
ls -la .git/hooks/

# Reinstall hooks
npm run hooks:setup
```

### Permission Issues
```bash
# Make hooks executable
chmod +x .git/hooks/pre-commit
chmod +x .git/hooks/pre-push
```

### Slow Hook Performance
```bash
# Check what's taking time
time npm run pre-commit

# Skip hooks temporarily if needed
git commit --no-verify
```

### False Positives
```bash
# For specific linting rules, update .eslintrc
# For formatting, update .prettierrc
# For TypeScript, update tsconfig.json
```

## 📊 Performance Metrics

Typical hook execution times:
- **Pre-commit**: 2-5 seconds
- **Pre-push**: 5-10 seconds

The hooks are optimized to only check staged files, making them fast and efficient.

## 🔄 Customization

### Adding New Checks
Edit `.git/hooks/pre-commit` or `.git/hooks/pre-push` to add custom validation.

### Modifying Existing Checks
Update the hook scripts or npm scripts in `package.json`.

### Project-Specific Rules
Update configuration files:
- ESLint: `eslint.config.js`
- Prettier: `.prettierrc.json`
- TypeScript: `tsconfig.json`