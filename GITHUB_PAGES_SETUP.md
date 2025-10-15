# GitHub Pages Setup Guide

This Genesis Aircraft Parts website is fully configured for GitHub Pages deployment with automatic CI/CD.

## What's Been Configured

✅ **Static Export**: Next.js configured to generate static files (`output: 'export'`)  
✅ **GitHub Actions**: Automatic deployment workflow (`.github/workflows/deploy.yml`)  
✅ **Asset Optimization**: Images and assets properly handled for GitHub Pages  
✅ **Path Configuration**: Correct paths for GitHub Pages subdirectory (`/Genesis`)  
✅ **Jekyll Bypass**: `.nojekyll` file automatically created to prevent Jekyll processing  

## Automatic Deployment Steps

### 1. Commit and Push Your Changes
```bash
git add .
git commit -m "Update Genesis website"
git push origin main
```

### 2. Enable GitHub Pages (One-time Setup)
1. Go to your repository on GitHub: `https://github.com/yourusername/Genesis`
2. Click the **Settings** tab
3. Scroll to the **Pages** section in the left sidebar
4. Under **Build and deployment** → **Source**, select **GitHub Actions**
5. Save the settings

### 3. Monitor Deployment
- Go to the **Actions** tab in your repository
- Watch the "Deploy to GitHub Pages" workflow run
- Deployment typically takes 1-2 minutes

### 4. Access Your Live Site
Your site will be available at:
```
https://yourusername.github.io/Genesis
```

## Manual Build (For Testing)

To build and test the production version locally:

```bash
# Build the static site
npm run deploy

# The output will be in the 'out' directory
# You can test it by serving the 'out' folder with any static server
```

## How It Works

1. **Next.js Configuration** (`next.config.js`):
   - Exports static HTML/CSS/JS files
   - Sets `basePath` to `/Genesis` for subdirectory deployment
   - Disables image optimization for GitHub Pages compatibility

2. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
   - Triggers on every push to `main` branch
   - Installs dependencies and builds the site
   - Creates `.nojekyll` file
   - Deploys to GitHub Pages

3. **Build Script** (`package.json`):
   - `npm run deploy` builds the site and creates `.nojekyll`
   - Output goes to `out/` directory

## Features That Work on GitHub Pages

- ✅ Static site generation
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ All animations and Framer Motion effects
- ✅ Smooth scrolling and navigation
- ✅ Count-up animations
- ✅ Parallax effects
- ✅ Form interactions
- ✅ All images and assets
- ✅ Custom airplane cursor (cartoonish white plane design)

## Custom Airplane Cursor

The site features a custom airplane-shaped cursor that enhances the aviation theme:

- **Design**: Cartoonish white airplane with rounded nose, wide wings, and flattened tail
- **Default cursor**: White plane with subtle black outline for visibility
- **Interactive elements**: Cyan-outlined plane for buttons, links, and form inputs
- **Implementation**: SVG-based cursor defined in `src/app/globals.css`
- **Cross-browser**: Works on all modern browsers that support custom cursors
- **Fallback**: Gracefully falls back to default cursor if custom cursor isn't supported

## Important Notes

- The site is completely static - no server-side rendering
- All images are unoptimized (required for GitHub Pages)
- The basePath `/Genesis` is only applied in production
- Local development uses `npm run dev` without basePath
- Automatic deployment happens on every push to main branch

## Troubleshooting

**Site doesn't load after deployment:**
1. Check that GitHub Pages source is set to "GitHub Actions" in Settings
2. Verify the workflow completed successfully in the Actions tab
3. Ensure the repository name matches the basePath in `next.config.js`
4. Wait 2-3 minutes for GitHub's CDN to update
5. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Images or assets not loading:**
1. Verify all asset paths use the `getAssetPath()` utility function
2. Check that assets are in the `public/` directory
3. Ensure `basePath` and `assetPrefix` are correctly set in `next.config.js`

**Workflow fails:**
1. Check the Actions tab for error details
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility (uses Node 20 in workflow)

## Local Development vs Production

**Local Development** (`npm run dev`):
- Runs on `http://localhost:3000`
- No basePath prefix
- Hot reload enabled
- Development mode

**Production** (`npm run deploy` or GitHub Actions):
- Static export to `out/` directory
- BasePath `/Genesis` applied
- Optimized and minified
- Production mode

## Repository Structure
```
Genesis/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment workflow
├── public/                     # Static assets
│   ├── assets/
│   └── icons/
├── src/
│   ├── app/                    # Next.js pages
│   └── components/             # React components
├── out/                        # Build output (gitignored)
├── next.config.js              # GitHub Pages configuration
├── package.json                # Dependencies and scripts
└── GITHUB_PAGES_SETUP.md       # This file
```
