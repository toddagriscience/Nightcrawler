// Copyright Todd LLC, All rights reserved.

import type { Meta, StoryObj } from '@storybook/react';
import { TaskList } from './task-list';

// Mock Convex hooks for Storybook
const mockTasks = [
  {
    _id: '1',
    text: 'Set up Convex backend',
    isCompleted: true,
  },
  {
    _id: '2',
    text: 'Integrate with Next.js',
    isCompleted: true,
  },
  {
    _id: '3',
    text: 'Add real-time features',
    isCompleted: false,
  },
  {
    _id: '4',
    text: 'Deploy to production',
    isCompleted: false,
  },
];

const meta: Meta<typeof TaskList> = {
  title: 'Common/TaskList',
  component: TaskList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'TaskList component demonstrating Convex integration with real-time data queries and mutations.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock the Convex hooks for Storybook
const mockUseQuery = () => mockTasks;
const mockUseMutation = () => () => Promise.resolve();

// Override the imports for Storybook
jest.mock('convex/react', () => ({
  useQuery: mockUseQuery,
  useMutation: mockUseMutation,
}));

export const Default: Story = {};

export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Loading state while tasks are being fetched from Convex.',
      },
    },
  },
};

export const Empty: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Empty state when no tasks exist in the database.',
      },
    },
  },
};
