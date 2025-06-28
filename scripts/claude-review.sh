#!/bin/bash

# Claude Code Local Review Helper Script

echo "🔍 Claude Code Review Helper"
echo "=========================="

# Function to review specific changes
review_changes() {
    echo "📝 Reviewing recent changes..."
    echo "Command: git diff HEAD~1 --name-only"
    git diff HEAD~1 --name-only
    echo ""
    echo "💡 Tip: Ask Claude to review with:"
    echo "  'Review the recent changes in these files for performance, type safety, and best practices'"
}

# Function to review specific component
review_component() {
    echo "🧩 Component Review Setup"
    echo "Example commands:"
    echo "  - Review component structure: 'Review src/components/PatternVisualization for optimization opportunities'"
    echo "  - Check hooks usage: 'Analyze custom hooks in src/hooks for potential improvements'"
    echo "  - Performance review: 'Check for unnecessary re-renders in src/components'"
}

# Function to review before commit
pre_commit_review() {
    echo "✅ Pre-commit Review Checklist"
    echo "  1. git status - Check what's being committed"
    echo "  2. Ask Claude: 'Review staged changes for potential issues'"
    echo "  3. Run: npm run lint && npm run build"
    echo "  4. Ask Claude: 'Generate a commit message for these changes'"
}

# Function to review PR locally
local_pr_review() {
    echo "🔄 Local PR Review Process"
    echo "  1. git fetch origin pull/$1/head:pr-$1"
    echo "  2. git checkout pr-$1"
    echo "  3. Ask Claude: 'Perform a comprehensive PR review'"
    echo "  4. Focus areas: breaking changes, performance, security"
}

# Main menu
case "$1" in
    changes)
        review_changes
        ;;
    component)
        review_component
        ;;
    commit)
        pre_commit_review
        ;;
    pr)
        if [ -z "$2" ]; then
            echo "Usage: ./claude-review.sh pr <PR_NUMBER>"
        else
            local_pr_review $2
        fi
        ;;
    *)
        echo "Usage: ./claude-review.sh [changes|component|commit|pr]"
        echo ""
        echo "Options:"
        echo "  changes   - Review recent changes"
        echo "  component - Component-specific review tips"
        echo "  commit    - Pre-commit review checklist"
        echo "  pr <num>  - Local PR review process"
        ;;
esac