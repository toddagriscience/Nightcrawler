'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';
import NewsCardProps from '../news-card/types/news-card';
import { useLocale } from 'next-intl';

interface LatestNewsTableProps {
  items: NewsCardProps[];
}

export function LatestNewsTable({ items }: LatestNewsTableProps) {
  const [visibleCount, setVisibleCount] = useState(3); // Show first 3 items initially
  const isAllShown = visibleCount >= items.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3); // Show 3 more each time
  };

  const locale = useLocale();

  return (
    <div className="rounded-md text-[#555555]">
      <div className="grid grid-cols-3 border-b border-[#555555] px-4 py-2 text-xs uppercase">
        <span>Headline</span>
        <span className="text-right">Source Type</span>
        <span className="text-right">Date</span>
      </div>

      {items.slice(0, visibleCount).map((item, index) => (
        <div
          key={item.title}
          className={clsx(
            'grid grid-cols-3 items-center px-4 py-4 text-sm',
            index !== visibleCount - 1 &&
              index !== items.length - 1 &&
              'border-b border-[#555555]'
          )}
        >
          <div>{item.title}</div>

          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${item.title} in new tab`}
          >
            <div className="flex items-center justify-end gap-1">
              {item.source}
              <ExternalLink className="h-3.5 w-3.5 transition hover:opacity-70" />
            </div>
          </Link>

          <div className="text-right">
            {new Date(item.date + 'T00:00:00').toLocaleDateString(locale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      ))}

      {!isAllShown && (
        <div
          role="button"
          onClick={handleLoadMore}
          className="cursor-pointer px-4 py-4 text-left text-sm hover:underline"
        >
          Load more ↓
        </div>
      )}
    </div>
  );
}
