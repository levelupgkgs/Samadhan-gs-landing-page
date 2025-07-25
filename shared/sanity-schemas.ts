// Sanity schema types for TypeScript
export interface SanityImageAsset {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface Author {
  _id: string
  name: string
  image?: SanityImageAsset
  bio?: any[] // Portable Text
}

export interface Category {
  _id: string
  title: string
  description?: string
}

export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  excerpt?: string
  mainImage?: SanityImageAsset
  body?: any[] // Portable Text
  author?: Author
  categories?: Category[]
}