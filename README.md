# Samadhan GS - Competitive Exam Preparation Platform

A modern full-stack web application built for competitive exam preparation, featuring PDF resources, study materials, and an integrated blog system powered by Sanity CMS.

## 🚀 Features

- **Full-Stack Architecture**: React + TypeScript frontend with Express.js backend
- **Blog System**: Integrated Sanity.io CMS with SEO optimization
- **Modern UI**: Tailwind CSS with shadcn/ui components
- **PDF Library**: Comprehensive collection of study materials
- **Responsive Design**: Mobile-first approach with dark mode support
- **Performance Optimized**: Vite build system with hot reloading

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling and development
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Framer Motion** for animations
- **TanStack Query** for data fetching
- **Wouter** for client-side routing

### Backend
- **Express.js** with TypeScript
- **In-memory storage** (MemStorage)
- **Session management** with express-session

### CMS & Content
- **Sanity.io** for blog content management
- **Portable Text** for rich content rendering
- **Image optimization** with Sanity CDN

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd samadhan-gs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file with:
   ```env
   VITE_SANITY_PROJECT_ID=zg0tonh6
   VITE_SANITY_DATASET=production
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions and configs
│   │   └── index.css       # Global styles
├── server/                 # Backend Express.js API
│   ├── routes.ts          # API route handlers
│   ├── storage.ts         # Data storage interface
│   └── index.ts           # Server entry point
├── shared/                 # Shared TypeScript schemas
│   └── schema.ts          # Data models and types
└── docs/                  # Documentation and setup guides
```

## 📝 Blog System

The platform includes a comprehensive blog system powered by Sanity.io:

### Content Types
- **Blog Posts** with SEO optimization
- **Authors** with profile information
- **Categories** for content organization

### SEO Features
- Custom meta titles and descriptions
- Focus keywords for targeting
- Social media images (Open Graph)
- Image alt text and captions
- Structured data support

### Blog Routes
- `/blog` - Blog listing page
- `/blog/[slug]` - Individual blog posts

## 🎨 Design System

The application uses a modern design system with:
- **Color Palette**: Blue, purple, and green gradients
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Consistent button styles, cards, and layouts
- **Dark Mode**: Full dark mode support
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Key Development Features
- **Hot Reloading** for both frontend and backend
- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for code formatting

## 📱 Pages

1. **Homepage** (`/`) - Hero section with app features
2. **PDF Library** (`/pdf-library`) - Browse study materials
3. **Blog** (`/blog`) - Read expert insights and guides
4. **Individual Blog Posts** (`/blog/[slug]`) - Full article pages

## 🚀 Deployment

### Replit Deployment
The application is optimized for Replit hosting:
1. Push code to GitHub
2. Import repository to Replit
3. Set environment variables in Replit Secrets
4. Deploy using Replit's one-click deployment

### Environment Variables
Required for production:
- `VITE_SANITY_PROJECT_ID` - Your Sanity project ID
- `VITE_SANITY_DATASET` - Sanity dataset name

## 📚 Sanity CMS Setup

1. **Create Sanity Project:**
   ```bash
   npm create sanity@latest -- --project zg0tonh6 --dataset production
   ```

2. **Configure Schemas:**
   - Blog Post schema with SEO fields
   - Author schema with bio and image
   - Category schema for organization
   - Block Content for rich text

3. **Set CORS Origins:**
   - Add your domain to Sanity project settings
   - Enable public read access

## 🎯 Target Audience

This platform is designed for:
- **UPSC aspirants** preparing for civil services
- **SSC candidates** studying for staff selection
- **Banking exam** preparation
- **General competitive exam** students

## 🔮 Future Enhancements

- User authentication and profiles
- Progress tracking and analytics
- Interactive quiz system
- Mobile application
- Advanced search and filtering
- PDF annotation tools

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support and queries, please contact the development team or raise an issue in the repository.

---

Built with ❤️ for competitive exam aspirants across India.