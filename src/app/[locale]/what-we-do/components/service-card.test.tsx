// Copyright Todd LLC, All rights reserved.

import { render, screen } from '@/test/test-utils';
import { Leaf } from 'lucide-react';
import { ServiceCard } from './service-card';

describe('ServiceCard', () => {
  const defaultProps = {
    title: 'Test Service',
    description: 'Test Description',
  };

  it('renders title and description', () => {
    render(<ServiceCard {...defaultProps} />);

    expect(screen.getByText('Test Service')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(
      <ServiceCard {...defaultProps} icon={<Leaf data-testid="leaf-icon" />} />
    );

    expect(screen.getByTestId('leaf-icon')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    const { container } = render(
      <ServiceCard {...defaultProps} variant="highlight" />
    );

    expect(container.firstChild).toHaveClass('bg-primary/5');
  });

  it('applies custom className', () => {
    const { container } = render(
      <ServiceCard {...defaultProps} className="custom-class" />
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });
});
