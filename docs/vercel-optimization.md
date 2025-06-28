# Vercel Optimization Guide

## 🚀 Initial Setup

### 1. Install Vercel CLI

```bash
npm install -g vercel
chmod +x scripts/vercel-setup.sh
./scripts/vercel-setup.sh
```

### 2. Link Project

```bash
vercel link
```

### 3. Configure Environment Variables

```bash
# Copy example file
cp .env.example .env.local

# Add variables to Vercel
vercel env add VITE_PERFORMANCE_MONITOR production
vercel env add VITE_ANALYTICS_ID production
```

## ⚡ Performance Optimizations

### Build Optimizations (vercel.json)

- **Framework Detection**: Automatic Vite optimization
- **Static File Caching**: 1-year cache for assets
- **Compression**: Automatic gzip/brotli compression
- **Edge Regions**: Deploy to `iad1` for optimal performance

### Security Headers

- **Content Security**: X-Content-Type-Options, X-Frame-Options
- **XSS Protection**: X-XSS-Protection header
- **Privacy**: Restrictive Permissions-Policy

### Cache Strategy

```plaintext
Static Assets (/assets/*): 1 year immutable cache
HTML Files: No cache (for SPA routing)
JavaScript/CSS: Content-type headers for optimal delivery
```

## 📊 Monitoring and Analytics

### Vercel Analytics Setup

1. **Enable in Dashboard**:
   - Go to your project in Vercel Dashboard
   - Navigate to Analytics tab
   - Enable Web Analytics (free)

2. **Add to Code** (optional):

```bash
npm install @vercel/analytics
```

### Performance Monitoring

Our built-in PerformanceMonitor component tracks:

- **FPS**: Real-time frame rate
- **Render Time**: Component render duration
- **Memory Usage**: JavaScript heap size

### Speed Insights

Enable Vercel Speed Insights:

- Real User Monitoring (RUM)
- Core Web Vitals tracking
- Performance scoring

## 🌐 Custom Domain Setup

### Add Domain

```bash
vercel domains add your-domain.com
vercel domains add www.your-domain.com
```

### DNS Configuration

Point your domain to Vercel:

```plaintext
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

## 🔄 Deployment Workflows

### Local Development

```bash
npm run dev              # Standard Vite dev server
npm run vercel:dev       # Vercel local environment
```

### Preview Deployments

```bash
npm run vercel:deploy    # Deploy to preview URL
npm run vercel:build     # Test build locally
```

### Production Deployment

```bash
npm run vercel:prod      # Deploy to production
```

### Git Integration

Automatic deployments on:

- **Production**: Push to `main` branch
- **Preview**: Pull requests and feature branches

## 🛡️ Security Best Practices

### Environment Variables

- Never commit `.env.local` files
- Use Vercel Dashboard for sensitive variables
- Prefix client-side variables with `VITE_`

### Content Security Policy

Add to `vercel.json` if needed:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline'"
        }
      ]
    }
  ]
}
```

## 📈 Performance Targets

### Core Web Vitals

- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)  
- **CLS**: < 0.1 (Cumulative Layout Shift)

### Application Metrics

- **FPS**: Stable 60fps
- **Bundle Size**: < 500KB initial load
- **Time to Interactive**: < 3s

## 🔧 Troubleshooting

### Build Issues

```bash
# Test build locally
npm run vercel:build

# Check build logs
vercel inspect [deployment-url]
```

### Performance Issues

```bash
# Analyze bundle
npm run build
npx vite-bundle-analyzer dist

# Check runtime performance
# Use built-in PerformanceMonitor component
```

### Environment Issues

```bash
# List environment variables
npm run vercel:env

# Test with Vercel environment
npm run vercel:dev
```

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Web Vitals](https://web.dev/vitals/)
- [React Performance](https://react.dev/learn/render-and-commit)
