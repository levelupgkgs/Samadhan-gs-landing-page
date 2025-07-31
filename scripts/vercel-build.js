#!/usr/bin/env node

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Starting Vercel build process...');

try {
  console.log('Installing build dependencies...');
  execSync('npm install vite tsx --save-dev', { stdio: 'inherit' });

  console.log('Building sitemap...');
  execSync('npx tsx scripts/generate-sitemap.ts', { stdio: 'inherit' });

  console.log('Building with Vite...');
  execSync('npx vite build', { stdio: 'inherit' });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}