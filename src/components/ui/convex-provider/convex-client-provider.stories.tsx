// Copyright Todd LLC, All rights reserved.

import type { Meta, StoryObj } from '@storybook/react';
import { ConvexClientProvider } from './convex-client-provider';

const meta: Meta<typeof ConvexClientProvider> = {
  title: 'UI/ConvexClientProvider',
  component: ConvexClientProvider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ConvexClientProvider wraps the application with Convex\'s React provider to enable real-time database queries and mutations throughout the app.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Convex Provider Active</h3>
        <p className="text-gray-600">
          This component wraps your app to provide Convex functionality.
        </p>
      </div>
    ),
  },
};
