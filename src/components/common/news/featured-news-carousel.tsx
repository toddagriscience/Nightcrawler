// Copyright Todd LLC, All rights reserved.

import { Carousel, NewsCard } from '@/components/common';
import NewsCardProps from '../news-card/types/news-card';

/*
 * A carousel for featured news.
 * @param {Props} items - A list of `NewsCardProps`
 */
export function FeaturedNewsCarousel({
  items = [],
}: {
  items: NewsCardProps[];
}) {
  return (
    <Carousel isDark={true} showDots={true}>
      {items.map((article) => (
        <NewsCard
          title={article.title}
          key={article.title}
          isDark={false}
          image={{ url: article.image.url, alt: article.image.alt }}
          source={article.source}
          date={article.date}
          excerpt={article.excerpt}
          link={article.link}
        />
      ))}
    </Carousel>
  );
}
