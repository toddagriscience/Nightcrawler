// Copyright Todd LLC, All rights reserved.

import { render, screen } from '@/test/test-utils';
import { ImpactCard } from './impact-card';

describe('ImpactCard', () => {
  const defaultProps = {
    title: 'Test Impact',
    description: 'Test Description',
    date: '2023',
  };

  it('renders title, description and date', () => {
    render(<ImpactCard {...defaultProps} />);

    expect(screen.getByText('Test Impact')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
  });

  it('renders image when imageUrl is provided', () => {
    render(<ImpactCard {...defaultProps} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src');
    expect(image).toHaveAttribute('alt', 'Test Impact');
  });

  it('applies custom className', () => {
    const { container } = render(
      <ImpactCard {...defaultProps} className="custom-class" />
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('does not render image when imageUrl is not provided', () => {
    render(<ImpactCard {...defaultProps} />);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
