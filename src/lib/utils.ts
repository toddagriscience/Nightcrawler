// Copyright Todd LLC, All rights reserved.

import NewsCardProps from '@/components/common/news-card/types/news-card';
import { clsx, type ClassValue } from 'clsx';
import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to combine class names with Tailwind CSS class merging
 * Necessary for Shadcn UI compatibility with Tailwind CSS.
 * @param {ClassValue[]} inputs - Array of class values to merge
 * @returns {string} - Merged class string with Tailwind conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

  // As far as I'm aware, this is the best way to do this. See https://next-intl.dev/docs/usage/messages#arrays-of-messages
  const featuredNews: NewsCardProps[] = [
    {
      title: t('toddAnniversary.title'),
      excerpt: t('toddAnniversary.excerpt'),
      date: t('toddAnniversary.date'),
      link: t('toddAnniversary.link'),
      source: t('toddAnniversary.source'),
      image: {
        url: t('toddAnniversary.image.url'),
        alt: t('toddAnniversary.image.alt'),
      },
    },
    {
      title: t('celebratingTransformation.title'),
      excerpt: t('celebratingTransformation.excerpt'),
      date: t('celebratingTransformation.date'),
      link: t('celebratingTransformation.link'),
      source: t('celebratingTransformation.source'),
      image: {
        url: t('celebratingTransformation.image.url'),
        alt: t('celebratingTransformation.image.alt'),
      },
    },
    {
      title: t('regenerativeSeedsApril.title'),
      excerpt: t('regenerativeSeedsApril.excerpt'),
      date: t('regenerativeSeedsApril.date'),
      link: t('regenerativeSeedsApril.link'),
      source: t('regenerativeSeedsApril.source'),
      image: {
        url: t('regenerativeSeedsApril.image.url'),
        alt: t('regenerativeSeedsApril.image.alt'),
      },
    },
  ];

  const allNews: NewsCardProps[] = [
    {
      title: t('partnershipAmbrook.title'),
      excerpt: t('partnershipAmbrook.excerpt'),
      date: t('partnershipAmbrook.date'),
      link: t('partnershipAmbrook.link'),
      source: t('partnershipAmbrook.source'),
      image: {
        url: t('partnershipAmbrook.image.url'),
        alt: t('partnershipAmbrook.image.alt'),
      },
    },
    {
      title: t('regenerativeSeedLaunch.title'),
      excerpt: t('regenerativeSeedLaunch.excerpt'),
      date: t('regenerativeSeedLaunch.date'),
      link: t('regenerativeSeedLaunch.link'),
      source: t('regenerativeSeedLaunch.source'),
      image: {
        url: t('regenerativeSeedLaunch.image.url'),
        alt: t('regenerativeSeedLaunch.image.alt'),
      },
    },
    {
      title: t('regenerativeSeedsMarch.title'),
      excerpt: t('regenerativeSeedsMarch.excerpt'),
      date: t('regenerativeSeedsMarch.date'),
      link: t('regenerativeSeedsMarch.link'),
      source: t('regenerativeSeedsMarch.source'),
      image: {
        url: t('regenerativeSeedsMarch.image.url'),
        alt: t('regenerativeSeedsMarch.image.alt'),
      },
    },
    {
      title: t('pipelineToProspect.title'),
      excerpt: t('pipelineToProspect.excerpt'),
      date: t('pipelineToProspect.date'),
      link: t('pipelineToProspect.link'),
      source: t('pipelineToProspect.source'),
      image: {
        url: t('pipelineToProspect.image.url'),
        alt: t('pipelineToProspect.image.alt'),
      },
    },
    {
      title: t('partnershipWhyRegenerative.title'),
      excerpt: t('partnershipWhyRegenerative.excerpt'),
      date: t('partnershipWhyRegenerative.date'),
      link: t('partnershipWhyRegenerative.link'),
      source: t('partnershipWhyRegenerative.source'),
      image: {
        url: t('partnershipWhyRegenerative.image.url'),
        alt: t('partnershipWhyRegenerative.image.alt'),
      },
    },
    {
      title: t('partnershipFarmlink.title'),
      excerpt: t('partnershipFarmlink.excerpt'),
      date: t('partnershipFarmlink.date'),
      link: t('partnershipFarmlink.link'),
      source: t('partnershipFarmlink.source'),
      image: {
        url: t('partnershipFarmlink.image.url'),
        alt: t('partnershipFarmlink.image.alt'),
      },
    },
    {
      title: t('launchToddAgriscience.title'),
      excerpt: t('launchToddAgriscience.excerpt'),
      date: t('launchToddAgriscience.date'),
      link: t('launchToddAgriscience.link'),
      source: t('launchToddAgriscience.source'),
      image: {
        url: t('launchToddAgriscience.image.url'),
        alt: t('launchToddAgriscience.image.alt'),
      },
    },
    {
      title: t('introToddAgriscience.title'),
      excerpt: t('introToddAgriscience.excerpt'),
      date: t('introToddAgriscience.date'),
      link: t('introToddAgriscience.link'),
      source: t('introToddAgriscience.source'),
      image: {
        url: t('introToddAgriscience.image.url'),
        alt: t('introToddAgriscience.image.alt'),
      },
    },
  ];

  allNews.push(...featuredNews);

  return { featuredNews: featuredNews, allNews: allNews };
}
