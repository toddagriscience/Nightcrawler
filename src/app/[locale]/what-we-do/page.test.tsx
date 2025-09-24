// Copyright Todd LLC, All rights reserved.

import { render, screen } from '@/test/test-utils';
import WhatWeDoPage from './page';

jest.mock('next-intl', () => ({
  useTranslations: () => {
    return {
      raw: (key: string) => {
        const translations: Record<
          string,
          { title: string; description: string; date?: string } | string[]
        > = {
          'offerings.services.soilRemineralization': {
            title: 'Soil Remineralization',
            description:
              'A holistic analysis of soil toxicity and imbalances to remineralize and heal the soil and surrounding environment.',
          },
          'offerings.services.seedProducts': {
            title: 'Seed Products',
            description:
              'A holistic analysis of soil toxicity and imbalances to remineralize and heal the soil and surrounding environment.',
          },
          'impact.stories.acmeFarms': {
            title: 'Acme Farms',
            description:
              'Achieved 40% reduction in water usage while maintaining yield levels',
            date: '2023',
          },
          'impact.stories.brightFuture': {
            title: 'Bright Future',
            description:
              'Improved soil organic matter by 2.5% in just 18 months',
            date: '2023',
          },
          'impact.companies.list': [
            'Acme Farms',
            'Bright Future',
            'Cosmic Technologies',
            'Delta Systems',
            'Echo Innovations',
            'Frontier Labs',
          ],
        };
        return translations[key] || { title: '', description: '' };
      },
      'page.title': 'What We Do',
      'page.description': 'Transforming agriculture',
      'services.title': 'Our Services',
      'services.description': 'Comprehensive solutions',
      'impact.title': 'Our Impact',
      'impact.description': 'Real results',
    };
  },
}));

describe('WhatWeDoPage', () => {
  it('renders page sections', () => {
    render(<WhatWeDoPage />);

    // Check page title and description
    expect(screen.getByText('What We Do')).toBeInTheDocument();
    expect(screen.getByText('Transforming agriculture')).toBeInTheDocument();

    // Check services section
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText('Comprehensive solutions')).toBeInTheDocument();
    expect(screen.getByText('Soil Management')).toBeInTheDocument();
    expect(screen.getByText('Crop Optimization')).toBeInTheDocument();
    expect(screen.getByText('Sustainable Practices')).toBeInTheDocument();
    expect(screen.getByText('Farm Management')).toBeInTheDocument();

    // Check impact section
    expect(screen.getByText('Our Impact')).toBeInTheDocument();
    expect(screen.getByText('Real results')).toBeInTheDocument();
    expect(screen.getByText('Increased Yields')).toBeInTheDocument();
    expect(screen.getByText('Soil Health')).toBeInTheDocument();
    expect(screen.getByText('Resource Efficiency')).toBeInTheDocument();
  });

  it('renders all service cards with icons', () => {
    render(<WhatWeDoPage />);

    const serviceCards = screen.getAllByText(
      /Management|Practices|Optimization/
    );
    expect(serviceCards).toHaveLength(4);
  });

  it('renders all impact cards', () => {
    render(<WhatWeDoPage />);

    const impactCards = screen.getAllByText(/2023/);
    expect(impactCards).toHaveLength(3);
  });
});
