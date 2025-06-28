#!/bin/bash

echo "🔧 Setting up Git hooks for code quality..."

# Create hooks directory if it doesn't exist
mkdir -p .git/hooks

# Create pre-commit hook
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash

echo "🔍 Running pre-commit checks..."

# Function to run command safely
run_if_files_exist() {
  local pattern="$1"
  local command="$2"
  local description="$3"
  
  FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E "$pattern" || true)
  
  if [ -z "$FILES" ]; then
    echo "ℹ️  No $description files to check"
    return 0
  fi
  
  echo "📝 $description files to check:"
  echo "$FILES"
  
  if ! eval "$command"; then
    return 1
  fi
  
  return 0
}

# Check if there are any staged files at all
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM)

if [ -z "$STAGED_FILES" ]; then
  echo "✅ No staged files to check"
  exit 0
fi

# Run ESLint on staged JavaScript/TypeScript files
echo ""
echo "🔍 Running ESLint..."
if ! run_if_files_exist '\.(js|jsx|ts|tsx)$' 'npm run lint:staged' 'JavaScript/TypeScript'; then
  echo "❌ ESLint failed. Please fix the issues before committing."
  echo "💡 You can run 'npm run lint:fix' to auto-fix some issues."
  exit 1
fi

# Run Prettier check on staged files
echo ""
echo "🎨 Checking code formatting..."
if ! run_if_files_exist '\.(js|jsx|ts|tsx|css|json)$' 'npm run format:check:staged' 'formattable'; then
  echo "❌ Code formatting issues found."
  echo "💡 Running auto-format..."
  
  # Format the files
  FORMAT_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(js|jsx|ts|tsx|css|json)$' || true)
  if [ ! -z "$FORMAT_FILES" ]; then
    npm run format:staged
    # Re-stage the formatted files
    echo "$FORMAT_FILES" | xargs git add
  fi
  
  echo "✅ Code has been auto-formatted and re-staged."
  echo "📝 Please review the changes and commit again."
  exit 1
fi

# Run TypeScript check
echo ""
echo "🔧 Running TypeScript check..."
if ! npm run type-check; then
  echo "❌ TypeScript errors found. Please fix them before committing."
  exit 1
fi

echo "✅ All pre-commit checks passed!"
EOF

# Create pre-push hook
cat > .git/hooks/pre-push << 'EOF'
#!/bin/bash

echo "🚀 Running pre-push checks..."

# Check if build passes
echo "🏗️  Testing production build..."
if ! npm run build; then
  echo "❌ Build failed. Please fix the issues before pushing."
  exit 1
fi

# Run all tests if they exist
if npm run test --silent > /dev/null 2>&1; then
  echo "🧪 Running tests..."
  if ! npm run test; then
    echo "❌ Tests failed. Please fix them before pushing."
    exit 1
  fi
fi

# Check for console.log statements in production code
echo "🔍 Checking for console.log statements..."
if git diff --cached --name-only | grep -E '\.(js|jsx|ts|tsx)$' | xargs grep -l "console\.log" 2>/dev/null; then
  echo "⚠️  Warning: console.log statements found in staged files."
  echo "Consider removing them for production."
  # Don't exit here, just warn
fi

# Check bundle size
echo "📦 Checking bundle size..."
BUNDLE_SIZE=$(du -sh dist/ 2>/dev/null | cut -f1)
if [ ! -z "$BUNDLE_SIZE" ]; then
  echo "📊 Current bundle size: $BUNDLE_SIZE"
fi

echo "✅ All pre-push checks passed!"
EOF

# Make hooks executable
chmod +x .git/hooks/pre-commit
chmod +x .git/hooks/pre-push

echo "✅ Git hooks created successfully!"
echo ""
echo "📋 Created hooks:"
echo "  - pre-commit: ESLint + Prettier + TypeScript check"
echo "  - pre-push: Build test + optional tests"
echo ""
echo "💡 To bypass hooks (emergency only):"
echo "  - git commit --no-verify"
echo "  - git push --no-verify"