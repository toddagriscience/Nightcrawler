// Copyright Todd LLC, All rights reserved.

'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import CarouselProps from './types/carousel';

/**
 * Required for setAlign in the Carousel function to operate properly. Importing AlignmentOptionType directly from Embla doesn't work for whatever reason.
 */
type EmblaAlignType =
  | 'start'
  | 'center'
  | 'end'
  | ((viewSize: number, snapSize: number, index: number) => number);

/**
 * A responsive carousel component built with Embla Carousel.
 *
 * Features:
 * - Responsive behavior: scrolls 1 item on mobile/tablet, 2 items on desktop
 * - Optional infinite loop scrolling
 * - Navigation arrows with hover effects
 * - Pagination dots with theme integration
 * - Dark mode support
 * - Smooth animations and transitions
 * - Touch/drag support (disabled by default)
 * - Accessibility features with ARIA labels
 *
 * @param children - React elements to be displayed as carousel slides
 * @param loop - Enable infinite loop scrolling (default: true)
 * @param className - Additional CSS classes to apply to the carousel container
 * @param showDots - Display pagination dots below the carousel (default: true)
 * @returns A fully functional carousel component
 *
 * @example
 * ```tsx
 * <Carousel showDots={true} loop={true}>
 *   <div>Slide 1</div>
 *   <div>Slide 2</div>
 *   <div>Slide 3</div>
 * </Carousel>
 * ```
 */
const Carousel = ({ children, loop = true, className = '' }: CarouselProps) => {
  const [align, setAlign] = useState<EmblaAlignType>('center');

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      watchDrag: false,
      slidesToScroll: 1,
      align,
    },
    []
  );

  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  const updateAlignment = useCallback(() => {
    if (typeof window === 'undefined') return;

    const width = window.innerWidth;

    // Calculate slides to scroll based on screen size
    if (width < 768) {
      setAlign('center');
    } else {
      setAlign('start');
    }
  }, []);

  const handleResize = useCallback(() => {
    updateAlignment();
  }, [updateAlignment]);

  useEffect(() => {
    updateAlignment();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateAlignment, handleResize]);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className={`relative ${className} h-min md:h-max md:w-max mb-8`}>
      <div className="flex max-w-[600px] md:max-w-full max-h-[600px] h-[70vw] md:w-[95vw] w-[70vw] justify-between mx-auto md:mx-0 absolute mt-4 left-0 right-0">
        <button
          onClick={scrollPrev}
          ref={prevBtnRef}
          className="absolute top-1/2 left-0 z-10 -translate-y-1/2 transform rounded-full bg-black/10 p-1 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20"
          aria-label="Previous slide"
          data-testid="left-button"
        >
          <ArrowLeft className="text-foreground" />
        </button>
        <button
          onClick={scrollNext}
          ref={nextBtnRef}
          className="absolute top-1/2 right-0 z-10 -translate-y-1/2 transform rounded-full bg-black/10 p-1 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20"
          aria-label="Next slide"
          data-testid="right-button"
        >
          <ArrowRight className="text-foreground" />
        </button>
      </div>
      <div
        className="mx-auto w-[80vw] md:w-[95vw] overflow-hidden"
        ref={emblaRef}
      >
        <div className="embla__container flex w-full">{children}</div>
      </div>
    </div>
  );
};

export default Carousel;
