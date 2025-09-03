// Copyright Todd LLC, All rights reserved.

import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/config';

/**
 * Enhanced middleware for internationalization and privacy controls
 * Handles Global Privacy Control (GPC) signals and privacy preferences
 * @returns {Middleware} - The middleware
 */
const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Check for Global Privacy Control (GPC) signal
  const gpcHeader = request.headers.get('Sec-GPC');
  const hasGPCEnabled = gpcHeader === '1';

  // Run the internationalization middleware first
  const response = intlMiddleware(request);

  // If GPC is enabled, add privacy headers and disable non-essential cookies
  if (hasGPCEnabled) {
    // Add headers to inform downstream components about GPC status
    response.headers.set('x-gpc-detected', '1');
    response.headers.set('x-privacy-mode', 'strict');

    // Remove/prevent non-essential cookies (preserve essential ones like locale, theme)
    const cookiesToRemove = [
      'analytics',
      'tracking',
      'marketing',
      'advertising',
      'social-media',
      'performance',
    ];

    cookiesToRemove.forEach((cookieName) => {
      if (request.cookies.has(cookieName)) {
        response.cookies.delete(cookieName);
      }
    });

    // Add additional privacy headers
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('X-Privacy-Control', 'gpc-enabled');
  } else {
    // Standard privacy headers for non-GPC users
    response.headers.set('x-privacy-mode', 'standard');
  }

  return response;
}

/**
 * Configuration object for the middleware.
 * Contains the `matcher` property to specify which routes the middleware applies to.
 */

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|es)/:path*'],
};
