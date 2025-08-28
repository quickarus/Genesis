# Genesis Aircraft Parts Website

A modern, responsive website for Genesis Aircraft Parts built with Next.js, React, TypeScript, and Tailwind CSS. This website perfectly matches the Figma design specifications and showcases the company's aviation industry services.

## Features

- 🚀 **Modern Stack**: Built with Next.js 14, React 18, and TypeScript
- 🎨 **Pixel-Perfect Design**: Faithfully recreated from Figma specifications
- 📱 **Responsive Design**: Optimized for all device sizes
- ⚡ **Performance Optimized**: Server-side rendering and optimized assets
- 🎭 **Smooth Animations**: Framer Motion for engaging user interactions
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image component with optimization

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── header.tsx
    ├── hero-section.tsx
    ├── statistics-section.tsx
    ├── about-section.tsx
    ├── team-section.tsx
    ├── services-section.tsx
    ├── quote-section.tsx
    └── footer.tsx
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Components Overview

### Header
- Fixed navigation with logo and menu items
- Interactive navigation states
- Backdrop blur effect

### Hero Section
- World map background with SVG representation
- Centered content overlay with glassmorphism effect
- Smooth fade-in animations

### Statistics Section
- Key company metrics in card format
- Staggered animation entrance
- Professional styling with borders

### About Section
- Company description in a glassmorphism container
- Proper typography and spacing
- Fade-up animation on scroll

### Team Section
- Team photo showcase
- Responsive image handling
- Scale animation on scroll

### Services Section
- Interactive service grid with icons
- Background image overlay
- Hover effects and transitions
- Chevron indicators for interactivity

### Quote Section
- Contact form with validation
- Glassmorphism styling
- Side-by-side layout with APU description
- Captcha placeholder integration

### Footer
- Company contact information
- Navigation links
- Newsletter signup form
- Social proof and certifications

## Design Features

- **Color Scheme**: 
  - Primary: #2D9ACF (Blue)
  - Secondary: #10BEF2 (Cyan)
  - Dark: #444444 (Gray)
  - Light: #ECECEC (Light Gray)

- **Typography**: Inter font family with various weights
- **Layout**: Responsive grid system with Tailwind CSS
- **Effects**: Backdrop blur, shadows, and transparency
- **Animations**: Scroll-triggered animations with Framer Motion

## Placeholder Content

Some content uses placeholders where original assets weren't available:
- Logo placeholders for Genesis Aircraft Parts and AeroXchange
- Team photo placeholder using placekitten.com
- Background images using placekitten.com
- Captcha placeholder in the quote form

## Build and Deploy

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

The application is ready for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is built for Genesis Aircraft Parts. All rights reserved.