# DineHub - Restaurant Web Application

A modern, responsive restaurant website built with React, TypeScript, and Tailwind CSS.

## Features

- **Home Page** - Hero section, featured dishes, and customer testimonials
- **Menu** - Interactive menu with categories and dietary information
- **Reservations** - Online table booking system
- **Contact** - Contact form and restaurant information
- **Responsive Design** - Mobile-first approach with modern UI

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Query

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── home/          # Home page components
│   ├── layout/        # Navigation and footer
│   └── ui/            # Reusable UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── pages/             # Page components
```

## Deployment

### Netlify Deployment

This project is configured for easy deployment on Netlify:

1. **Connect your GitHub repository** to Netlify
2. **Build settings** are automatically configured via `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18.20.4`

3. **Deploy** - Netlify will automatically build and deploy your site

### Manual Deployment

```bash
# Build the project
npm run build

# The built files will be in the 'dist' directory
# Upload the contents of 'dist' to your hosting provider
```

### Environment Variables

No environment variables are required for basic deployment.

## License

MIT License