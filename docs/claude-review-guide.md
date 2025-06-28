# Claude Code Local Review Optimization Guide

## 🚀 Efficiency Techniques

### 1. **Context-Aware Reviews**
```bash
# Provide full context with CLAUDE.md
cat CLAUDE.md && echo "Review src/components/PatternVisualization for alignment with project guidelines"
```

### 2. **Diff-Based Reviews**
```bash
# Review only changes since last commit
git diff HEAD~1 | head -1000 && echo "Review these changes for performance and type safety"

# Review staged changes before commit
git diff --staged | head -1000 && echo "Pre-commit review for potential issues"
```

### 3. **Focused Performance Reviews**
```bash
# Find performance bottlenecks
echo "Analyze src/utils/patterns.ts for computational bottlenecks and suggest optimizations using memoization or web workers"
```

### 4. **Bundle Size Analysis**
```bash
# Check bundle impact
npm run build && echo "Analyze the build output and suggest bundle size optimizations"
```

## 📊 Review Workflows

### **Daily Development Workflow**
1. **Morning Setup**
   ```
   Review today's tasks in TODO.md and suggest implementation approach
   ```

2. **Pre-Implementation**
   ```
   I'm about to implement [feature]. Review my approach and suggest best practices
   ```

3. **Post-Implementation**
   ```
   Review my implementation of [feature] in [files] for correctness and optimization
   ```

4. **End of Day**
   ```
   Review today's changes and generate a summary of work completed
   ```

### **PR Review Workflow (Local)**
1. **Checkout PR Branch**
   ```bash
   git fetch origin pull/123/head:pr-123
   git checkout pr-123
   ```

2. **Comprehensive Review**
   ```
   Perform a PR review of all changes in this branch compared to main:
   - Breaking changes
   - Performance impact
   - Type safety
   - Test coverage
   ```

3. **Generate Review Comments**
   ```
   Generate GitHub PR review comments for the changes in this branch
   ```

## 🎯 Specialized Reviews

### **React Component Optimization**
```
Review [component] for:
1. Prop drilling issues
2. State lifting opportunities
3. Custom hook extraction
4. Render optimization with memo/useMemo/useCallback
5. Accessibility compliance
```

### **TypeScript Migration**
```
Help migrate [file] to strict TypeScript:
1. Replace all any types
2. Add proper generics
3. Implement discriminated unions where appropriate
4. Add JSDoc comments for complex types
```

### **Performance Profiling**
```
Based on these Performance Monitor metrics [paste metrics]:
1. Identify the bottleneck
2. Suggest specific optimizations
3. Estimate performance improvement
```

## 💡 Pro Tips

### **1. Batch Reviews**
Instead of reviewing file by file, batch related files:
```
Review all hooks in src/hooks for consistency and optimization opportunities
```

### **2. Pattern Recognition**
```
Identify repeated patterns in the codebase that could be abstracted into utilities or custom hooks
```

### **3. Progressive Enhancement**
```
Review [feature] and suggest how to implement it progressively:
1. MVP version
2. Enhanced version
3. Optimized version
```

### **4. Cross-Cutting Concerns**
```
Review the codebase for cross-cutting concerns:
- Error handling consistency
- Loading state management
- Data fetching patterns
- Caching strategies
```

## 📈 Metrics-Driven Reviews

### **Performance Metrics Review**
```
Current metrics: [FPS/Render time/Memory]
Target metrics: 60 FPS, <16ms render, <50MB memory
Review and suggest optimizations to meet targets
```

### **Code Quality Metrics**
```
Review code quality metrics:
- Cyclomatic complexity
- Duplication
- Test coverage
- Type coverage
Suggest improvements for metrics below threshold
```

## 🔄 Continuous Improvement

### **Weekly Architecture Review**
```
Review the overall architecture for:
1. Technical debt accumulation
2. Scaling concerns
3. Maintainability issues
4. Modernization opportunities
```

### **Monthly Dependencies Review**
```
Review package.json for:
1. Outdated dependencies
2. Security vulnerabilities
3. Bundle size impact
4. Alternative lighter packages
```

## 🎨 Code Style Enforcement

### **Style Consistency Review**
```
Review codebase for style inconsistencies not caught by linters:
1. Naming conventions
2. File organization
3. Import ordering
4. Comment style
```

### **Best Practices Audit**
```
Audit against React/TypeScript best practices:
1. Hook rules violations
2. Effect cleanup
3. Error boundaries usage
4. Suspense implementation
```