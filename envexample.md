```env
# Internationalization and Domain Configuration
# Copy this file to .env.local and fill in your values

# Production domain (required for production)
# NEXT_PUBLIC_PRODUCTION_DOMAIN=toddagriscience.com

# Staging domain (optional)
# NEXT_PUBLIC_STAGING_DOMAIN=staging.toddagriscience.com

# Base URL for canonical links and metadata (optional, auto-detected)
# NEXT_PUBLIC_BASE_URL=https://toddagriscience.com

# Locale detection settings
# NEXT_LOCALE=en  # Force default locale (optional)

# Other environment variables
# NODE_ENV=development


# Environment Variables Example
# Copy this file to .env.local for local development

# ====================
# NEXT.JS CONFIGURATION
# ====================

# Application Environment (development, staging, production)
NODE_ENV=development

# ====================
# DOMAIN CONFIGURATION
# ====================

# Production domain for canonical URLs and metadata
NEXT_PUBLIC_PRODUCTION_DOMAIN=toddagriscience.com

# Staging domain (optional)
# NEXT_PUBLIC_STAGING_DOMAIN=staging.toddagriscience.com

# Base URL for metadata, OG tags, and canonical links
# Automatically determined based on environment if not set
# NEXT_PUBLIC_BASE_URL=https://toddagriscience.com

# ====================
# ANALYTICS & TRACKING (Optional)
# ====================

# Google Analytics Measurement ID
# NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager ID
# NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Hotjar Site ID
# NEXT_PUBLIC_HOTJAR_SITE_ID=1234567

# ====================
# AUTHENTICATION (Future)
# ====================

# NextAuth.js configuration (when adding auth)
# NEXTAUTH_URL=http://localhost:3000
# NEXTAUTH_SECRET=your-secret-key-here

# OAuth Providers (examples for future auth implementation)
# AUTH_GITHUB_ID=your-github-oauth-app-id
# AUTH_GITHUB_SECRET=your-github-oauth-app-secret
# AUTH_GOOGLE_ID=your-google-oauth-client-id
# AUTH_GOOGLE_SECRET=your-google-oauth-client-secret

# ====================
# DATABASE (Future)
# ====================

# Database URL for user data, content management, etc.
# DATABASE_URL=postgresql://username:password@localhost:5432/toddagriscience
# DATABASE_URL=sqlite:./dev.db

# ====================
# CMS & CONTENT (Optional)
# ====================

# Prismic CMS configuration (if using headless CMS)
# PRISMIC_REPOSITORY_NAME=your-prismic-repo
# PRISMIC_ACCESS_TOKEN=your-prismic-access-token

# Sanity CMS configuration (alternative)
# NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
# NEXT_PUBLIC_SANITY_DATASET=production
# SANITY_API_TOKEN=your-sanity-token

# ====================
# EMAIL & NOTIFICATIONS (Future)
# ====================

# Email service configuration (for contact forms, notifications)
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your-email@gmail.com
# SMTP_PASS=your-app-password

# SendGrid API Key (alternative email service)
# SENDGRID_API_KEY=SG.your-sendgrid-api-key

# ====================
# EXTERNAL SERVICES (Future)
# ====================

# Third-party API keys for agricultural data, weather, etc.
# WEATHER_API_KEY=your-weather-api-key
# AGRICULTURAL_DATA_API_KEY=your-ag-data-api-key

# File storage (if using cloud storage)
# AWS_ACCESS_KEY_ID=your-aws-access-key
# AWS_SECRET_ACCESS_KEY=your-aws-secret
# AWS_REGION=us-east-1
# AWS_S3_BUCKET=your-s3-bucket-name

# ====================
# CONVEX BACKEND
# ====================

# Convex deployment URL (required for Convex integration)
# Get this from your Convex dashboard after running `npx convex dev`
NEXT_PUBLIC_CONVEX_URL=https://your-deployment-name.convex.cloud

# ====================
# CLERK AUTHENTICATION
# ====================

# Clerk publishable key (required for authentication)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Z3JlYXQtbG9uZ2hvcm4tNy5jbGVyay5hY2NvdW50cy5kZXYk

# Clerk secret key (required for server-side operations)
CLERK_SECRET_KEY=sk_test_vT2AZm1esO3rWKmb6bakgoInYDDC3ShSvB2RrP3UzX

# Clerk JWT issuer domain (required for Convex auth)
CLERK_JWT_ISSUER_DOMAIN=great-longhorn-7.clerk.accounts.dev

# ====================
# DEVELOPMENT & DEBUGGING
# ====================

# Enable debug logging
# DEBUG=true

# Disable telemetry (Next.js)
# NEXT_TELEMETRY_DISABLED=1
```
