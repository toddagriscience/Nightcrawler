// Copyright Todd LLC, All rights reserved.

import { render } from '@testing-library/react';
import { ConvexClientProvider } from './convex-client-provider';

// Mock the Convex client
jest.mock('convex/react', () => ({
  ConvexProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="convex-provider">{children}</div>
  ),
  ConvexReactClient: jest.fn(),
}));

// Mock the environment config
jest.mock('@/lib/env', () => ({
  env: {
    convexUrl: 'https://test-convex-url.convex.cloud',
  },
}));

describe('ConvexClientProvider', () => {
  it('renders children within ConvexProvider', () => {
    const TestChild = () => <div data-testid="test-child">Test Content</div>;
    
    const { getByTestId } = render(
      <ConvexClientProvider>
        <TestChild />
      </ConvexClientProvider>
    );

    expect(getByTestId('convex-provider')).toBeInTheDocument();
    expect(getByTestId('test-child')).toBeInTheDocument();
  });

  it('provides ConvexReactClient to ConvexProvider', () => {
    const { ConvexReactClient } = require('convex/react');
    
    render(
      <ConvexClientProvider>
        <div>Test</div>
      </ConvexClientProvider>
    );

    expect(ConvexReactClient).toHaveBeenCalledWith('https://test-convex-url.convex.cloud');
  });
});
