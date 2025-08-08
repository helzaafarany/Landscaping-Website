# Green Vista Landscaping Website

## Overview

This is a full-stack web application for a landscaping business called "Green Vista Landscaping". The project is a modern, responsive website template designed to showcase landscaping services, project galleries, customer testimonials, and provide contact functionality. Built with React/TypeScript on the frontend and Express.js on the backend, it follows a clean architecture pattern with component-based design and modern web development practices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Services, Gallery, and Contact
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming, including landscaping-specific color palette (forest green, sage green, earth brown)
- **State Management**: React Query (TanStack Query) for server state management and API calls
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Component Structure**: Modular components (Hero, Services, Gallery, Testimonials, About, Contact) that can be reused across pages

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **API Design**: RESTful API structure with contact form submission endpoint
- **Request Handling**: JSON body parsing and URL-encoded form data support
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Logging**: Custom logging middleware for API requests with performance tracking

### Data Storage Solutions
- **Database**: PostgreSQL configured with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle migrations for database version control
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **In-Memory Storage**: Fallback memory storage implementation for development/testing

### Content Management
- **Configuration**: Centralized site configuration in `/client/src/config/site.ts` containing business information, services, testimonials, and project data
- **Static Assets**: Image URLs using Unsplash for high-quality landscaping photos
- **Responsive Images**: Optimized image loading with proper alt text for SEO

### Authentication and Authorization
- **Current State**: Basic session handling structure in place with user schema defined
- **Storage Interface**: Abstract storage interface allowing for multiple storage backends
- **Security**: Password handling capability built into user schema

### Development and Build Process
- **Development**: Vite dev server with HMR, React fast refresh, and TypeScript checking
- **Build Process**: Vite for frontend bundling, ESBuild for backend compilation
- **Code Quality**: TypeScript strict mode enabled across the entire codebase
- **Path Aliases**: Configured import aliases for clean imports (`@/` for client, `@shared/` for shared code)

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack React Query
- **Backend Framework**: Express.js with TypeScript support via tsx
- **Database**: Drizzle ORM with PostgreSQL dialect, Neon Database serverless driver
- **Build Tools**: Vite, ESBuild, TypeScript compiler

### UI and Styling
- **Component Library**: Complete Radix UI primitive set (dialog, dropdown, form components, etc.)
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx and tailwind-merge for conditional styling, class-variance-authority for component variants

### Form and Validation
- **Form Management**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for runtime type validation and schema parsing
- **Integration**: Drizzle-Zod for database schema to validation schema generation

### Development Tools
- **Replit Integration**: Replit-specific plugins for development environment integration
- **Error Handling**: Runtime error modal overlay for development debugging
- **Code Navigation**: Cartographer plugin for enhanced code navigation in Replit

### Additional Features
- **Date Handling**: date-fns for date formatting and manipulation
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Carousel**: Embla Carousel React for image galleries and slideshows