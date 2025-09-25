// Copyright Todd LLC, All rights reserved.

import { screen } from '@/test/test-utils';
import '@testing-library/jest-dom';
import { FeaturedNewsCarousel } from './featured-news-carousel';
import NewsCardProps from '../news-card/types/news-card';
import { render } from '@testing-library/react';

// Mock embla-carousel-react
jest.mock('embla-carousel-react', () => {
  const mockEmblaApi = {
    scrollSnapList: jest.fn(() => [0, 1, 2]),
    selectedScrollSnap: jest.fn(() => 0),
    scrollPrev: jest.fn(),
    scrollNext: jest.fn(),
    scrollTo: jest.fn(),
    on: jest.fn(),
    off: jest.fn(),
    canScrollPrev: jest.fn(() => true),
    canScrollNext: jest.fn(() => true),
  };

  return {
    __esModule: true,
    default: jest.fn(() => [
      jest.fn(), // emblaRef
      mockEmblaApi, // emblaApi
    ]),
  };
});

const items: NewsCardProps[] = [
  {
    title: 'Awesome article',
    excerpt: 'omfg i despise making test data',
    date: '1999',
    link: 'idk.com',
    source: 'blank',
    image: { alt: 'a very cute kitty cat', url: 'https://cutecats.com' },
  },
  {
    title: 'Wow another cool article',
    excerpt: 'skibidi toilet',
    date: '2004',
    link: 'interestingwebsite.com',
    source: 'blank',
    image: { alt: 'a very cute kitty cat', url: 'https://cutecats.com' },
  },
  {
    title: 'the last one',
    excerpt: 'the final one!',
    date: '1934',
    link: 'anoldwebsite.com',
    source: 'blank',
    image: { alt: 'a very cute kitty cat', url: 'https://cutecats.com' },
  },
];

describe('FeaturedNewsCarousel', () => {
  it('renders without imploding', () => {
    render(<FeaturedNewsCarousel items={items} />);

    // Should only show the first article
    expect(screen.getByText('Awesome article')).toBeInTheDocument();
    expect(
      screen.getByText('omfg i despise making test data')
    ).toBeInTheDocument();

    // We SHOULD see the next articles
    expect(screen.queryByText('Wow another cool article')).toBeInTheDocument();
    expect(screen.queryByText('skibidi toilet')).toBeInTheDocument();

    // Two visible buttons
    const numNavButtons = 2;
    expect(screen.getAllByRole('button')).toHaveLength(numNavButtons);
  });
});
