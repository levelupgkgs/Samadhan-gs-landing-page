# Vercel Deployment Fix

## Problem
The Vercel deployment is failing because:
1. `tsx` and `vite` are in dependencies but need to be in devDependencies
2. The `postinstall` script is causing conflicts
3. Vite can't find required packages during build

## Solution

### Step 1: Update package.json manually
You need to move these packages from `dependencies` to `devDependencies`:
- `tsx: "^4.19.1"`
- `vite: "^5.4.19"`

And remove this line from scripts:
```json
"postinstall": "npm install vite tsx",
```

### Step 2: Alternative - Create a new package.json structure
If the above doesn't work, you can try this build command in Vercel:

```bash
npm install && npm run build:sitemap && npx vite build
```

### Step 3: Update Vercel Configuration
The current vercel.json should work, but make sure it matches this structure:

```json
{
  "framework": null,
  "buildCommand": "npm install && npm run build",
  "outputDirectory": "dist/public",
  "installCommand": "npm install",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Step 4: Alternative Build Script
If the issue persists, try changing the build script to:
```json
"build": "npm run build:sitemap && vite build"
```

## Quick Fix for Immediate Deployment
1. In Vercel dashboard, go to your project settings
2. Under "Build & Development Settings":
   - Build Command: `npm install vite tsx && npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

This will ensure Vite and tsx are available during the build process.