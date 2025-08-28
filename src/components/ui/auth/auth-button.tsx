// Copyright Todd LLC, All rights reserved.

'use client';

import { 
  SignInButton, 
  SignUpButton, 
  UserButton, 
  SignedIn, 
  SignedOut 
} from '@clerk/nextjs';
import Button from '@/components/common/button/button';

/**
 * AuthButton component following current Clerk App Router approach
 */
export function AuthButton() {
  return (
    <div className="flex items-center gap-3">
      <SignedOut>
        <div className="flex items-center gap-2">
          <SignInButton>
            <Button variant="outline" size="sm" showArrow={false}>
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button variant="default" size="sm" showArrow={false}>
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton 
          appearance={{
            elements: {
              avatarBox: 'w-8 h-8',
            },
          }}
        />
      </SignedIn>
    </div>
  );
}
