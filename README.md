# Todd Agriscience

A modern, scalable Next.js website for Todd Agriscience with comprehensive development infrastructure and smooth user experience.

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 18.0.0 or higher
- **npm**: 8.0.0 or higher

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/toddagriscience/Nightcrawler.git
   cd Nightcrawler
   ```

2. **Use correct Node.js version** (if using nvm)

   ```bash
   nvm use
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Setup environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

6. **Open in browser**

   ```
   http://localhost:3000
   ```

7. **Start Storybook**

   ```
   npm run storybook
   ```

8. **Open Storybook in browser**
   ```
   http://localhost:6006
   ```

### First-Time Setup Verification

Run the full validation pipeline to ensure everything works:

```bash
npm run validate
```

This will run: format check → type check → lint → unit tests → build

## 📦 Development Scripts

### Core Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server

### Quality Assurance

- `npm run ci` - **Complete validation**: type-check → lint → unit tests → build
- `npm run validate` - **Full pipeline**: format:check → ci
- `npm run type-check` - TypeScript type checking
- `npm run lint` - ESLint code quality check
- `npm run lint:fix` - Auto-fix ESLint issues

### Testing

- `npm test` - Run Jest unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run test:e2e:ui` - Run E2E tests with UI

### Code Formatting

- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Component Development

- `npm run storybook` - Start Storybook component explorer
- `npm run build-storybook` - Build Storybook for production

## 🏗️ Architecture

### Tech Stack

#### Core Framework

- **Next.js 15** with App Router & Turbopack
- **TypeScript** with strict type checking
- **Tailwind CSS v4** with custom brand configuration
- **React 19** with modern hooks and patterns

#### UI Component System

- **shadcn/ui** integration with Radix UI primitives
- **class-variance-authority** for component variants
- **Lucide React** for consistent iconography
- **Radix UI Slot** for composition patterns
- **clsx & tailwind-merge** for conditional styling

#### Internationalization

- **next-intl v4.3** for multi-language support (en, es)
- **Smart locale detection** from browser settings and localStorage
- **Type-safe translations** with parameter interpolation
- **Middleware-based routing** with domain support

#### Animation & UX

- **Framer Motion v12.23** for component animations
- **Lenis v1.0** for buttery smooth scrolling
- **Embla Carousel** for interactive content carousels
- **Dynamic header** with scroll-based state changes
- **Advanced theme system** with smooth transitions

#### Fonts & Assets

- **Custom fonts** (Neue Haas Unica, Utah WGL Condensed)
- **Optimized assets** with next/image and next/font

### Development Infrastructure

#### Testing Stack

- **Unit Testing**: Jest v30 + React Testing Library v16.3
- **Component Testing**: Storybook v9.1 with interaction testing
- **Coverage**: Jest coverage reports with comprehensive collection
- **Test Setup**: Custom test utilities with i18n support

#### Code Quality

- **Linting**: ESLint v9 with Next.js and Prettier configs
- **Formatting**: Prettier v3.6 with automated formatting
- **Type Checking**: TypeScript v5 with strict mode
- **Pre-commit**: Husky v9.1 + lint-staged v16.1
- **CI/CD**: Comprehensive GitHub Actions pipeline

#### Documentation & Development

- **Storybook v9.1**: Component library with accessibility addon
- **Hot Reload**: Turbopack for faster development
- **Path Aliases**: `@/` alias for clean imports

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router (slice architecture)
│   ├── [locale]/          # Internationalized pages with layout
│   │   ├── [...rest]/     # Catch-all route for dynamic pages
│   │   ├── page.tsx       # Homepage
│   │   └── layout.tsx     # Locale-specific layout
│   ├── globals.css        # Global styles with Lenis setup
│   └── layout.tsx         # Root layout with providers
├── components/             # React components organized by usage
│   ├── common/            # Reusable components
│   │   ├── button/        # Custom button with variants & types
│   │   ├── carousel/      # Embla carousel component
│   │   ├── locale-switcher/ # Language selection component
│   │   ├── news-card/     # News article card component
│   │   ├── placeholder-image/ # Image placeholder component
│   │   └── smooth-scroll/ # Smooth scroll wrapper
│   ├── landing/           # Homepage-specific components
│   │   ├── footer/        # Landing page footer
│   │   ├── header/        # Landing page header with navigation
│   │   ├── hero/          # Hero section component
│   │   ├── news-highlights/ # Combined news + quote card
│   │   ├── page/          # Landing page layout
│   │   ├── quote/         # Quote/About section
│   │   └── scroll-shrink-wrapper/ # Scroll animation wrapper
│   └── ui/                # shadcn/ui components
│       └── button.tsx     # shadcn/ui button component
├── context/               # React contexts
│   └── theme/             # Theme context with types
│       ├── ThemeContext.tsx # Theme and dark mode context
│       └── types/         # Theme-related TypeScript types
├── data/                  # Static data files
│   └── featured-news.json # Featured news articles data
├── i18n/                  # Internationalization config
│   ├── config.ts          # i18n configuration
│   └── request.ts         # Server-side i18n utilities
├── lib/                   # Utility functions
│   ├── env.ts             # Environment configuration
│   ├── fonts.ts           # Custom font loading
│   ├── locale-utils.ts    # Locale helper functions
│   ├── locales.ts         # Locale definitions
│   ├── logger.ts          # Conditional logging utility
│   ├── metadata.ts        # SEO metadata utilities
│   ├── scroll-to-top.tsx  # Scroll to top component
│   └── utils.ts           # shadcn/ui utility functions
├── messages/              # Translation JSON files
│   ├── en.json            # English translations
│   └── es.json            # Spanish translations
├── test/                  # Testing utilities
│   └── test-utils.tsx     # React Testing Library setup
├── types/                 # Global TypeScript types
└── middleware.ts          # next-intl middleware
```

### Slice Architecture

For new pages, components are co-located with the page:

```
app/
├── [locale]/
│   ├── about/
│   │   ├── components/     # About page specific components
│   │   │   ├── hero/
│   │   │   │   ├── types/
│   │   │   │   │   └── hero.ts
│   │   │   │   ├── hero.tsx
│   │   │   │   ├── hero.test.tsx
│   │   │   │   └── hero.stories.tsx
│   │   │   └── index.ts    # Barrel export
│   │   └── page.tsx        # About page
│   └── contact/
│       ├── components/     # Contact page specific components
│       └── page.tsx        # Contact page
```

## 🎨 Features

### Internationalization (i18n)

- **Multi-language Support**: English and Spanish with extensible architecture
- **Automatic Locale Detection**: Browser language detection with localStorage persistence
- **SEO Optimization**: Hreflang tags and locale-specific metadata
- **Type-safe Translations**: Strongly typed translation keys and parameters
- **Fallback System**: Graceful fallback to default locale for missing translations

### User Experience

- **Smooth Scrolling**: Lenis-powered buttery smooth scrolling experience
- **Dynamic Animations**: Framer Motion scroll-based animations
- **Interactive Carousels**: Embla Carousel for content presentation
- **Component System**: shadcn/ui with Radix UI primitives for consistency
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Theme System**: Advanced theme context with smooth transitions
- **Performance**: Optimized fonts, images, and bundle splitting

### SEO & Accessibility

- **Comprehensive SEO**: OpenGraph, Twitter cards, structured data
- **Locale-aware Metadata**: Dynamic meta tags for each language
- **Accessibility**: WCAG compliant with ARIA labels and semantic HTML
- **Search Engine Optimization**: Sitemap, robots.txt, and hreflang implementation

### Development Experience

- **Component Library**: Comprehensive Storybook documentation with accessibility testing
- **Type Safety**: Full TypeScript coverage with strict checking
- **Component Variants**: class-variance-authority for consistent styling patterns
- **UI System**: shadcn/ui integration for rapid component development
- **Testing**: Co-located tests with high coverage requirements
- **Code Quality**: Automated linting, formatting, and type checking
- **Slice Architecture**: Page-specific component organization for maintainability
- **Production Logging**: Environment-aware logging utility for clean production builds

## 🧪 Testing Strategy

### Test Coverage

- **Unit Tests**: 9 comprehensive test suites covering components and utilities
- **Component Tests**: Co-located test files with React Testing Library
- **Integration Tests**: Middleware and context testing
- **Accessibility**: Built-in a11y testing in Storybook

### Test Configuration

- **Jest Setup**: Custom configuration with next-intl support
- **Coverage Reports**: HTML, LCOV, and text formats
- **Test Utilities**: Custom render functions with providers
- **Mock Setup**: Comprehensive mocking for external dependencies
- **CI Integration**: Automated testing in GitHub Actions

## 🚀 Deployment

The site is optimized for deployment on Vercel with:

- Automatic builds on Git push
- Preview deployments for pull requests
- Edge runtime optimization
- Image optimization with Next.js

```bash
# Production build
npm run build

# Validate before deployment
npm run validate
```

## 🔧 Configuration

### Environment Variables

The project includes comprehensive environment variable examples. Copy the example file and customize as needed:

```bash
cp .env.example .env.local
```

Key variables include:

- **NEXT_PUBLIC_PRODUCTION_DOMAIN**: Production domain for metadata
- **NODE_ENV**: Environment (development/staging/production)
- **Analytics IDs**: Google Analytics, GTM, Hotjar (optional)
- **Future expansion**: Auth, database, CMS, email services

See `.env.example` for complete documentation of all available variables.

### Customization

#### Styling & Branding

- **Global Styles**: Edit `src/app/globals.css` for brand colors and theme variables
- **Component Styles**: Tailwind CSS classes with custom configuration
- **Typography**: Custom font loading with optimized performance

#### Internationalization

- **Add Languages**: Extend `src/lib/env.ts` and add translation files in `src/messages/`
- **Translations**: Update JSON files in `src/messages/` for new content
- **Locale Configuration**: Modify middleware and request configuration

#### Components & Features

- **shadcn/ui Components**: Add new shadcn/ui components in `src/components/ui/`
- **Global Components**: Add reusable components in `src/components/common/`
- **Page Components**: Use slice architecture - add components in `app/[locale]/page-name/components/`
- **Landing Page**: Current landing components remain in `src/components/landing/`
- **Contexts**: Create new contexts in `src/context/` for global state
- **Utilities**: Add helper functions in `src/lib/` with proper TypeScript types
- **Logging**: Use `@/lib/logger` instead of console methods for environment-aware logging
- **Data**: Add static data files in `src/data/` for JSON content

## 📝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run validate` to ensure quality
4. Submit a pull request

## 📄 License

Private - Todd Agriscience, Inc.
