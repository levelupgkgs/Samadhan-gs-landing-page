# Samadhan GS - Competitive Exam Preparation Platform

## Overview

Samadhan GS is a full-stack web application designed to help students prepare for competitive exams like UPSC, SSC, Banking, and Railway exams. The platform provides access to a comprehensive PDF library with features for reading, favoriting, downloading, and organizing study materials. The application is built as a modern React-based frontend with an Express.js backend, designed for both web and mobile experiences.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-backed session storage using connect-pg-simple
- **Development**: Hot module replacement and live reloading support

### Design System
- **Component Library**: Custom implementation using Radix UI primitives
- **Theme**: Dark-themed design with gradient backgrounds
- **Typography**: Inter font family for modern, readable text
- **Color Scheme**: Primary (purple), secondary (violet), accent (cyan) with neutral base colors
- **Responsive**: Mobile-first approach with responsive breakpoints

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Hero section with value proposition and call-to-action
   - Features showcase with comprehensive PDF library highlights
   - Testimonials from successful exam candidates
   - Download/CTA section for app promotion
   - Footer with navigation and social links

2. **UI Component System**:
   - Complete set of reusable components (buttons, cards, forms, navigation)
   - Toast notifications for user feedback
   - Modal dialogs and tooltips for enhanced UX
   - Responsive navigation with mobile menu support

3. **Routing Structure**:
   - Home page (`/`) - Main landing page
   - 404 page for unmatched routes
   - Smooth scrolling navigation between sections

### Backend Infrastructure
1. **Server Setup**:
   - Express application with middleware for JSON parsing and logging
   - Error handling middleware for graceful error responses
   - Request logging with timing and response capture

2. **Storage Layer**:
   - In-memory storage implementation for development
   - Database schema with user management structure
   - Prepared for PostgreSQL integration with Drizzle ORM

3. **Development Tools**:
   - Vite integration for frontend development
   - Static file serving for production builds
   - Hot reload support during development

## Data Flow

### User Interaction Flow
1. **Landing Experience**: Users arrive at the homepage and browse features
2. **Content Discovery**: Users learn about PDF library, organization features, and success stories
3. **Conversion**: Users are guided to download the mobile app or access web platform
4. **Engagement**: Smooth navigation between sections with visual feedback

### Technical Data Flow
1. **Frontend Requests**: React components make API calls through TanStack Query
2. **Backend Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: JSON responses with proper error handling and logging

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Framework**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **State Management**: TanStack React Query for efficient data fetching
- **Form Handling**: React Hook Form with Zod validation
- **Date Handling**: date-fns for date manipulation

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Database Migration**: Drizzle Kit for schema management
- **Code Quality**: TypeScript for type safety
- **Development Experience**: Replit-specific plugins for enhanced development

### Production Dependencies
- **Session Storage**: connect-pg-simple for PostgreSQL session management
- **Database Connection**: @neondatabase/serverless for optimized PostgreSQL access
- **Validation**: Zod with Drizzle integration for type-safe schemas

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **Database**: Neon Database with environment-based configuration
- **Asset Management**: Vite handles static assets with optimization
- **Error Handling**: Development-specific error overlays and logging

### Production Build
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Database**: Drizzle migrations manage schema updates
- **Deployment**: Single-command build process for both frontend and backend

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Session Configuration**: PostgreSQL-backed session storage
- **Static Assets**: Served from build directory in production
- **Error Handling**: Production-grade error responses without stack traces

## Changelog

```
Changelog:
- July 23, 2025: Enhanced landing page with Framer Motion animations, connected PDF Library to real API endpoint (https://server.samadhangs.com/api/landing-page), removed download functionality as requested, fixed category display issue by properly mapping books to categories through subcategories
- July 04, 2025: Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```