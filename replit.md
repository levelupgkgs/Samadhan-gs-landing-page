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
- [2025-01-31] Successfully completed migration from Replit Agent to standard Replit environment
- [2025-01-31] All dependencies installed and tsx dependency resolved
- [2025-01-31] Express server verified running on port 5000 with full-stack integration
- [2025-01-31] Enhanced Sanity client configuration for better CORS handling
- [2025-01-31] Updated CORS documentation with Replit-specific domains
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