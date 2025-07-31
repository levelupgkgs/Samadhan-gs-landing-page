import fs from 'fs';
import path from 'path';
import { generateSitemap } from '../server/sitemap';

async function createSitemap() {
  const sitemap = await generateSitemap();
  const publicPath = path.resolve(__dirname, '..', 'client', 'public');
  
  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully at client/public/sitemap.xml');
}

createSitemap();
