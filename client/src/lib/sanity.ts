import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Environment variables for Vite
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'zg0tonh6'
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  useCdn: false, // Disable CDN for debugging
  apiVersion: '2024-01-01', // Use current date or earlier
  perspective: 'published', // Only fetch published documents
  stega: false, // Disable preview mode
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
    const result = await client.fetch(`
      *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        mainImage,
        author->{
          name,
          image
        }
      }
    `)
    console.log('Blog posts fetched:', result)
    return result
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    throw error
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