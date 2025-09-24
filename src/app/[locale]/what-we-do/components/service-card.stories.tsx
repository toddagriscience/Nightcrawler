// Copyright Todd LLC, All rights reserved.

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Leaf, Recycle, Settings, Sprout } from 'lucide-react';
import { ServiceCard } from './service-card';

const meta: Meta<typeof ServiceCard> = {
  title: 'Pages/What We Do/ServiceCard',
  component: ServiceCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'highlight'],
    },
    icon: {
      control: 'select',
      options: ['leaf', 'sprout', 'recycle', 'settings'],
      mapping: {
        leaf: <Leaf className="w-8 h-8" />,
        sprout: <Sprout className="w-8 h-8" />,
        recycle: <Recycle className="w-8 h-8" />,
        settings: <Settings className="w-8 h-8" />,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
  args: {
    title: 'Soil Management',
    description:
      'Expert guidance on soil health optimization and sustainable management practices',
  },
};

export const Highlight: Story = {
  args: {
    title: 'Crop Optimization',
    description:
      'Strategic planning and implementation for maximizing crop yields',
    variant: 'highlight',
  },
};

export const NoIcon: Story = {
  args: {
    title: 'Farm Management',
    description:
      'Comprehensive farm operation and resource management solutions',
  },
};

export const CustomClass: Story = {
  args: {
    title: 'Sustainable Practices',
    description:
      'Implementation of environmentally conscious farming techniques',
    className: 'shadow-xl',
  },
};
