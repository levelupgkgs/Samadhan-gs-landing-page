import { useEffect } from 'react'

interface BlogPostStructuredDataProps {
  title: string
  description: string
  url: string
  image?: string
  publishedTime?: string
  modifiedTime?: string
  author?: string
  authorImage?: string
  category?: string
}

export function BlogPostStructuredData({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  author,
  authorImage,
  category
}: BlogPostStructuredDataProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "description": description,
      "url": url,
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "author": {
        "@type": "Person",
        "name": author || "Samadhan GS Team",
        "image": authorImage,
        "url": "https://samadhang.replit.app"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Samadhan GS",
        "logo": {
          "@type": "ImageObject",
          "url": "https://samadhang.replit.app/attached_assets/android-chrome-512x512_1753983988374.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "image": image,
      "articleSection": category || "Education",
      "keywords": "competitive exams, UPSC, SSC, banking exams, government jobs, study tips"
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    script.id = 'blog-post-structured-data'
    
    // Remove existing structured data if any
    const existing = document.getElementById('blog-post-structured-data')
    if (existing) {
      existing.remove()
    }
    
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById('blog-post-structured-data')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [title, description, url, image, publishedTime, modifiedTime, author, authorImage, category])

  return null
}

interface WebsiteStructuredDataProps {
  name: string
  description: string
  url: string
}

export function WebsiteStructuredData({ name, description, url }: WebsiteStructuredDataProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": name,
      "description": description,
      "url": url,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${url}/blog?search={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Samadhan GS",
        "logo": {
          "@type": "ImageObject",
          "url": "https://samadhang.replit.app/attached_assets/android-chrome-512x512_1753983988374.png"
        }
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    script.id = 'website-structured-data'
    
    // Remove existing structured data if any
    const existing = document.getElementById('website-structured-data')
    if (existing) {
      existing.remove()
    }
    
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById('website-structured-data')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [name, description, url])

  return null
}