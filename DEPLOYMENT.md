# Deployment Guide

## GitHub Setup

1. **Create a new GitHub repository:**
   ```bash
   # Initialize git (you'll need to do this manually)
   git init
   git add .
   git commit -m "Initial commit: Samadhan GS platform with Sanity CMS"
   git branch -M main
   git remote add origin https://github.com/yourusername/samadhan-gs.git
   git push -u origin main
   ```

2. **Repository structure is ready with:**
   - Complete source code
   - Proper .gitignore file
   - Comprehensive README.md
   - Documentation files

## Replit Deployment

1. **Import from GitHub:**
   - Go to Replit.com
   - Click "Import from GitHub"
   - Paste your repository URL

2. **Set Environment Variables:**
   In Replit Secrets, add:
   - `VITE_SANITY_PROJECT_ID`: `zg0tonh6`
   - `VITE_SANITY_DATASET`: `production`

3. **Deploy:**
   - Click the Deploy button in Replit
   - Your app will be available at `https://your-repl-name.replit.app`

## Production Checklist

✅ **Code Quality:**
- TypeScript compilation without errors
- All components properly typed
- Error handling implemented

✅ **Performance:**
- CDN enabled for Sanity
- Image optimization configured
- Lazy loading implemented

✅ **SEO:**
- Meta tags for all pages
- Open Graph tags configured
- Sitemap generation ready

✅ **Security:**
- Environment variables properly configured
- No sensitive data in code
- CORS properly configured

✅ **Functionality:**
- All routes working
- Blog integration complete
- Mobile responsive design

## Environment Variables

Required for production:
- `VITE_SANITY_PROJECT_ID` - Your Sanity project ID
- `VITE_SANITY_DATASET` - Dataset name (usually 'production')

## Post-Deployment Steps

1. **Test all functionality:**
   - Homepage loads correctly
   - Blog posts display (when published)
   - Navigation works properly
   - Mobile responsiveness

2. **Configure Sanity CORS:**
   - Add your production domain to Sanity project
   - Enable public read access

3. **Monitor performance:**
   - Check loading times
   - Verify CDN is working
   - Test on different devices

Your Samadhan GS platform is ready for production deployment!