// Import blog post interface for type safety
interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  excerpt?: string
  mainImage?: any
  body?: any[]
  author?: any
  categories?: any[]
}

interface SitemapUrl {
  loc: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export async function generateSitemap(): Promise<string> {
  const baseUrl = 'https://samadhang.replit.app'
  
  const staticUrls: SitemapUrl[] = [
    {
      loc: `${baseUrl}/`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.9
    }
  ]
  
  // Add blog posts - we'll generate a basic sitemap for now
  // In production, this would fetch from the actual blog posts
  const blogUrls: SitemapUrl[] = [
    // Add some common blog post paths for SEO
    {
      loc: `${baseUrl}/blog/upsc-preparation-guide`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/blog/ssc-exam-strategy`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/blog/banking-exam-tips`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',  
      priority: 0.8
    }
  ]
  
  const allUrls = [...staticUrls, ...blogUrls]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`
  
  return sitemap
}