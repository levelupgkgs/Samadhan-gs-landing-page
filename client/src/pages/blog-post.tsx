import { useQuery } from '@tanstack/react-query'
import { useRoute } from 'wouter'
import { format } from 'date-fns'
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react'
import { getBlogPost } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PortableText from '@/components/PortableText'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Link } from 'wouter'
import type { BlogPost } from '@shared/sanity-schemas'

export default function BlogPostPage() {
  const [match, params] = useRoute('/blog/:slug')
  const slug = params?.slug

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => getBlogPost(slug!),
    enabled: !!slug,
  })

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navigation />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Loading skeleton */}
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-8"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-8"></div>
              <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>
              <div className="space-y-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navigation />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The blog post you're looking for doesn't exist or may have been moved.
            </p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Article header */}
          <article className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {post.mainImage && (
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img
                  src={urlFor(post.mainImage).width(1200).height(600).url()}
                  alt={post.mainImage.alt || post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            )}

            <div className="p-8 md:p-12">
              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.categories.map((category: any) => (
                    <Badge key={category._id} variant="secondary">
                      {category.parentCategory ? `${category.parentCategory.title} > ${category.title}` : category.title}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <time dateTime={post.publishedAt}>
                    {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
                  </time>
                </div>
                
                {post.author && (
                  <div className="flex items-center gap-3">
                    {post.author.image && (
                      <img
                        src={urlFor(post.author.image).width(40).height(40).url()}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      <span className="font-medium">{post.author.name}</span>
                    </div>
                  </div>
                )}

                <Button variant="outline" size="sm" className="ml-auto">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>

              {/* Excerpt */}
              {post.excerpt && (
                <div className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-medium leading-relaxed">
                  {post.excerpt}
                </div>
              )}

              {/* Content */}
              {post.body && (
                <div className="prose prose-lg prose-blue dark:prose-invert max-w-none">
                  <PortableText value={post.body} />
                </div>
              )}

              {/* Author bio */}
              {post.author && post.author.bio && (
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    {post.author.image && (
                      <img
                        src={urlFor(post.author.image).width(80).height(80).url()}
                        alt={post.author.name}
                        className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        About {post.author.name}
                      </h3>
                      <div className="text-gray-600 dark:text-gray-300 prose prose-sm dark:prose-invert">
                        <PortableText value={post.author.bio} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
