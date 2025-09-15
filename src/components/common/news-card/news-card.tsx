// Copyright Todd LLC, All rights reserved.

import { Link } from '@/i18n/config';
import PlaceholderImage from '../placeholder-image/placeholder-image';
import NewsCardProps from './types/news-card';

/**
 * A news article card component that displays article information with image, source, date, and headline.
 *
 * Features:
 * - Responsive design with flexible width based on screen size
 * - Integrated image with fallback placeholder support
 * - Dark mode support with automatic contrast text color
 * - Internationalized Link component for locale-aware navigation
 * - Smooth color transitions
 * - Rounded corners and clean typography
 * - Hover effects and accessibility features
 *
 * @param image - URL of the news article image
 * @param source - Name of the news source (e.g., "CNN", "BBC")
 * @param date - Publication date in readable format (e.g., "Apr 15, 2025")
 * @param headline - Main headline text of the news article
 * @param isDark - Apply dark theme styling with contrast text (default: false)
 * @param className - Additional CSS classes to apply to the card container
 * @param link - URL path for the article link (default: "/news")
 * @returns A clickable news card component
 *
 * @example
 * ```tsx
 * <NewsCard
 *   image="/images/news-article.jpg"
 *   source="Tech Times"
 *   date="Dec 15, 2024"
 *   headline="Revolutionary AI Technology Changes Everything"
 *   isDark={false}
 *   link="/news/ai-revolution"
 * />
 * ```
 */
const NewsCard = ({
  image,
  source,
  date,
  excerpt,
  isDark = false,
  className = '',
  slug = '',
  title,
}: NewsCardProps) => {
  const link = '/news/articles/' + slug;

  return (
    <div
      className={`text-foreground max-w-full min-w-[90%] px-4 py-4 font-light transition-colors duration-300 md:min-w-[45%] lg:min-w-[30%] ${className}`}
    >
      <Link href={link}>
        <div className="overflow-hidden rounded-xl bg-transparent">
          <PlaceholderImage
            src={image.url}
            alt={image.alt}
            width={800}
            height={600}
            className="h-auto w-full object-cover"
            fallbackText="News Image"
            isDark={isDark}
          />
          <div className="p-4">
            <h2>{title}</h2>
            <p className="mb-1 text-xl">
              {source} <span className="mx-1">•</span> {date}
            </p>
            <h3 className="text-2xl">{excerpt}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
