// Copyright Todd LLC, All rights reserved.

// Mock next-intl/middleware to return a simple function that returns a Response-like object
jest.mock('next-intl/middleware', () => {
  return jest.fn(() =>
    jest.fn(() => ({
      headers: {
        set: jest.fn(),
      },
      cookies: {
        delete: jest.fn(),
      },
    }))
  );
});

// Mock the routing config
jest.mock('./i18n/config', () => ({
  routing: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localePrefix: 'always',
    localeDetection: false,
  },
}));

describe('Middleware', () => {
  it('should export a function as default', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const middleware = require('./middleware').default;
    expect(typeof middleware).toBe('function');
  });

  it('should call the middleware function', async () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const middleware = require('./middleware').default;

    // Mock NextRequest object
    const mockRequest = {
      headers: {
        get: jest.fn(() => null), // Default to no GPC header
      },
      cookies: {
        has: jest.fn(() => false),
      },
    };

    const result = await middleware(mockRequest);
    expect(result).toBeDefined();
    expect(result.headers).toBeDefined();
  });
});

describe('Middleware Config', () => {
  it('should have correct matcher configuration', async () => {
    const middlewareModule = await import('./middleware');
    const { config } = middlewareModule;

    expect(config).toBeDefined();
    expect(config.matcher).toBeDefined();
    expect(Array.isArray(config.matcher)).toBe(true);
    // New matcher pattern for internationalized pathnames
    expect(config.matcher).toContain('/');
  });
});
