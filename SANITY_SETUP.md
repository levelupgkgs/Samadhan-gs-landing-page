# Sanity.io Blog Integration Setup Guide

This guide will help you set up Sanity.io for your blog content management.

## Prerequisites

1. Create a free account at [Sanity.io](https://www.sanity.io)
2. Install Sanity CLI: `npm install -g @sanity/cli`

## Step 1: Create a New Sanity Project

```bash
# Initialize a new Sanity project
sanity init

# Follow the prompts:
# - Choose "Create new project"
# - Give your project a name (e.g., "Samadhan GS Blog")
# - Choose "Blog" template or "Clean project"
# - Choose a dataset name (usually "production")
```

## Step 2: Configure Your Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the values in `.env`:
   ```
   VITE_SANITY_PROJECT_ID=your-actual-project-id
   VITE_SANITY_DATASET=production
   ```

   You can find your project ID in the Sanity management dashboard or in your sanity.config.js file.

## Step 3: Create Blog Schema (if not using template)

If you started with a clean project, create these schemas in your Sanity studio:

### Post Schema (`schemas/post.js`):
```javascript
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
```

### Author Schema (`schemas/author.js`):
```javascript
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
```

### Category Schema (`schemas/category.js`):
```javascript
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
```

### Block Content Schema (`schemas/blockContent.js`):
```javascript
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Image caption',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
}
```

## Step 4: Deploy Your Sanity Studio

```bash
# Deploy your studio
sanity deploy

# This will give you a URL like: https://your-project-name.sanity.studio
```

## Step 5: Create Your First Blog Post

1. Visit your Sanity Studio URL
2. Create an Author first
3. Create Categories (e.g., "Study Tips", "Exam Updates", "General Knowledge")
4. Create your first blog post

## Step 6: Test the Integration

1. Restart your development server: `npm run dev`
2. Visit `/blog` on your website
3. Your blog posts should now appear!

## Features Included

✅ **Blog Listing Page** (`/blog`)
- Responsive grid layout
- Search and filtering
- Loading states
- Error handling

✅ **Individual Blog Post Pages** (`/blog/[slug]`)
- Rich content rendering with Portable Text
- Author information
- Categories and tags
- Social sharing
- Related posts

✅ **Rich Content Support**
- Images with captions
- Code blocks
- Lists and quotes
- Custom formatting

✅ **SEO Optimized**
- Meta tags
- Open Graph tags
- Structured data

## Troubleshooting

### Common Issues:

1. **"Cannot connect to Sanity"**: Check your project ID and dataset name in `.env`
2. **"No posts found"**: Make sure you've published your posts in Sanity Studio
3. **Images not loading**: Verify your Sanity project has the correct CORS settings

### CORS Configuration:
Add your domain to CORS origins in your Sanity project settings:
- Development: `http://localhost:5000`
- Production: Your actual domain

## Next Steps

- Customize the blog design to match your brand
- Add search functionality
- Implement pagination for large numbers of posts
- Add comment system
- Set up webhooks for automatic rebuilds