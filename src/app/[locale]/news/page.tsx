// Copyright Todd LLC, All rights reserved.

'use client';

import { FeaturedNewsCarousel } from '@/components/common/news/featured-news-carousel';
import { LatestNewsTable } from '@/components/common/news/latest-news-table';
import { useNews } from '@/lib/utils';

/**
 * Highlighted news & general news
 * @returns {JSX.Element} - The news page
 */
export default function News() {
  const { featuredNews, allNews } = useNews();

  return (
    <div className="fadeInAnimation relative z-10 mx-auto mt-24 max-w-[80vw] pt-[calc(var(--headerHeight)+15px)] pb-4 md:pt-[calc(var(--headerHeight)+26px)] xl:overflow-x-visible">
      <h1 className="mx-auto text-center">Todd Newsroom</h1>

      <h2 className="text-slate-secondary pb-4 text-center text-2xl md:mb-0 md:text-5xl xl:text-7xl">
        Highlights
      </h2>

      <FeaturedNewsCarousel items={featuredNews} />

      <div className="mb-16">
        <h2 className="text-slate-secondary mb-10 text-2xl md:text-4xl xl:text-5xl">
          Latest News
        </h2>

        <LatestNewsTable items={allNews} />
      </div>
    </div>
  );
}
