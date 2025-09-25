// Copyright Todd LLC, All rights reserved.

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import NewsCard from './news-card';

const meta = {
  title: 'Common/NewsCard',
  component: NewsCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    image: {
      url: {
        control: 'text',
        description: 'Image URL for the news card',
      },
      alt: {
        control: 'text',
        description: 'Image alt for the news card',
      },
    },
    link: {
      control: 'text',
      description: 'Slug for article',
    },
    source: {
      control: 'text',
      description: 'News source name',
    },
    date: {
      control: 'text',
      description: 'Publication date',
    },
    excerpt: {
      control: 'text',
      description: 'News headline',
    },
    isDark: {
      control: 'boolean',
      description: 'Use dark theme colors',
    },
  },
  args: {
    image: { url: '/images/placeholder.jpg', alt: '' },
    source: 'Todd Journal',
    date: 'Apr 15, 2025',
    excerpt: 'Revolutionary Advances in Sustainable Agriculture Technology',
    isDark: false,
    link: 'revolutionary-advances-insustainable-agriculture-tech',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NewsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: meta,
  decorators: [
    (Story: React.ComponentType, context) => {
      const isDark = context.args.isDark;
      return (
        <div
          style={{
            backgroundColor: isDark ? '#2A2727' : '#F8F5EE',
            minHeight: '100vh',
            padding: '2rem',
            maxWidth: '600px',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export const DarkMode: Story = {
  args: meta,
  decorators: [
    (Story: React.ComponentType) => (
      <div
        style={{
          backgroundColor: '#2A2727',
          minHeight: '100vh',
          padding: '2rem',
          maxWidth: '600px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const LongHeadline: Story = {
  args: meta,
  decorators: [
    (Story: React.ComponentType, context) => {
      const isDark = context.args.isDark;
      return (
        <div
          style={{
            backgroundColor: isDark ? '#2A2727' : '#F8F5EE',
            minHeight: '100vh',
            padding: '2rem',
            maxWidth: '600px',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};
