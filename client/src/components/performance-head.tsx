import { useEffect } from 'react'

// Performance and Critical Resource Hints
export default function PerformanceHead() {
  useEffect(() => {
    // Add resource hints for better performance
    const addResourceHint = (rel: string, href: string, as?: string, crossorigin?: boolean) => {
      const link = document.createElement('link')
      link.rel = rel
      link.href = href
      if (as) link.setAttribute('as', as)
      if (crossorigin) link.setAttribute('crossorigin', 'anonymous')
      document.head.appendChild(link)
    }

    // Preload critical fonts
    addResourceHint('preload', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap', 'style')
    
    // DNS prefetch for external domains
    addResourceHint('dns-prefetch', 'https://cdn.sanity.io')
    addResourceHint('dns-prefetch', 'https://fonts.gstatic.com')
    
    // Preconnect to critical external origins
    addResourceHint('preconnect', 'https://fonts.googleapis.com')
    addResourceHint('preconnect', 'https://fonts.gstatic.com', undefined, true)
    addResourceHint('preconnect', 'https://cdn.sanity.io', undefined, true)

    // Add viewport meta for mobile optimization if not exists
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta')
      viewport.name = 'viewport'
      viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes'
      document.head.appendChild(viewport)
    }

    // Add theme-color meta if not exists
    if (!document.querySelector('meta[name="theme-color"]')) {
      const themeColor = document.createElement('meta')
      themeColor.name = 'theme-color'
      themeColor.content = '#1e293b'
      document.head.appendChild(themeColor)
    }

  }, [])

  return null
}