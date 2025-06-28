# Claude Code Review Templates

## 🔍 Comprehensive Code Review

```plaintext
Please perform a comprehensive code review of [file/directory] focusing on:
1. Code quality and maintainability
2. Performance optimizations
3. Type safety and error handling
4. React best practices
5. Potential bugs or edge cases
Provide specific suggestions with code examples where applicable.
```

## ⚡ Performance Review

```plaintext
Analyze [component/function] for performance issues:
1. Identify unnecessary re-renders
2. Check for missing memoization
3. Find expensive calculations that could be optimized
4. Suggest React.memo, useMemo, or useCallback where appropriate
5. Review bundle size impact
Include before/after comparisons where possible.
```

## 🛡️ Security Review

```plaintext
Review the codebase for security vulnerabilities:
1. Check for XSS vulnerabilities
2. Validate input sanitization
3. Review dependency security
4. Check for exposed sensitive data
5. Verify secure coding practices
Rate each finding by severity (High/Medium/Low).
```

## 🏗️ Architecture Review

```plaintext
Evaluate the current architecture of [module/feature]:
1. Assess component composition and hierarchy
2. Review state management approach
3. Evaluate separation of concerns
4. Check for code duplication
5. Suggest architectural improvements
Provide a pros/cons analysis for any suggested changes.
```

## 🧪 Testability Review

```plaintext
Review [component/module] for testability:
1. Identify hard-to-test code
2. Suggest refactoring for better testability
3. Recommend test strategies
4. Point out missing test cases
5. Evaluate current test coverage
Provide example test cases for complex logic.
```

## 📝 Documentation Review

```plaintext
Review code documentation and comments:
1. Check for missing JSDoc comments
2. Verify prop types documentation
3. Ensure complex logic is explained
4. Review README completeness
5. Suggest documentation improvements
Focus on developer experience and onboarding.
```

## 🔄 Refactoring Suggestions

```plaintext
Analyze [file/directory] for refactoring opportunities:
1. Identify code smells
2. Suggest design pattern applications
3. Recommend function/component extraction
4. Find opportunities for reusability
5. Propose naming improvements
Prioritize changes by impact and effort.
```

## 🎯 Feature-Specific Review

```plaintext
Review the implementation of [feature name]:
1. Verify requirements are met
2. Check edge case handling
3. Assess user experience
4. Review error states and loading states
5. Validate accessibility
Compare implementation against best practices.
```

## 💬 Commit Message Generation

```plaintext
Based on these changes: [git diff output]
Generate a commit message that:
1. Follows conventional commits format
2. Clearly explains the why, not just the what
3. References any related issues
4. Is concise but descriptive
5. Includes emoji if appropriate for the project
```

## 🚀 Pre-Deployment Checklist

```plaintext
Perform a pre-deployment review:
1. Check build output for warnings
2. Verify environment variables
3. Review bundle size changes
4. Check for console.log statements
5. Validate error handling
6. Ensure feature flags are correct
Flag any blockers with HIGH priority.
```
