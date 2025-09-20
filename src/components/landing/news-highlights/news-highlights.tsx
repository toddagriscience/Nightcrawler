// Copyright Todd LLC, All rights reserved.

'use client';

import { Button, Carousel, NewsCard } from '@/components/common';
import { useTheme } from '@/context/theme/ThemeContext';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React, { useRef } from 'react';
import { Quote } from '../index';
import { NewsHighlightsProps } from './types/news-highlights';
import { useNews } from '@/lib/utils';

/**
 * News highlight card component
 * @param {NewsHighlightsProps} props - The component props
 * @returns {JSX.Element} - The news highlight card component
 */
const NewsHighlights: React.FC<NewsHighlightsProps> = ({
  carouselRef: externalRef,
  isDark: propIsDark,
}) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const carouselRef = externalRef || internalRef;
  const { isDark: contextIsDark } = useTheme();
  const t = useTranslations('common');
  const tNews = useTranslations('homepage');

  const { featuredNews } = useNews();

  // Use prop isDark if provided, otherwise use context
  const isDark = propIsDark !== undefined ? propIsDark : contextIsDark;

  return (
    <motion.div
      ref={carouselRef}
      className="flex h-fit w-full flex-col rounded-2xl bg-[#CCC5B5] px-8 lg:px-28"
      animate={{
        backgroundColor: isDark ? '#2A2727' : '#CCC5B5',
        color: isDark ? '#FDFDFB' : '#2A2727',
      }}
    >
      <section id="news-carousel" className="flex flex-col" role="region">
        <div className="mt-32 mb-8 flex flex-row items-start justify-between font-light">
          <h1 className="text-3xl tracking-tight lg:text-8xl">
            {tNews('news.news_highlights')}
          </h1>
          <Button
            href="/news"
            text={t('buttons.view_all')}
            variant="outline"
            size="lg"
            isDark={isDark}
            className="hidden self-end md:flex"
          />
        </div>

        <div className="mb-8">
          <Carousel isDark={isDark} showDots={true} loop={true}>
            {featuredNews.map((article) => (
              <NewsCard
                title={article.title}
                key={article.link}
                isDark={isDark}
                image={{ url: article.image.url, alt: article.image.alt }}
                source={article.source}
                date={article.date}
                excerpt={article.excerpt}
                link={article.link}
              />
            ))}
          </Carousel>
        </div>

        <Button
          href="/news"
          text={t('buttons.view_all')}
          variant="outline"
          size="md"
          isDark={isDark}
          className="mt-4 mb-32 flex self-center md:hidden"
        />
      </section>

      <Quote isDark={isDark} />
    </motion.div>
  );
};

export default NewsHighlights;
