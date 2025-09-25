// Copyright Todd LLC, All rights reserved.

import NewsCardProps from '@/components/common/news-card/types/news-card';
import { useTranslations } from 'next-intl';

/**
 * Hook for getting all of Todd's news. Currently gets news by utilizing i18n. This is a hook and not a generic util function because of the use of `useTranslations`.
 * TODO: Replace JSON data with database connection for dynamic content management
 * @typedef {Object} News
 * @property {NewsCardProps[]} featuredNews - The featured news as defined in this function
 * @property {NewsCardProps[]} allNews - General news + featured news
 */
export function useNews(): {
  featuredNews: NewsCardProps[];
  allNews: NewsCardProps[];
} {
  const t = useTranslations('articleExcerpts');

  const articleKeys = [
    'toddAnniversary',
    'celebratingTransformation',
    'regenerativeSeedsApril',
    'partnershipAmbrook',
    'regenerativeSeedLaunch',
    'regenerativeSeedsMarch',
    'pipelineToProspect',
    'partnershipWhyRegenerative',
    'partnershipFarmlink',
    'launchToddAgriscience',
    'introToddAgriscience',
  ];

  const featuredNews: NewsCardProps[] = [];

  const allNews: NewsCardProps[] = articleKeys.map((key) => {
    const article = {
      title: t(`${key}.title`),
      excerpt: t(`${key}.excerpt`),
      date: t(`${key}.date`),
      link: t(`${key}.link`),
      source: t(`${key}.source`),
      image: {
        url: t(`${key}.image.url`),
        alt: t(`${key}.image.alt`),
      },
    };

    if (t(`${key}.featured`).toLowerCase() == 'true') {
      featuredNews.push(article);
    }

    return article;
  });

  return { featuredNews: featuredNews, allNews: allNews };
}
