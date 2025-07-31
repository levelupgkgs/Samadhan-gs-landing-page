#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const clientSrcPath = join(__dirname, '..', 'client', 'src');

function getAllTsxFiles(dir) {
  let files = [];
  const items = readdirSync(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function convertImports(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const fileDir = dirname(filePath);
  
  let newContent = content;
  
  // Replace @/components/* imports
  newContent = newContent.replace(
    /from ['"]@\/components\/([^'"]+)['"]/g,
    (match, componentPath) => {
      const componentDir = join(clientSrcPath, 'components');
      const relativePath = relative(fileDir, join(componentDir, componentPath));
      return `from './${relativePath}'`;
    }
  );
  
  // Replace @/lib/* imports
  newContent = newContent.replace(
    /from ['"]@\/lib\/([^'"]+)['"]/g,
    (match, libPath) => {
      const libDir = join(clientSrcPath, 'lib');
      const relativePath = relative(fileDir, join(libDir, libPath));
      return `from './${relativePath}'`;
    }
  );
  
  // Replace @/hooks/* imports
  newContent = newContent.replace(
    /from ['"]@\/hooks\/([^'"]+)['"]/g,
    (match, hookPath) => {
      const hooksDir = join(clientSrcPath, 'hooks');
      const relativePath = relative(fileDir, join(hooksDir, hookPath));
      return `from './${relativePath}'`;
    }
  );
  
  // Replace @/pages/* imports
  newContent = newContent.replace(
    /from ['"]@\/pages\/([^'"]+)['"]/g,
    (match, pagePath) => {
      const pagesDir = join(clientSrcPath, 'pages');
      const relativePath = relative(fileDir, join(pagesDir, pagePath));
      return `from './${relativePath}'`;
    }
  );
  
  // Replace import statements too
  newContent = newContent.replace(
    /import ([^'"]+) from ['"]@\/([^'"]+)['"]/g,
    (match, importName, importPath) => {
      const targetDir = join(clientSrcPath, importPath);
      const relativePath = relative(fileDir, targetDir);
      return `import ${importName} from './${relativePath}'`;
    }
  );
  
  if (newContent !== content) {
    writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed imports in: ${relative(clientSrcPath, filePath)}`);
  }
}

console.log('Starting import conversion...');
const allFiles = getAllTsxFiles(clientSrcPath);

for (const file of allFiles) {
  convertImports(file);
}

console.log('Import conversion completed!');