// Copyright Todd LLC, All rights reserved.

import { render, screen } from '@testing-library/react';
import { TaskList } from './task-list';

// Mock Convex hooks
jest.mock('convex/react', () => ({
  useQuery: jest.fn(),
  useMutation: jest.fn(),
}));

// Mock the API
jest.mock('../../../../convex/_generated/api', () => ({
  api: {
    tasks: {
      get: 'tasks.get',
      create: 'tasks.create',
      toggle: 'tasks.toggle',
      remove: 'tasks.remove',
    },
  },
}));

const mockTasks = [
  {
    _id: '1',
    text: 'Test task 1',
    isCompleted: false,
  },
  {
    _id: '2',
    text: 'Test task 2',
    isCompleted: true,
  },
];

describe('TaskList', () => {
  const mockUseQuery = require('convex/react').useQuery;
  const mockUseMutation = require('convex/react').useMutation;

  beforeEach(() => {
    mockUseMutation.mockReturnValue(jest.fn());
  });

  it('shows loading state when tasks are undefined', () => {
    mockUseQuery.mockReturnValue(undefined);

    render(<TaskList />);

    expect(screen.getByText('Loading tasks...')).toBeInTheDocument();
  });

  it('shows empty state when no tasks exist', () => {
    mockUseQuery.mockReturnValue([]);

    render(<TaskList />);

    expect(screen.getByText('No tasks yet. Add one to get started!')).toBeInTheDocument();
  });

  it('renders tasks when data is available', () => {
    mockUseQuery.mockReturnValue(mockTasks);

    render(<TaskList />);

    expect(screen.getByText('Test task 1')).toBeInTheDocument();
    expect(screen.getByText('Test task 2')).toBeInTheDocument();
    expect(screen.getByText('Task List')).toBeInTheDocument();
    expect(screen.getByText('Add Task')).toBeInTheDocument();
  });

  it('shows completed tasks with line-through styling', () => {
    mockUseQuery.mockReturnValue(mockTasks);

    render(<TaskList />);

    const completedTask = screen.getByText('Test task 2');
    expect(completedTask).toHaveClass('line-through');
  });
});
