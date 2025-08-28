// Copyright Todd LLC, All rights reserved.

'use client';

import { useQuery, useMutation } from 'convex/react';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { api } from '../../../../convex/_generated/api';
import Button from '../button/button';

/**
 * TaskList component demonstrating Convex integration
 * Shows how to query and mutate data in real-time
 */
export function TaskList() {
//   const { user } = useUser();
  const tasks = useQuery(api.tasks.get);
  const createTask = useMutation(api.tasks.create);
  const toggleTask = useMutation(api.tasks.toggle);
  const removeTask = useMutation(api.tasks.remove);

  const handleAddTask = async () => {
    const taskText = prompt('Enter a new task:');
    if (taskText) {
      await createTask({ text: taskText });
    }
  };

  const handleToggleTask = async (taskId: any) => {
    await toggleTask({ id: taskId });
  };

  const handleRemoveTask = async (taskId: any) => {
    if (confirm('Are you sure you want to delete this task?')) {
      await removeTask({ id: taskId });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Task List</h2>
        <SignedIn>
          <Button onClick={handleAddTask} variant="default" showArrow={false}>
            Add Task
          </Button>
        </SignedIn>
      </div>

      <SignedOut>
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Please sign in to view and manage your tasks.</p>
        </div>
      </SignedOut>

      <SignedIn>
        {tasks === undefined ? (
          <div className="flex items-center justify-center p-8">
            <div className="text-lg">Loading tasks...</div>
          </div>
        ) : tasks.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No tasks yet. Add one to get started!
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => handleToggleTask(task._id)}
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    task.isCompleted
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {task.isCompleted && '✓'}
                </button>
                
                <span
                  className={`flex-1 ${
                    task.isCompleted
                      ? 'line-through text-gray-500'
                      : 'text-gray-900'
                  }`}
                >
                  {task.text}
                </span>
                
                <Button
                  onClick={() => handleRemoveTask(task._id)}
                  variant="outline"
                  size="sm"
                  showArrow={false}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        )}
      </SignedIn>
    </div>
  );
}
