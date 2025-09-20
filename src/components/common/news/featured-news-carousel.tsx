// Copyright Todd LLC, All rights reserved.

import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NewsCard } from '@/components/common';
import { Button } from '@/components/ui';
import NewsCardProps from '../news-card/types/news-card';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
  items: NewsCardProps[];
}

/*
 * A carousel for featured news.
 * @param {Props} items - A list of `NewsCardProps`
 */
export function FeaturedNewsCarousel({ items }: Props) {
  const [current, setCurrent] = useState(0);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [setCurrent, items]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6500);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="mx-auto mb-16 flex h-auto max-w-[640px] flex-row justify-center">
        <CarouselButtonWrapper>
          <Button
            onClick={handlePrev}
            variant="ghost"
            className="rounded-full bg-[#727272]/60 p-3 text-white shadow-md hover:bg-[#727272]/80"
          >
            <ArrowLeft />
          </Button>
        </CarouselButtonWrapper>
        <AnimatePresence mode="wait">
          <motion.div
            // is this scuffed? Perchance.
            // Perchance.
            key={
              items[current].excerpt +
              items[current].source +
              items[current].link
            }
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <NewsCard {...items[current]} />
          </motion.div>
        </AnimatePresence>
        <CarouselButtonWrapper>
          <Button
            data-testid="right-button"
            onClick={handleNext}
            variant="ghost"
            className="rounded-full bg-[#727272]/60 p-3 text-white shadow-md hover:bg-[#727272]/80"
          >
            <ArrowRight />
          </Button>
        </CarouselButtonWrapper>
      </div>
    </div>
  );
}

function CarouselButtonWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-[18px] flex h-[70vw] max-h-[600px] w-[50px] max-w-[600px] items-center justify-center">
      {children}
    </div>
  );
}
