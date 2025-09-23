# GitHub Pages Setup Guide

This Genesis Aircraft Parts website is now fully configured for GitHub Pages deployment.

## What's Been Configured

✅ **Static Export**: Next.js configured to generate static files  
✅ **GitHub Actions**: Automatic deployment workflow  
✅ **Asset Optimization**: Images and assets properly handled  
✅ **Path Configuration**: Correct paths for GitHub Pages subdirectory  
✅ **Jekyll Bypass**: .nojekyll file to prevent Jekyll processing  

## Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### 3. Access Your Site
Your site will be available at:
```
https://yourusername.github.io/Genesis
```

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the static site
npm run build

# The output will be in the 'out' directory
# Upload the contents of 'out' to your GitHub Pages repository
```

## Features That Work on GitHub Pages

- ✅ Static site generation
- ✅ Image optimization (unoptimized for compatibility)
- ✅ CSS and JavaScript bundling
- ✅ Responsive design
- ✅ Navigation functionality
- ✅ All animations and interactions

## Notes

- The site is now completely static - no server required
- All images are unoptimized for GitHub Pages compatibility
- The basePath is configured for the `/Genesis` subdirectory
- Automatic deployment happens on every push to main branch

## Troubleshooting

If the site doesn't load properly:
1. Check that GitHub Pages is enabled in repository settings
2. Ensure the workflow completed successfully in Actions tab
3. Verify the site URL matches your repository name
4. Wait a few minutes for DNS propagation
