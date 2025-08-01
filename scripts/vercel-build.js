#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🔧 Starting Vercel build process...');

// Run the normal build
console.log('📦 Running npm build...');
execSync('npm run build', { stdio: 'inherit' });

// Find where the dist directory actually is
const possiblePaths = [
  './dist/public',
  '../dist/public',
  'dist/public',
  './client/dist/public'
];

let sourceDir = null;
for (const testPath of possiblePaths) {
  if (fs.existsSync(testPath) && fs.existsSync(path.join(testPath, 'index.html'))) {
    sourceDir = testPath;
    console.log(`✅ Found build output at: ${sourceDir}`);
    break;
  }
}

if (!sourceDir) {
  console.error('❌ Could not find build output directory');
  process.exit(1);
}

// Ensure target directory exists
const targetDir = './dist';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy files
console.log(`📁 Copying files from ${sourceDir} to ${targetDir}...`);
try {
  execSync(`cp -r ${sourceDir}/* ${targetDir}/`, { stdio: 'inherit' });
  console.log('✅ Files copied successfully');
  
  // Verify the copy worked
  if (fs.existsSync('./dist/index.html')) {
    console.log('✅ index.html found in output directory');
  } else {
    console.error('❌ index.html not found after copy');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Copy failed:', error.message);
  process.exit(1);
}

console.log('🎉 Build process completed successfully!');