// Copyright Todd LLC, All rights reserved.

import { screen, renderWithNextIntl } from '@/test/test-utils';
import { LatestNewsTable } from './latest-news-table';
import '@testing-library/jest-dom';
import NewsCardProps from '../news-card/types/news-card';
import { act } from 'react';

const items: NewsCardProps[] = [
  {
    title: 'Awesome article',
    excerpt: 'omfg i despise making test data',
    date: '1999-01-03',
    link: 'idk.com',
    image: { alt: 'a very cute kitty cat', url: 'https://cutecats.com' },
  },
  {
    title: 'Wow another cool article',
    excerpt: 'skibidi toilet',
    date: '2004-01-03',
    link: 'interestingwebsite.com',
    image: { alt: 'a very cute kitty cat', url: 'https://cutecats.com' },
  },
  {
    title: 'brainrot sigma',
    excerpt: 'ohio',
    date: '2049-02-06',
    link: 'makingthisupasigo.com',
    image: { alt: 'something', url: 'https://idkman.com' },
  },
  {
    title: 'the last one',
    excerpt: 'the final one!',
    date: '1934-03-6',
    link: 'anoldwebsite.com',
    image: { alt: 'a very cute kitty cat', url: 'https://cutecats.com' },
  },
];

describe('LatestNewsTable', () => {
  it('renders without literally exploding', () => {
    renderWithNextIntl(<LatestNewsTable items={items} />);

    expect(screen.getByText('Headline')).toBeInTheDocument();
    expect(screen.getByText('Source Type')).toBeInTheDocument();
    expect(screen.getByText('January 3, 1999')).toBeInTheDocument();
  });
  it('shows more items on click', () => {
    renderWithNextIntl(<LatestNewsTable items={items} />);

    // Click dropdown button
    act(() => {
      screen.getByRole('button').click();
    });

    expect(screen.getByText('the last one')).toBeInTheDocument();
  });

  // Rendering with a certain locale doesn't work with useLocale, apparently? FIXME.
  // it('computes date correctly in other countries', () => {
  //   renderWithNextIntl(<LatestNewsTable items={items} />, 'es');
  //
  //   expect(screen.getByText('3 de enero de 1999')).toBeInTheDocument();
  // });
});
