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
- [2025-01-25] Migrated project from Replit Agent environment
- [2025-01-25] Fixed tsx dependency issue - project now starts successfully
- [2025-01-25] Verified full-stack setup is working correctly

## Project Architecture
- `client/`: Frontend React application
- `server/`: Backend Express.js API
- `shared/`: Shared TypeScript schemas and types
- Modern development setup with hot reloading for both frontend and backend

## User Preferences
- None specified yet

## Security Features
- Client/server separation properly implemented
- Input validation using Zod schemas
- Secure session handling with express-session
- Type-safe API contracts between frontend and backend