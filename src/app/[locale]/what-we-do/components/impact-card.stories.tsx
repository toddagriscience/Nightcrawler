// Copyright Todd LLC, All rights reserved.

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ImpactCard } from './impact-card';

const meta: Meta<typeof ImpactCard> = {
  title: 'Pages/What We Do/ImpactCard',
  component: ImpactCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ImpactCard>;

export const Default: Story = {
  args: {
    title: 'Increased Crop Yields',
    description:
      'Our partners have seen an average increase of 30% in crop yields through our optimization techniques',
    date: '2023',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Resource Efficiency',
    description:
      'Partners have achieved 25% reduction in water usage while maintaining crop quality',
    date: '2023',
  },
};

export const CustomClass: Story = {
  args: {
    title: 'Soil Health Improvement',
    description:
      'Implementation of sustainable practices has led to significant improvements in soil quality metrics',
    date: '2023',
    className: 'max-w-sm',
  },
};
