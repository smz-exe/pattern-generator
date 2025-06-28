#!/bin/bash

echo "🚀 Vercel Setup and Optimization Guide"
echo "====================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
    echo "✅ Vercel CLI installed"
else
    echo "✅ Vercel CLI found"
fi

# Login check
echo ""
echo "🔐 Checking Vercel authentication..."
if vercel whoami &> /dev/null; then
    echo "✅ Already logged in to Vercel"
    vercel whoami
else
    echo "❌ Not logged in. Please run: vercel login"
fi

# Link project
echo ""
echo "🔗 Project linking..."
echo "Run the following commands to link your project:"
echo "  vercel link"
echo "  Select your existing project or create a new one"

# Environment variables setup
echo ""
echo "🌍 Environment Variables Setup"
echo "Add any environment variables using:"
echo "  vercel env add [KEY] [ENVIRONMENT]"
echo "  vercel env ls"

# Preview deployment
echo ""
echo "🔍 Preview Deployment"
echo "Test your deployment locally:"
echo "  vercel dev     # Local development with Vercel"
echo "  vercel build   # Test build process"
echo "  vercel deploy  # Deploy to preview URL"

# Production deployment
echo ""
echo "🚀 Production Deployment"
echo "Deploy to production:"
echo "  vercel --prod"

# Domain setup
echo ""
echo "🌐 Custom Domain Setup"
echo "Add custom domain:"
echo "  vercel domains add yourdomain.com"
echo "  vercel domains ls"

# Analytics
echo ""
echo "📊 Analytics and Monitoring"
echo "Enable Vercel Analytics in the dashboard:"
echo "  - Web Analytics (free)"
echo "  - Speed Insights"
echo "  - Audience Insights"

echo ""
echo "✨ Setup complete! Check vercel.json for optimizations."