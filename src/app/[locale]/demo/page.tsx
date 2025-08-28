// Copyright Todd LLC, All rights reserved.

import { TaskList } from '@/components/common';

export default function DemoPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Convex + Clerk Demo</h1>
          <p className="text-lg text-gray-600">
            This page demonstrates the integration of Convex (real-time database) 
            with Clerk authentication. Sign in to create and manage your personal tasks.
          </p>
        </div>
        
        <TaskList />
      </div>
    </main>
  );
}
