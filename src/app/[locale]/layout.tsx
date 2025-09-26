// Copyright Todd LLC, All rights reserved.

import type { Metadata, Viewport } from 'next';
import { Locale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/config';
import { env } from '@/lib/env';
import { fontVariables } from '@/lib/fonts';
import { AUTH_COOKIE_NAME } from '@/middleware/auth';

import {
  AuthToggle,
  FadeIn,
  SmoothScroll,
  ThemeReset,
} from '@/components/common';
import { Footer, Header } from '@/components/landing';
import { ThemeProvider } from '@/context/theme/ThemeContext';

/**
 * Generate metadata for each locale
 * @param {Promise<{ locale: string }>} params - The parameters for the function
 * @returns {Promise<Metadata>} - The metadata for the locale
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
    metadataBase: new URL(env.baseUrl),
    alternates: {
      canonical: `${env.baseUrl}/${locale}`,
      languages: Object.fromEntries([
        ...routing.locales.map((loc) => [loc, `${env.baseUrl}/${loc}`]),
        ['x-default', `${env.baseUrl}/${routing.defaultLocale}`],
      ]),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${env.baseUrl}/${locale}`,
      siteName: 'Todd Agriscience',
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#F8F5EE',
};

// Generate static params for all supported locales
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

/**
 * Locale layout for the app
 * @param {React.ReactNode} children - The children of the locale layout
 * @param {Promise<{ locale: string }>} params - The parameters for the function
 * @returns {React.ReactNode} - The locale layout
 */
export default async function LocaleLayout({
  children,
  params,
}: RootLayoutProps) {
  // Check if user is authenticated - if so, skip locale layout
  const cookieStore = await cookies();
  const authCookie = cookieStore.get(AUTH_COOKIE_NAME);
  const isAuthenticated = authCookie?.value === 'true';

  const { locale } = await params;

  // Validate locale - if invalid, trigger 404 regardless of auth status
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  if (isAuthenticated) {
    // Let the root layout handle authenticated users
    return children;
  }

  try {
    const messages = await getMessages({ locale });

    return (
      <html lang={locale}>
        <body className={fontVariables}>
          <NextIntlClientProvider messages={messages}>
            <SmoothScroll>
              <ThemeProvider>
                <ThemeReset />
                <AuthToggle />
                <Header />
                <FadeIn>{children}</FadeIn>
                <Footer />
              </ThemeProvider>
            </SmoothScroll>
          </NextIntlClientProvider>
        </body>
      </html>
    );
  } catch (error) {
    console.error('❌ [layout.tsx] Error in LocaleLayout:', error);
    console.error('❌ [layout.tsx] Error details:', {
      name: (error as Error).name,
      message: (error as Error).message,
      stack: (error as Error).stack,
    });
    // If there's an error loading messages, also trigger 404
    notFound();
  }
}
