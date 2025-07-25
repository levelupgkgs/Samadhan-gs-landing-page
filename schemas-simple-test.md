# Simple Test - Minimal Schema Setup

Let's try with just one schema first to isolate the issue:

## Step 1: Create a minimal schemas/index.ts
Replace your entire `schemas/index.ts` with just this:

```typescript
import post from './post'

export const schemaTypes = [post]
```

## Step 2: Test with just post schema
This will load only the post schema to see if the basic setup works.

If this works, we'll add the others one by one:
1. Add author
2. Add category  
3. Add blockContent

## Alternative: Check file extensions
Make sure all your schema files end with `.ts` not `.js`:
- schemas/post.ts (not .js)
- schemas/author.ts (not .js)
- schemas/category.ts (not .js)
- schemas/blockContent.ts (not .js)

## Alternative: Use CommonJS exports
If TypeScript imports aren't working, try this in each schema file:

Instead of:
```typescript
export default {
  name: 'post',
  // ...
}
```

Try:
```typescript
const post = {
  name: 'post',
  // ...
}

export default post
```