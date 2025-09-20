// Copyright Todd LLC, All rights reserved.

import { screen, renderWithNextIntl } from '@/test/test-utils';
import '@testing-library/jest-dom';
import News from './page';

describe('News Page', () => {
  it('renders without exploding', () => {
    renderWithNextIntl(<News />);

    expect(screen.getByText('Todd Newsroom'));

    expect(screen.getByText('Latest News'));
  });
});
