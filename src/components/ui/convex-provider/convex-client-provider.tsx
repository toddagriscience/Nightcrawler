// Copyright Todd LLC, All rights reserved.

'use client';

import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ConvexReactClient } from 'convex/react';
import { useAuth } from '@clerk/nextjs';
import { ReactNode } from 'react';

import { env } from '@/lib/env';

const convex = new ConvexReactClient(env.convexUrl);

interface ConvexClientProviderProps {
  children: ReactNode;
}

/**
 * ConvexClientProvider wraps the application with Convex's React provider
 * integrated with Clerk authentication for secure real-time database operations.
 */
export function ConvexClientProvider({ children }: ConvexClientProviderProps) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}
