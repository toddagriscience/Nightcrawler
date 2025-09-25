// Copyright Todd LLC, All rights reserved.

import { screen, renderWithAct } from '@/test/test-utils';
import NewsHighlights from './news-highlights';
import '@testing-library/jest-dom';

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

describe('NewsHighlights', () => {
  it('renders without crashing', async () => {
    await renderWithAct(<NewsHighlights />);
    const sections = screen.getAllByRole('region');
    const newsSection = sections.find(
      (section) => section.getAttribute('id') === 'news-carousel'
    );
    expect(newsSection).toBeInTheDocument();
  });

  it('displays the news highlights heading', async () => {
    await renderWithAct(<NewsHighlights />);
    const heading = screen.getByRole('heading', { name: 'News Highlights' });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('News Highlights');
  });

  it('renders View All links with correct href', async () => {
    await renderWithAct(<NewsHighlights />);
    const viewAllLinks = screen
      .getAllByTestId('button-component')
      .filter((link) => link.getAttribute('href') === '/news');
    expect(viewAllLinks).toHaveLength(2);
  });

  it('displays news articles from JSON data', async () => {
    await renderWithAct(<NewsHighlights />);
    expect(
      screen.getByText('Todd Anniversary: From Research to Reality')
    ).toBeInTheDocument();
    expect(screen.queryAllByText(/2025-05-31/)).toHaveLength(2);
  });

  it('renders normally without isLoading prop', async () => {
    await renderWithAct(<NewsHighlights />);
    const sections = screen.getAllByRole('region');
    const newsSection = sections.find(
      (section) => section.getAttribute('id') === 'news-carousel'
    );
    expect(newsSection).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'News Highlights' })
    ).toBeInTheDocument();
  });
});
