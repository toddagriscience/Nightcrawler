// Copyright Todd LLC, All rights reserved.

import { screen, renderWithNextIntl } from '@/test/test-utils';
import '@testing-library/jest-dom';
import { FeaturedNewsCarousel } from './featured-news-carousel';
import NewsCardProps from '../news-card/types/news-card';
import { act } from 'react';

const items: NewsCardProps[] = [
  {
    title: 'Awesome article',
    excerpt: 'omfg i despise making test data',
    date: '1999',
    link: 'idk.com',
    image: { alt: 'a very cute kitty cat', url: 'https://cutecats.com' },
  },
  {
    title: 'Wow another cool article',
    excerpt: 'skibidi toilet',
    date: '2004',
    link: 'interestingwebsite.com',
    image: { alt: 'a very cute kitty cat', url: 'https://cutecats.com' },
  },
  {
    title: 'the last one',
    excerpt: 'the final one!',
    date: '1934',
    link: 'anoldwebsite.com',
    image: { alt: 'a very cute kitty cat', url: 'https://cutecats.com' },
  },
];

describe('FeaturedNewsCarousel', () => {
  it('renders without imploding', () => {
    renderWithNextIntl(<FeaturedNewsCarousel items={items} />);

    // Should only show the first article
    expect(screen.getByText('Awesome article')).toBeInTheDocument();
    expect(
      screen.getByText('omfg i despise making test data')
    ).toBeInTheDocument();

    // We shouldn't see the next article yet
    expect(screen.queryByText('Wow another cool article')).toBeNull();
    expect(screen.queryByText('skibidi toilet')).toBeNull();

    // Two visible buttons
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('scrolls articles', () => {
    renderWithNextIntl(<FeaturedNewsCarousel items={items} />);

    // Should only show the first article
    expect(screen.getByText('Awesome article')).toBeInTheDocument();
    expect(
      screen.getByText('omfg i despise making test data')
    ).toBeInTheDocument();

    act(() => {
      // Scroll to the right
      screen.getByTestId('right-button').click();
    });

    // Assert that we've scrolled
    expect(screen.getByText('skibidi toilet')).toBeInTheDocument();

    act(() => {
      // Scroll to the right
      screen.getByTestId('right-button').click();
    });

    // Assert that we've scrolled
    expect(screen.getByText('the last one')).toBeInTheDocument();
  });
});
