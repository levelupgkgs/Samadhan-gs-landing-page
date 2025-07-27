import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Environment variables for Vite
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'zg0tonh6'
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  useCdn: true, // Re-enable CDN 
  apiVersion: '2021-10-21', // Use a more stable API version
  ignoreBrowserTokenWarning: true,
  withCredentials: false,
})

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: any) {
  return builder.image(source)
}

// Helper function to fetch blog posts
export async function getBlogPosts() {
  try {
    console.log('Fetching blog posts from Sanity...')
    // Simplified query first to test basic connectivity
    const result = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        excerpt
      }
    `)
    console.log('Blog posts fetched:', result)
    return result
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    // Try even simpler query as fallback
    try {
      console.log('Trying fallback query...')
      const fallback = await client.fetch(`*[_type == "post"]{_id, title}`)
      console.log('Fallback query result:', fallback)
      return fallback
    } catch (fallbackError) {
      console.error('Fallback query also failed:', fallbackError)
      throw error
    }
  }
}

// Helper function to fetch a single blog post
export async function getBlogPost(slug: string) {
  return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      body,
      author->{
        name,
        image,
        bio
      },
      categories[]->
    }
  `, { slug })
}

// Helper function to fetch categories
export async function getCategories() {
  return await client.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      description
    }
  `)
}