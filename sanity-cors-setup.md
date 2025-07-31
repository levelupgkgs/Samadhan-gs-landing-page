# Sanity CORS Configuration - URGENT FIX NEEDED

The CORS error is blocking your blog from loading. Follow these steps to fix it:

## Quick Fix Steps:

1. **Open Sanity Dashboard:**
   https://sanity.io/manage/personal/project/zg0tonh6

2. **Go to API Settings:**
   - Click "API" in the left sidebar
   - Find "CORS Origins" section

3. **Add ALL these domains (copy exactly):**
   ```
   http://localhost:5000
   https://*.replit.app
   https://*.replit.dev  
   https://*.replit.co
   *
   ```

4. **Important Settings:**
   - ✅ Check "Allow credentials" 
   - ✅ Set to "No authentication required" for read operations

## Current Error:
Your website cannot access Sanity data because the domain is not whitelisted in CORS settings.

## Alternative: Make API calls publicly readable

In your Sanity project settings:
- Go to "API" → "Tokens"
- Make sure your dataset has public read access
- No authentication required for reading published content

Once CORS is configured, your blog posts should appear immediately on the website!