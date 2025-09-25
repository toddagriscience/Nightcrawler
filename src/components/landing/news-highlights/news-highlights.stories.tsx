// Copyright Todd LLC, All rights reserved.

import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import NewsHighlights from './news-highlights';
import {
  storybookControls,
  storybookArgs,
} from '../../../../.storybook/utils/storybookControls';

const meta = {
  title: 'Landing/NewsHighlights',
  component: NewsHighlights,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    ...storybookControls,
    isDark: {
      control: 'boolean',
      description: 'Use dark theme colors',
    },
  },
  args: {
    ...storybookArgs,
    isDark: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NewsHighlights>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story: React.ComponentType) => (
      <div
        style={{
          backgroundColor: '#F8F5EE',
          minHeight: '100vh',
          padding: '2rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const DarkMode: Story = {
  args: {
    isDark: true,
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div>
        <Story />
      </div>
    ),
  ],
};
