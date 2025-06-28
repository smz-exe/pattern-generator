#!/bin/bash

echo "🔧 Setting up Git aliases for Claude Code reviews..."

# Claude review for staged changes
git config --local alias.claude-staged '!echo "Staged changes for review:" && git diff --staged --name-status && echo "" && git diff --staged'

# Claude review for recent commits
git config --local alias.claude-log '!git log --oneline -10 && echo "" && echo "Review recent commits for commit message quality and change coherence"'

# Claude review for current branch
git config --local alias.claude-branch '!echo "Branch comparison:" && git log main..HEAD --oneline && echo "" && git diff main...HEAD --stat'

# Claude pre-push review
git config --local alias.claude-prepush '!echo "Pre-push review:" && git log origin/main..HEAD --oneline && echo "" && git diff origin/main...HEAD --stat'

# Claude conflict resolution helper
git config --local alias.claude-conflicts '!git diff --name-only --diff-filter=U && echo "" && echo "Help resolve merge conflicts in the above files"'

echo "✅ Git aliases configured successfully!"
echo ""
echo "Available commands:"
echo "  git claude-staged    - Review staged changes"
echo "  git claude-log       - Review recent commits"
echo "  git claude-branch    - Review current branch vs main"
echo "  git claude-prepush   - Review before pushing"
echo "  git claude-conflicts - Help with merge conflicts"