// Copyright Todd LLC, All rights reserved.

'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { ReactNode } from 'react';

import { env } from '@/lib/env';

interface ClerkAuthProviderProps {
  children: ReactNode;
}

/**
 * ClerkAuthProvider wraps the application with Clerk's authentication provider
 * following the current Next.js App Router approach.
 */
export function ClerkAuthProvider({ children }: ClerkAuthProviderProps) {
  return (
    <ClerkProvider
      publishableKey={env.clerkPublishableKey}
      appearance={{
        variables: {
          colorPrimary: '#8B5A3C', // Todd Agriscience brand color
          colorBackground: '#F8F5EE',
          colorText: '#2C2C2C',
        },
        elements: {
          formButtonPrimary: 
            'bg-[#8B5A3C] hover:bg-[#7A4F35] text-white',
          card: 'bg-white shadow-lg border border-gray-200',
          headerTitle: 'text-2xl font-bold text-[#2C2C2C]',
          headerSubtitle: 'text-gray-600',
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
