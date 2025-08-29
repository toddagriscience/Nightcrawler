// Copyright Todd LLC, All rights reserved.
import React from 'react';
import { render, RenderOptions, act, fireEvent } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/context/theme/ThemeContext';

// Import actual messages for testing
import enMessages from '@/messages/en.json';
import esMessages from '@/messages/es.json';

/**
 * Translations type
 * @returns {Partial<Record<string, string>>} - The translations
 */
export type Translations = Partial<Record<string, string>>;

// Get actual messages for locale
const getMessagesForLocale = (locale: string) => {
  const messageMap: Record<string, typeof enMessages> = {
    en: enMessages,
    es: esMessages,
  };
  return messageMap[locale] || enMessages;
};

/**
 * Mock LocaleContext with real translations from message files
 * @param {string} locale - The locale to get the translations for
 * @param {Translations} customTranslations - The custom translations
 * @param {boolean} isLoading - Whether the translations are loading
 * @returns {any} - The mock locale context
 */
const mockLocaleContext = (
  locale: string = 'en',
  customTranslations: Translations = {},
  isLoading: boolean = false
) => {
  const actualMessages = getMessagesForLocale(locale);

  // Helper to get nested translation keys
  const getNestedValue = (
    obj: Record<string, unknown>,
    key: string
  ): unknown => {
    return key.split('.').reduce<unknown>((current, segment) => {
      if (current && typeof current === 'object' && segment in current) {
        return (current as Record<string, unknown>)[segment];
      }
      return undefined;
    }, obj);
  };

  // Translation function that uses real message structure
  const t = (key: string) => {
    // First check custom overrides
    if (customTranslations[key]) {
      return customTranslations[key];
    }

    // Then check actual messages (handle nested keys like "homepage.welcome")
    const parts = key.split('.');
    if (parts.length >= 2) {
      const namespace = parts[0];
      const messageKey = parts.slice(1).join('.');
      const namespaceMessages = (actualMessages as Record<string, unknown>)[
        namespace
      ];
      if (namespaceMessages && typeof namespaceMessages === 'object') {
        const translation = getNestedValue(
          namespaceMessages as Record<string, unknown>,
          messageKey
        );
        if (translation && typeof translation === 'string') return translation;
      }
    }

    // Fallback to key
    return key;
  };

  return {
    locale,
    setLocale: jest.fn(),
    messages: actualMessages,
    t,
    isLoading,
    loadModule: jest.fn().mockResolvedValue({}),
    loadModules: jest.fn().mockResolvedValue({}),
    preloadCritical: jest.fn().mockResolvedValue(undefined),
  };
};

/**
 * Mock framer-motion
 * @returns {object} - The mocked framer-motion
 */
jest.mock('framer-motion', () => {
  const MockMotionComponent = ({
    children,
    ...props
  }: React.HTMLProps<HTMLDivElement>) => {
    const { ...rest } = props;
    return <div {...rest}>{children}</div>;
  };

  return {
    ...jest.requireActual('framer-motion'),
    useScroll: jest.fn(() => ({ scrollYProgress: 0 })),
    useMotionValueEvent: jest.fn(),
    motion: {
      div: MockMotionComponent,
      button: MockMotionComponent,
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
  };
});

/**
 * Mock Next.js router
 * @returns {object} - The mocked Next.js router
 */
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}));

/**
 * Mock createPortal
 * @returns {object} - The mocked createPortal
 */
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (element: React.ReactNode) => element,
}));

/**
 * Create a mock LocaleContext
 * @returns {object} - The mocked LocaleContext
 */
const LocaleContext = React.createContext<
  ReturnType<typeof mockLocaleContext> | undefined
>(undefined);

// Create a mock LocaleProvider that uses our translations
const MockLocaleProvider: React.FC<{
  children: React.ReactNode;
  locale?: string;
  translations?: Translations;
  isLoading?: boolean;
}> = ({ children, locale = 'en', translations = {}, isLoading = false }) => {
  const context = mockLocaleContext(locale, translations, isLoading);
  return (
    <LocaleContext.Provider value={context}>{children}</LocaleContext.Provider>
  );
};

interface AllTheProvidersProps {
  children: React.ReactNode;
  translations?: Translations;
  isLoading?: boolean;
  locale?: string;
  useNextIntl?: boolean;
}

/**
 * Wraps components with all necessary providers for testing
 */
const AllTheProviders = ({
  children,
  translations = {},
  isLoading = false,
  locale = 'en',
  useNextIntl = true,
}: AllTheProvidersProps) => {
  if (useNextIntl) {
    // Use next-intl for new components
    const messageMap: Record<string, typeof enMessages> = {
      en: enMessages,
      es: esMessages,
    };
    const messages = messageMap[locale] || enMessages;

    return (
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider>{children}</ThemeProvider>
      </NextIntlClientProvider>
    );
  }

  // Use legacy LocaleContext for old components
  return (
    <ThemeProvider>
      <MockLocaleProvider
        locale={locale}
        translations={translations}
        isLoading={isLoading}
      >
        {children}
      </MockLocaleProvider>
    </ThemeProvider>
  );
};

/**
 * Custom render function that wraps components with all necessary providers
 * @param {React.ReactElement} ui - The component to render
 * @param {Omit<RenderOptions, 'wrapper'> & { translations?: Translations; isLoading?: boolean; locale?: string; useNextIntl?: boolean; }} options - The render options
 * @returns {ReturnType<typeof render>} - The rendered component
 */
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & {
    translations?: Translations;
    isLoading?: boolean;
    locale?: string;
    useNextIntl?: boolean;
  }
) => {
  const { translations, isLoading, locale, useNextIntl, ...renderOptions } =
    options || {};
  return render(ui, {
    wrapper: (props) => (
      <AllTheProviders
        {...props}
        translations={translations}
        isLoading={isLoading}
        locale={locale}
        useNextIntl={useNextIntl}
      />
    ),
    ...renderOptions,
  });
};

// Helper functions for different testing scenarios
export const renderWithNextIntl = (
  ui: React.ReactElement,
  locale: string = 'en',
  options?: Omit<RenderOptions, 'wrapper'>
) => customRender(ui, { ...options, locale, useNextIntl: true });

export const renderWithLegacyLocale = (
  ui: React.ReactElement,
  locale: string = 'en',
  translations?: Translations,
  options?: Omit<RenderOptions, 'wrapper'>
) => customRender(ui, { ...options, locale, translations, useNextIntl: false });

// Helper to create a test wrapper with language switcher controls
export const createTestWithLocaleControl = (
  ui: React.ReactElement,
  useNextIntl: boolean = true
) => {
  const TestWrapperComponent = () => {
    const [currentLocale, setCurrentLocale] = React.useState('en');

    const supportedLocales = [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'es', name: 'Español', flag: '🇪🇸' },
    ];

    return (
      <div>
        {/* Language Switcher Control */}
        <div
          style={{
            position: 'fixed',
            top: 10,
            right: 10,
            zIndex: 1000,
            background: 'white',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        >
          <label
            htmlFor="locale-select"
            style={{ fontSize: '12px', marginRight: '8px' }}
          >
            Language:
          </label>
          <select
            id="locale-select"
            value={currentLocale}
            onChange={(e) => setCurrentLocale(e.target.value)}
            style={{ fontSize: '12px' }}
          >
            {supportedLocales.map((locale) => (
              <option key={locale.code} value={locale.code}>
                {locale.flag} {locale.name}
              </option>
            ))}
          </select>
        </div>

        {/* Component with current locale */}
        <AllTheProviders locale={currentLocale} useNextIntl={useNextIntl}>
          {ui}
        </AllTheProviders>
      </div>
    );
  };

  return <TestWrapperComponent />;
};

/**
 * Helper function to wrap async renders in act()
 * @param {React.ReactElement} ui - The component to render
 * @param {Omit<RenderOptions, 'wrapper'> & { translations?: Record<string, string>; isLoading?: boolean; }} options - The render options
 * @returns {ReturnType<typeof customRender>} - The rendered component
 */
const renderWithAct = async (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & {
    translations?: Record<string, string>;
    isLoading?: boolean;
  }
) => {
  let result: ReturnType<typeof customRender>;
  await act(async () => {
    result = customRender(ui, options);
  });
  return result!;
};

// Re-export everything
export * from '@testing-library/react';
export { customRender as render, renderWithAct, AllTheProviders };

// Make fireEvent async for consistency
const asyncFireEvent = {
  ...fireEvent,
  click: async (element: Element) => {
    await act(async () => {
      fireEvent.click(element);
    });
  },
  keyDown: async (element: Element, options: KeyboardEventInit) => {
    await act(async () => {
      fireEvent.keyDown(element, options);
    });
  },
};

export { asyncFireEvent as fireEvent };

// Example usage:
/*
// In a test file:
import { renderWithNextIntl, createTestWithLocaleControl } from '@/test/test-utils';

// Simple test with specific locale
test('renders in Spanish', () => {
  const { getByText } = renderWithNextIntl(<MyComponent />, 'es');
  expect(getByText('Bienvenido a Todd')).toBeInTheDocument();
});

// Interactive test with language switcher
test('can switch languages', () => {
  const TestComponent = createTestWithLocaleControl(<MyComponent />);
  const { getByText, getByLabelText } = render(TestComponent);
  
  // Should start in English
  expect(getByText('Welcome to Todd')).toBeInTheDocument();
  
  // Switch to Spanish
  fireEvent.change(getByLabelText('Language:'), { target: { value: 'es' } });
  expect(getByText('Bienvenido a Todd')).toBeInTheDocument();
});

// In a Storybook story:
export const WithLanguageSwitcher = {
  render: () => createTestWithLocaleControl(<MyComponent />),
};
*/
