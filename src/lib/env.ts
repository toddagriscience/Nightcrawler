//Copyright Todd LLC, All rights reserved.

// Environment configuration
export const env = {
  // Environment detection
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',

  // Base URL for canonical links and metadata
  baseUrl:
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : `https://${process.env.NEXT_PUBLIC_PRODUCTION_DOMAIN || 'toddagriscience.com'}`),

  // Convex configuration
  convexUrl: process.env.NEXT_PUBLIC_CONVEX_URL!,

  // Clerk authentication
  clerkPublishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || 'pk_test_Z3JlYXQtbG9uZ2hvcm4tNy5jbGVyay5hY2NvdW50cy5kZXYk',
} as const;
