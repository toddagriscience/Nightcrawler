// Copyright Todd LLC, All rights reserved.

import { screen, renderWithNextIntl, waitFor } from '@/test/test-utils';
import '@testing-library/jest-dom';
import PlaceholderImage from './placeholder-image';
import { fireEvent } from '@testing-library/react';

describe('PlaceholderImage', () => {
  it('renders an image without destabilizing the quantum field', async () => {
    renderWithNextIntl(
      <PlaceholderImage
        src="/og-image.jpg"
        alt="something"
        width={500}
        height={500}
      />
    );

    await waitFor(() => {
      expect(screen.getByTestId('rendered image')).toBeInTheDocument();
    });
  });
  it('renders a placeholder', async () => {
    renderWithNextIntl(
      <PlaceholderImage
        src="/nonexistent"
        alt="nothing"
        width={500}
        height={500}
        fallbackText="this is a test"
      />
    );

    const image = screen.getByRole('img');
    fireEvent.error(image);

    await waitFor(() => {
      expect(screen.getByText('this is a test')).toBeInTheDocument();
    });
  });
  it('is dark with dark variable set', async () => {
    renderWithNextIntl(
      <PlaceholderImage
        src="/nonexistent"
        alt="nothing"
        width={500}
        height={500}
        isDark={true}
      />
    );

    const image = screen.getByRole('img');
    fireEvent.error(image);

    await waitFor(() => {
      const img = expect(screen.getByRole('img'));
      img.toHaveClass('bg-gray-700');
      img.toHaveClass('text-gray-300');
    });
  });
});
