// Copyright Todd LLC, All rights reserved.

import { screen, renderWithNextIntl } from '@/test/test-utils';
import '@testing-library/jest-dom';
import News from './page';

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

describe('News Page', () => {
  it('renders without exploding', () => {
    renderWithNextIntl(<News />);

    expect(screen.getByText('Todd Newsroom'));

    expect(screen.getByText('Latest News'));
  });
});
