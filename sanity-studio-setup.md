# Setting Up Your Sanity Studio

Since you have your Sanity project (`zg0tonh6`) created, here's how to set up your studio:

## Option 1: Create Studio in a Separate Folder (Recommended)

1. **Create a new folder for your studio:**
   ```bash
   mkdir samadhan-blog-studio
   cd samadhan-blog-studio
   ```

2. **Initialize your studio:**
   ```bash
   npm create sanity@latest -- --project zg0tonh6 --dataset production --template clean
   ```

3. **When prompted:**
   - Choose "Yes" to use the existing project
   - Select your preferred package manager (npm/yarn)
   - Choose "TypeScript" when asked

## Option 2: Use Sanity's Web Studio (Easiest)

1. Go to https://your-project-id.sanity.studio (replace with `zg0tonh6.sanity.studio`)
2. If it doesn't exist yet, you'll need to deploy it first using Option 1

## Setting Up Blog Schema

Once your studio is running, create these schema files:

### 1. Create `schemas/post.ts`:
```typescript
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main Image',
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
      title: 'Published At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      description: 'Brief summary for social media and search results (150-160 characters recommended)',
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Custom title for search engines (50-60 characters)',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Description for search results (150-160 characters)',
        },
        {
          name: 'keywords',
          title: 'Focus Keywords',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Main keywords this post should rank for',
        },
        {
          name: 'ogImage',
          title: 'Social Media Image',
          type: 'image',
          description: 'Custom image for social media sharing (1200x630 recommended)',
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
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
    prepare(selection: any) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
```

### 2. Create `schemas/author.ts`:
```typescript
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
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

### 3. Create `schemas/category.ts`:
```typescript
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
```

### 4. Create `schemas/blockContent.ts`:
```typescript
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
      lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Numbered', value: 'number'}],
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
          title: 'Image Caption',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility.',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
}
```

### 5. Update `schemas/index.ts`:
```typescript
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'

export const schemaTypes = [post, author, category, blockContent]
```

## Deploy Your Studio

After setting up the schemas:

```bash
npm run deploy
```

This will give you a URL like: `https://zg0tonh6.sanity.studio`

## Create Your First Content

1. Visit your studio URL
2. Create an Author first (yourself)
3. Create some Categories:
   - "Study Tips"
   - "Current Affairs" 
   - "Exam Updates"
   - "General Knowledge"
4. Create your first blog post

## CORS Settings

Don't forget to add your domain to CORS settings in Sanity:
- Development: `http://localhost:5000`
- Production: Your actual domain

Go to your Sanity project settings → API → CORS Origins and add these.

## Testing

Once you've created content, visit your website at `/blog` to see it in action!