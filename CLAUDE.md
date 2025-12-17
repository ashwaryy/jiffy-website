# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jiffy Website is a marketing site for Jiffy.live, an AI-powered knowledge agent for institutions. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4. The site is configured for static export and deployed to Vercel.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build (generates static export in /out)
npm run build

# Production preview
npm start

# Linting
npm run lint
```

## Architecture

### Static Site Generation
- Next.js is configured with `output: "export"` in next.config.ts for static site generation
- All pages are pre-rendered at build time
- No server-side runtime or API routes

### Routing Structure
- Uses Next.js App Router (`app/` directory)
- Key routes:
  - `/` - Homepage
  - `/demo` - Demo request form with Web3Forms integration
  - `/how-it-works` - Product explanation (domain agnostic)
  - `/analytics` - Analytics features page
  - `/pricing` - Pricing tiers page
  - `/resources` - Resources hub with subpages for white paper and case study

### Component Organization
All reusable components are in `/components`:
- `Header.tsx` - Fixed navigation header with logo and nav items
- `Footer.tsx` - Site footer
- `Button.tsx` - Reusable button component with variants (primary, outline)
- `Card.tsx` - Card component with hover effects (lift, glow)
- `/animations` - Animation components:
  - `AnimatedBackground.tsx` - Background decoration variants (hero, subtle)
  - `FadeInUp.tsx` - Fade-in-up animation wrapper with delay support
  - `FloatingElement.tsx` - Floating animation wrapper
  - `StaggerContainer.tsx` - Staggered animation container
- `/icons` - Icon components including `GiraffeMascot.tsx` and feature icons

### SEO Configuration
SEO is centralized in `/lib/seo.ts`:
- `siteConfig` - Site-wide configuration (name, URL, og-image)
- `defaultMetadata` - Default metadata for all pages
- `generatePageMetadata()` - Helper for page-specific metadata
- Root layout includes JSON-LD structured data for Organization and WebSite

### Design System

**Color Palette** (defined in `app/globals.css`):
- Primary: Orange-500 (#f97316) - Warm, friendly brand color
- Primary Dark: Orange-600 (#ea580c) - Hover states
- Accent: Amber-400 (#fbbf24) - Warmer yellow for accents
- Secondary: Slate-900 (#0f172a) - Sharp, premium text
- Surface: Amber-50 (#fffbeb) - Warmer surface backgrounds

**Typography**:
- Sans: DM Sans (weights: 400, 500, 700) - Body text
- Serif: DM Serif Display (weight: 400) - Decorative headers
- CSS variables: `--font-dm-sans` and `--font-dm-serif`

**Animation System**:
All animations are CSS-based for Safari compatibility (no JavaScript animations):
- `animate-fade-in-up` - Fade in with upward motion
- `animate-float` - Gentle vertical floating
- `animate-float-rotate` - Floating with rotation
- `animate-scale-in` - Scale in from 90%
- Delay classes: `animate-delay-{100-5000}` for staggered animations
- Hover utilities: `transition-lift` (lifts on hover), `transition-scale` (scales on hover)

### Path Aliases
TypeScript path alias `@/*` maps to repository root (configured in tsconfig.json).

### Form Handling
Demo form uses Web3Forms (web3forms.com) for form submissions:
- Access key is stored in the form as a hidden field
- Form posts to `https://api.web3forms.com/submit`
- Client-side validation and submission handling

## Key Implementation Patterns

1. **Metadata Generation**: Every page exports metadata using `generatePageMetadata()` from `/lib/seo.ts`
2. **Client Components**: Pages using interactivity (forms, state) include `"use client"` directive
3. **Animation Delays**: Use staggered delays (`delay={0.1}`, `delay={0.2}`) for sequential reveal effects
4. **Responsive Design**: Mobile-first approach with Tailwind breakpoints (sm, md, lg)
5. **Domain Agnostic Content**: Recent updates made content (especially how-it-works) institution-agnostic

## Recent Changes
- Added pricing page with tiered pricing structure
- Made how-it-works page domain agnostic (not university-specific)
- Integrated Web3Forms for demo request form
- Removed default Vercel favicon in favor of custom giraffe.svg
- Comprehensive SEO enhancements including JSON-LD structured data
