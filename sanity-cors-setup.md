# Sanity CORS Configuration

Your blog post exists in Sanity, but you may need to configure CORS settings to allow your website to access the data.

## Steps to fix CORS:

1. **Go to your Sanity project dashboard:**
   https://sanity.io/manage/personal/project/zg0tonh6

2. **Navigate to API settings:**
   - Click on your project
   - Go to "API" tab
   - Look for "CORS Origins"

3. **Add these origins:**
   - `http://localhost:5000` (for development)
   - `https://*.replit.app` (for production)
   - `https://*.replit.dev` (for development)
   - `https://*.replit.co` (for legacy domains)

4. **Make sure "Allow credentials" is checked**

## Alternative: Make API calls publicly readable

In your Sanity project settings:
- Go to "API" → "Tokens"
- Make sure your dataset has public read access
- No authentication required for reading published content

Once CORS is configured, your blog posts should appear immediately on the website!