# Project Overview

A full-stack JavaScript application built with:
- Frontend: React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- Backend: Express.js + TypeScript
- Storage: In-memory storage (MemStorage)
- Routing: Wouter for frontend routing
- State Management: TanStack Query
- Forms: React Hook Form with Zod validation

## Current State
- Successfully migrated from Replit Agent to standard Replit environment
- All required packages installed and working
- Express server running on port 5000
- Frontend and backend integrated through Vite proxy

## Recent Changes
- [2025-08-01] Fixed Vercel deployment configuration for monorepo structure - removed separate client install command and corrected output directory path from client/dist to dist/public
- [2025-08-01] Updated Vercel configuration to properly handle SPA routing and static assets - tried multiple approaches including static-build configuration
- [2025-01-31] ✅ SUCCESSFUL VERCEL DEPLOYMENT: Website fully deployed and accessible at https://samadhan-gs-landing-page-eirjrrrn2.vercel.app/
- [2025-01-31] FIXED VERCEL DEPLOYMENT: Resolved all import resolution and build issues
- [2025-01-31] Converted all @ alias imports to relative imports for production build compatibility
- [2025-01-31] Fixed build warnings: Tailwind content configuration and tooltip sourcemap errors
- [2025-01-31] Fixed CSS apply directives causing build failures
- [2025-01-31] Removed duplicate use-toast files causing module conflicts
- [2025-01-31] Fixed Vercel SPA routing configuration with correct build directory and rewrites
- [2025-01-31] Updated Vercel build configuration with proper dependency installation
- [2025-01-31] Successfully completed migration from Replit Agent to standard Replit environment
- [2025-01-31] Fixed JSX syntax error in category sidebar component for proper compilation
- [2025-01-31] Improved sub-category text readability in sidebar with proper color contrast
- [2025-01-31] All dependencies resolved and tsx compilation working properly
- [2025-01-31] Express server verified running on port 5000 with full-stack integration
- [2025-01-31] Applied proper client/server separation and security practices
- [2025-01-31] Fixed single blog post sidebar to match blog listing page styling and behavior
- [2025-01-31] Enhanced category selection state management for consistent sidebar appearance
- [2025-01-31] Implemented functional share button with dropdown menu and toast notifications
- [2025-01-31] Added social media sharing (X, Facebook, LinkedIn) and copy link functionality
- [2025-01-31] Updated website logo to use custom architectural "S" design with Islamic architecture in both navigation and footer
- [2025-01-31] Added complete favicon package with multiple sizes for different devices and platforms
- [2025-01-31] Updated all social media links across footer, mobile menu, and added desktop topbar with links
- [2025-01-31] Enhanced blog post UI/UX with improved typography, beautiful image displays, and readable text styling
- [2025-01-31] Implemented comprehensive SEO optimization with meta tags, structured data, sitemaps, and performance enhancements
- [2025-01-31] Transformed blog section into "Exam Analysis" with stunning dark theme design
- [2025-01-31] Enhanced hero section with intelligent download button behavior (app stores on mobile, scroll on desktop)  
- [2025-01-31] Fixed features section image alignment and cropping issues with responsive design
- [2025-01-31] Made hero section text responsive for better mobile/tablet experience
- [2025-01-31] Added Sanity CMS environment variables for blog content display
- [2025-01-31] Enhanced Sanity client configuration for better CORS handling
- [2025-01-31] Updated CORS documentation with Replit-specific domains
- [2025-01-31] CORS configuration needed in Sanity dashboard to enable blog functionality
- [2025-01-25] Integrated Sanity.io blog system with complete CMS functionality
- [2025-01-25] Successfully set up Sanity studio with SEO-optimized blog schemas
- [2025-01-27] Cleaned up Sanity configuration and enabled CDN for production

## Project Architecture
- `client/`: Frontend React application
- `server/`: Backend Express.js API
- `shared/`: Shared TypeScript schemas and types
- Modern development setup with hot reloading for both frontend and backend
- **Blog System**: Sanity.io CMS integration with rich content support
  - Blog listing page (`/blog`)
  - Individual blog post pages (`/blog/[slug]`)
  - Portable Text rendering for rich content
  - Image optimization and SEO features

## User Preferences
- Wants to integrate Sanity.io blog system for content management
- Prefers step-by-step guidance for technical setup

## Security Features
- Client/server separation properly implemented
- Input validation using Zod schemas
- Secure session handling with express-session
- Type-safe API contracts between frontend and backend