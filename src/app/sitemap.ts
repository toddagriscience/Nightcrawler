import featuredNews from '@/data/featured-news.json';
import { routing } from '@/i18n/config';
import { env } from '@/lib/env';
import type { MetadataRoute } from 'next';
import { Languages } from 'next/dist/lib/metadata/types/alternative-urls-types';

const baseUrl = env.baseUrl;

// Revalidate sitemap every 24 hours (86400 seconds)
export const revalidate = 86400;

/**
 * Generates the complete sitemap for the Todd Agriscience website
 * Combines static pages and dynamic news articles with proper internationalization
 * @returns {MetadataRoute.Sitemap} Complete sitemap entries with hreflang alternates
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap =
    getStaticSitemap().concat(getNewsSitemap());

  return sitemapEntries;
}

/**
 * Generates sitemap entries for static pages (homepage, about, etc.)
 * Includes internationalization support and proper SEO priorities
 * @returns {MetadataRoute.Sitemap} Sitemap entries for static pages
 */
function getStaticSitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  const staticPages = ['', '/who-we-are'];
  const excludedPages = ['/login', '/admin', '/api', '/_next', '/cdn-cgi'];

  for (const locale of routing.locales) {
    for (const page of staticPages) {
      // Skip excluded pages
      if (excludedPages.includes(page)) {
        continue;
      }

      const url = `${baseUrl}/${locale}${page}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: getSupportedLanguages(page),
        },
      });
    }
  }

  return sitemapEntries;
}

/**
 * Generates sitemap entries for news articles from featured-news.json
 * Includes error handling and validation for malformed data
 * @returns {MetadataRoute.Sitemap} Sitemap entries for news articles
 */
function getNewsSitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  try {
    for (const locale of routing.locales) {
      for (const newsArticle of featuredNews.newsArticles) {
        if (!newsArticle.link || !newsArticle.date) {
          console.warn(
            `Skipping news article with missing link or date:`,
            newsArticle
          );
          continue;
        }

        const url = `${baseUrl}/${locale}/${newsArticle.link}`;

        const lastModified = parseArticleDate(newsArticle.date);

        sitemapEntries.push({
          url,
          lastModified,
          changeFrequency: 'weekly',
          priority: 0.7,
          alternates: {
            languages: getSupportedLanguages(`/${newsArticle.link}`),
          },
        });
      }
    }
  } catch (error) {
    console.error('Error generating news sitemap:', error);
  }

  return sitemapEntries;
}

/**
 * Parses article dates with fallback handling for various formats
 * Supports formats like "Apr 15, 2025" and ISO strings
 * @param {string} dateString - The date string to parse
 * @returns {string} ISO date string or current date as fallback
 */
function parseArticleDate(dateString: string): string {
  try {
    // Try parsing the date string directly first
    let articleDate = new Date(dateString);

    // If that fails, try parsing common formats
    if (isNaN(articleDate.getTime())) {
      // Try parsing formats like "Apr 15, 2025", "Mar 30, 2025"
      const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];

      for (let i = 0; i < monthNames.length; i++) {
        if (dateString.includes(monthNames[i])) {
          articleDate = new Date(dateString);
          break;
        }
      }
    }

    // Return ISO string if valid, otherwise use current date
    return isNaN(articleDate.getTime())
      ? new Date().toISOString()
      : articleDate.toISOString();
  } catch (error) {
    console.warn(`Failed to parse date "${dateString}":`, error);
    return new Date().toISOString();
  }
}

/**
 * Generates hreflang alternate URLs for all supported locales
 * Includes x-default for better international SEO
 * @param {string} page - The page path (with or without leading slash)
 * @returns {Languages<string>} Object mapping locales to URLs
 */
function getSupportedLanguages(page: string): Languages<string> {
  const languages: { [key: string]: string } = {};
  routing.locales.forEach((loc) => {
    // Ensure proper path separator - page might already start with '/' or be empty
    const cleanPage = page.startsWith('/') ? page : `/${page}`;
    languages[loc] = `${baseUrl}/${loc}${cleanPage}`;
  });

  // Add x-default for better international SEO
  languages['x-default'] =
    `${baseUrl}/${routing.defaultLocale}${page.startsWith('/') ? page : `/${page}`}`;

  return languages;
}
