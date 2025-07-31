#!/bin/bash
# Vercel build script

echo "Installing build dependencies..."
npm install vite tsx --save-dev

echo "Building sitemap..."
npx tsx scripts/generate-sitemap.ts

echo "Building with Vite..."
npx vite build

echo "Build completed successfully!"