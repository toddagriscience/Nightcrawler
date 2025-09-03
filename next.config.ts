// Copyright Todd LLC, All rights reserved.

import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

// Enhanced security headers configuration for privacy and data leak prevention
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload', // Force HTTPS for 1 year
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Server',
    value: 'Todd-Server/1.0', // Hide server information
  },
  {
    key: 'X-Permitted-Cross-Domain-Policies',
    value: 'none',
  },
  {
    key: 'Cross-Origin-Embedder-Policy',
    value: 'credentialless', // More flexible than require-corp, allows images/media
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin', // Enhanced privacy - prevents URL data leaks
  },
  {
    key: 'Permissions-Policy',
    value: [
      'accelerometer=()', // Disable accelerometer access
      'camera=()', // Disable camera access
      'geolocation=()', // Disable geolocation
      'gyroscope=()', // Disable gyroscope
      'magnetometer=()', // Disable magnetometer
      'microphone=()', // Disable microphone
      'payment=()', // Disable payment API
      'usb=()', // Disable USB access
      'interest-cohort=()', // Disable FLoC/Topics API for privacy
      'browsing-topics=()', // Disable Topics API (successor to FLoC)
      'attribution-reporting=()', // Disable Attribution Reporting API
    ].join(', '),
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'", // Only allow resources from same origin
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'", // Next.js requires unsafe-eval and unsafe-inline
      "style-src 'self' 'unsafe-inline'", // Allow inline styles for CSS-in-JS
      "img-src 'self' blob: data:", // Allow images from self, blob URLs, and data URLs
      "font-src 'self'", // Only allow fonts from same origin - prevents Google Fonts data leaks
      "connect-src 'self' https://*.posthog.com", // Allow PostHog analytics in cookieless mode
      "media-src 'self'", // Restrict media sources
      "object-src 'none'", // Block object/embed/applet
      "base-uri 'self'", // Restrict base tag URLs
      "form-action 'self'", // Restrict form submissions
      "frame-ancestors 'none'", // Prevent embedding in frames
      "frame-src 'none'", // Prevent embedding frames
      'upgrade-insecure-requests', // Upgrade HTTP to HTTPS
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        // Additional headers for font files to prevent data leaks
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },

  // Disable powered-by header to reduce information disclosure
  poweredByHeader: false,

  // Enable compression for better performance
  compress: true,

  // Disable X-Powered-By header
};

export default withNextIntl(nextConfig);
