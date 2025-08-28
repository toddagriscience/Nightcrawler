// Copyright Todd LLC, All rights reserved.

import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Geist, Geist_Mono } from 'next/font/google';

import { ThemeProvider } from '@/context/ThemeContext';
import { fontVariables } from '@/lib/fonts';
import { routing } from '@/i18n/config';
import { env } from '@/lib/env';

import { ClerkAuthProvider, ConvexClientProvider, Header, Footer, ScrollToTop, SmoothScroll } from '@/components/ui';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  try {
    const messages = await getMessages({ locale });

    return (
      <html lang={locale}>
        <body
          className={`${fontVariables} ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ClerkAuthProvider>
            <ConvexClientProvider>
              <NextIntlClientProvider messages={messages}>
                <ThemeProvider>
                  <SmoothScroll>
                    <ScrollToTop />
                    <Header />
                    {children}
                    <Footer />
                  </SmoothScroll>
                </ThemeProvider>
              </NextIntlClientProvider>
            </ConvexClientProvider>
          </ClerkAuthProvider>
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
    notFound();
  }
}
