# Fix CORS Issue - Immediate Steps

Your blog post exists but CORS is blocking access. Here's how to fix it:

## Step 1: Configure CORS in Sanity Dashboard

1. **Go to:** https://sanity.io/manage/personal/project/zg0tonh6/api

2. **Add CORS Origins:**
   Click "Add CORS origin" and add these one by one:
   - `http://localhost:5000`
   - `https://*.replit.dev`
   - `https://*.replit.app`
   - `http://localhost:3000` (backup)

3. **Check "Allow credentials"** for each origin

## Step 2: Verify API Access

Your Sanity project should allow public read access. In the same API settings:
- Make sure "Public read access" is enabled
- No authentication token required for reading published content

## Step 3: Alternative - Use CDN endpoint

If CORS still doesn't work, we can switch to the CDN endpoint which has less strict CORS policies.

## What I've already done:
- ✅ Fixed environment variable configuration
- ✅ Added perspective: 'published' for better caching
- ✅ Enhanced error display to show specific error details
- ✅ Verified your blog post exists in Sanity

Once you configure CORS, refresh the /blog page and your post should appear!