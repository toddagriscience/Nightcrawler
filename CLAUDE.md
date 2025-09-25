# ToddAgriScience Website - Development Context

## Project Overview

A modern, production-ready Next.js website for Todd Agriscience with comprehensive development infrastructure, smooth user experience, and complete SEO optimization. This codebase emphasizes maintainability, type safety, internationalization support, and component-driven architecture.

## Tech Stack

### Core Framework

- **Next.js 15** with App Router & Turbopack
- **TypeScript** with strict type checking
- **Tailwind CSS v4** with custom brand configuration
- **React 19** with modern hooks and patterns

### UI Component System

- **shadcn/ui** integration with Radix UI primitives
- **class-variance-authority** for component variants
- **Lucide React** for consistent iconography
- **Radix UI Slot** for composition patterns
- **clsx & tailwind-merge** for conditional styling

### Internationalization

- **Multi-language support** (en, es) with architecture ready for expansion
- **Smart locale detection** from browser settings and localStorage
- **Type-safe translations** with parameter interpolation
- **Fallback system** to English for missing translations

### Animation & UX

- **Framer Motion v12.23** for component animations and scroll-based effects
- **Lenis v1.0** for buttery smooth scrolling (matching original feel)
- **Embla Carousel** for interactive content carousels
- **Dynamic header** with scroll-based state changes
- **Advanced theme system** with smooth transitions and scroll-based dark mode
- **Centralized theme context** with debounced state management

### Development Infrastructure

- **Jest v30 + React Testing Library v16.3** (unit testing)
- **Storybook v9.1** with accessibility addon
- **ESLint v9 + Prettier v3.6** with pre-commit hooks (Husky v9.1)
- **GitHub Actions** CI/CD pipeline

### SEO & Performance

- **Comprehensive metadata** (OpenGraph, Twitter cards, structured data)
- **Custom fonts** (next/font/local with Neue Haas Unica, Utah WGL)
- **Optimized assets** (favicons, social images, robots.txt)
- **Type-safe metadata utilities** for dynamic pages

## Directory Structure

```
src/
  app/                    # Next.js App Router
    [locale]/            # Internationalized pages with layout
      [...rest]/         # Catch-all route for dynamic pages
    api/                 # API routes
    globals.css          # Global styles with Lenis setup
    layout.tsx           # Root layout with providers
  components/             # All React components
    common/              # Reusable components
      button/            # Custom button with variants & types
      carousel/          # Embla carousel component
      locale-switcher/   # Language selection component
      news-card/         # News article card component
      placeholder-image/ # Image placeholder component
      smooth-scroll/     # Smooth scroll wrapper
    landing/             # Homepage-specific components
      footer/            # Landing page footer
      header/            # Landing page header with navigation
      hero/              # Hero section component
      news-highlights/ # Combined news + quote card
      page/              # Landing page layout
      quote/             # Quote/About section
      scroll-shrink-wrapper/ # Scroll animation wrapper
    ui/                  # shadcn/ui components
      button.tsx         # shadcn/ui button component
  context/               # React contexts
    theme/               # Theme context with types
      ThemeContext.tsx   # Theme and dark mode context
      types/             # Theme-related TypeScript types
  data/                  # Static data files
    featured-news.json   # Featured news articles data
  i18n/                  # Internationalization config
    config.ts            # i18n configuration
    request.ts           # Server-side i18n utilities
  lib/                   # Utility functions
    env.ts               # Environment configuration
    fonts.ts             # Custom font loading
    locale-utils.ts      # Locale helper functions
    locales.ts           # Locale definitions
    logger.ts            # Environment-aware logging utility
    metadata.ts          # SEO metadata utilities
    scroll-to-top.tsx    # Scroll to top component
    utils.ts             # shadcn/ui utility functions
  messages/              # Translation JSON files
    en.json              # English translations
    es.json              # Spanish translations
  test/                  # Testing utilities
    test-utils.tsx       # React Testing Library setup
  types/                 # Global TypeScript types
  middleware.ts          # next-intl middleware
public/                  # Static assets
  fonts/                 # Custom fonts (Neue Haas, Utah WGL)
  publications/          # PDF documents
scripts/                 # Build and utility scripts
.github/workflows/       # CI/CD pipelines
.storybook/             # Storybook configuration
  decorators/            # Custom Storybook decorators
components.json          # shadcn/ui configuration
```

### Development Priorities

When making changes, prioritize:

1. **Type Safety**: Maintain strict TypeScript throughout
2. **Internationalization**: Support multi-language architecture
3. **Testing**: Write tests for functionality and accessibility
4. **Performance**: Optimize animations and bundle size
5. **Accessibility**: Ensure WCAG compliance

### File Organization & Conventions

#### Component Structure

- **Slice Architecture**: Each page has its own components directory co-located with the page
- **Co-located files**: Test files (`.test.tsx`) and Storybook files (`.stories.tsx`) alongside components
- **Page-specific structure**: Components are organized per page/feature:
  ```
  app/
  ├── [locale]/
  │   ├── about/
  │   │   ├── components/       # About page specific components
  │   │   │   ├── hero/
  │   │   │   │   ├── types/
  │   │   │   │   │   └── hero.ts
  │   │   │   │   ├── hero.tsx
  │   │   │   │   ├── hero.test.tsx
  │   │   │   │   └── hero.stories.tsx
  │   │   │   └── index.ts      # Barrel export for about page components
  │   │   └── page.tsx          # About page
  │   └── page.tsx              # Homepage (landing components in src/components/landing/)
  ```
- **Global components**: Reusable components in `src/components/common/` and `src/components/ui/`
- **Landing page exception**: Current landing page components remain in `src/components/landing/`
- **shadcn/ui components**: Direct files in `src/components/ui/` (e.g., `button.tsx`)
- **Import paths**: Use `@/` alias for all src imports
- **Naming**: Use kebab-case for directories, PascalCase for components
- **Component variants**: Use `class-variance-authority` for component styling variants

### Development Workflow

#### Essential Commands

- `npm run dev` - Development server with Turbopack
- `npm run ci` - Full validation (type-check → lint → test → build)
- `npm run validate` - Complete pipeline (format:check → ci)

#### Testing & Quality

- `npm run test` - Run unit tests
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format code
- `npm run storybook` - Component documentation

#### Before Making Changes

1. Run `npm run validate` to ensure clean baseline
2. Create feature branch from current working branch
3. Make changes following established patterns
4. Write/update tests for new functionality
5. Run `npm run validate` before committing

### Code Quality Standards

#### Pre-commit Requirements

- **Automatic formatting**: Prettier runs on staged files
- **Linting**: ESLint with auto-fix attempts
- **Type checking**: TypeScript validation before commit

#### Logging Standards

- **Environment-aware logging**: Use `@/lib/logger` instead of console methods
- **Production-safe**: Only `logger.warn` and `logger.error` should be used
- **No console.log**: Avoid console.log entirely - use logger.warn for debug info
- **Critical errors only**: Use logger.error only for critical issues that need attention

#### Pull Request Requirements

- All CI checks must pass (lint → type-check → test → build)
- New components require tests and Storybook stories
- Changes to i18n require translation updates
- Performance impact should be minimal

## Key Architecture Patterns

### When Adding New Components

- **Follow slice architecture**: Page-specific components go in `app/[locale]/page-name/components/`
- **Use TypeScript**: Strict typing for all props and state
- **Component variants**: Use `class-variance-authority` for styling variants
- **Theme support**: Integrate with existing ThemeContext when applicable
- **Internationalization**: Use next-intl for any user-facing text
- **Testing**: Include unit tests and Storybook stories
- **Performance**: Consider animation performance and bundle impact
- **shadcn/ui integration**: Leverage shadcn/ui components for consistency

### When Modifying Existing Code

- **Preserve patterns**: Follow existing component structure
- **Maintain tests**: Update tests when changing behavior
- **Check translations**: Ensure i18n keys still match
- **Verify accessibility**: Maintain ARIA attributes and semantic HTML

### State Management Approach

- **Context for global state**: Use React Context for theme, locale
- **Local state for components**: useState/useReducer for component-specific state
- **Performance optimization**: Use requestAnimationFrame for scroll/animation effects

## Development Guidelines

### Core Principles

- **Type safety first**: Use TypeScript strictly, avoid `any` types
- **Performance matters**: Optimize animations, images, and bundle size
- **Accessibility required**: Follow WCAG guidelines, test with screen readers
- **Internationalization ready**: Support multi-language from the start
- **Test-driven approach**: Write tests for new functionality
- **Properly CopyRight**: All new files should include "Copyright Todd LLC, All rights reserved" as a comment at the top
- **Comments**: Every exported component, page, and util should have proper jsdocs. Private helper methods, components and .storybook.tsx files are excluded from this principle.
- **Properly CopyRight**: All new files should include "Copyright Todd LLC, All rights reserved" as a comment at the top
- **Comments**: Every exported component, page, and util should have proper jsdocs. Private helper methods, components and .storybook.tsx files are excluded from this principle.

### When Making Changes

- **Understand context**: Review related files before making changes
- **Follow patterns**: Use existing component and utility patterns
- **Consider impact**: Think about performance, accessibility, and i18n
- **Document changes**: Update Storybook stories for UI changes
- **Validate thoroughly**: Run full validation suite before submitting
- **Use proper logging**: Import and use `@/lib/logger` instead of console methods

### Logging Usage Examples

```tsx
import { logger } from '@/lib/logger';

// For debugging and development info (only shows in dev/local)
logger.warn('Component state changed:', { newState });
logger.warn('[GPC] Privacy signal detected');

// For critical errors that need attention (always shows, even in production)
logger.error('API call failed:', error);
logger.error('Critical authentication error');

// console.log, console.info, console.debug can still be used for development, though they should be removed before PRs
```

### Getting Help

- **Always ask for context**: Always request clarification on requirements and questions
- **Provide options**: Present multiple implementation approaches
- **Explain tradeoffs**: Discuss pros/cons of different solutions
- **Consider maintenance**: Choose solutions that are easy to maintain
