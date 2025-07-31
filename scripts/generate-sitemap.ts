import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateSitemap } from '../server/sitemap';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
