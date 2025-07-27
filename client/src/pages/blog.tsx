import { useQuery } from '@tanstack/react-query'
import { Link } from 'wouter'
import { format } from 'date-fns'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { getBlogPosts } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { BlogPost } from '@shared/sanity-schemas'

export default function Blog() {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: getBlogPosts,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Samadhan GS Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert insights, study tips, and comprehensive guides to help you excel in competitive exams
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {isLoading && (
            Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-t-lg"></div>
                <CardHeader>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}

          {error && (
            <div className="col-span-full text-center py-12">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-400 mb-2">
                  Unable to load blog posts
                </h3>
                <p className="text-red-600 dark:text-red-400 mb-4">
                  CORS configuration needed in Sanity dashboard.
                </p>
                <details className="text-left text-sm">
                  <summary className="cursor-pointer text-red-700 dark:text-red-300 font-medium">
                    Error details
                  </summary>
                  <pre className="mt-2 p-2 bg-red-100 dark:bg-red-950 rounded text-xs overflow-auto">
                    {error?.message || 'Unknown error'}
                  </pre>
                </details>
              </div>
            </div>
          )}

          {posts && posts.length === 0 && (
            <div className="col-span-full text-center py-12">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">
                  No blog posts yet
                </h3>
                <p className="text-blue-600 dark:text-blue-400">
                  Check back soon for expert insights and study guides!
                </p>
              </div>
            </div>
          )}

          {posts && posts.map((post: BlogPost) => (
            <Card key={post._id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
              {post.mainImage && (
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={urlFor(post.mainImage).width(400).height(240).url()}
                    alt={post.mainImage.alt || post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
                  {post.author && (
                    <>
                      <span>•</span>
                      <User className="w-4 h-4" />
                      {post.author.name}
                    </>
                  )}
                </div>
                <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </CardTitle>
                {post.excerpt && (
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                )}
              </CardHeader>
              
              <CardContent>
                <Link href={`/blog/${post.slug.current}`}>
                  <Button variant="ghost" className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}