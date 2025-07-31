import { useEffect } from 'react'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export default function SEOHead({
  title = "Samadhan GS - Master Competitive Exams with Expert PDF Resources",
  description = "Crack UPSC, SSC, Banking & Railway exams with Samadhan GS. Access 1000+ free PDF study materials, exam analysis, GK updates & expert preparation tips.",
  keywords = "competitive exams, UPSC preparation, SSC, banking exams, railway jobs, GK PDF, current affairs, study materials",
  image = "https://samadhang.replit.app/attached_assets/android-chrome-512x512_1753983988374.png",
  url = "https://samadhang.replit.app/",
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = []
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector) as HTMLMetaElement
      
      if (!meta) {
        meta = document.createElement('meta')
        if (property) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      
      meta.content = content
    }
    
    // Update basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:type', type, true)
    
    // Update Twitter tags
    updateMetaTag('twitter:title', title, true)
    updateMetaTag('twitter:description', description, true)
    updateMetaTag('twitter:image', image, true)
    updateMetaTag('twitter:url', url, true)
    
    // Article-specific tags
    if (type === 'article') {
      if (publishedTime) updateMetaTag('article:published_time', publishedTime, true)
      if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true)
      if (author) updateMetaTag('article:author', author, true)
      if (section) updateMetaTag('article:section', section, true)
      
      // Article tags
      tags.forEach(tag => {
        const meta = document.createElement('meta')
        meta.setAttribute('property', 'article:tag')
        meta.content = tag
        document.head.appendChild(meta)
      })
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
    
  }, [title, description, keywords, image, url, type, publishedTime, modifiedTime, author, section, tags])
  
  return null
}