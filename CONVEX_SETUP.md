# Convex Backend Integration

This document explains how Convex has been integrated into the Todd Agriscience website as a real-time backend solution.

## Overview

Convex provides a complete backend-as-a-service with real-time database capabilities, serverless functions, and automatic TypeScript code generation. It's been integrated following the project's established patterns for maintainability and type safety.

## Integration Architecture

### Provider Setup

The Convex client is integrated through a custom provider component that follows the project's component structure:

```typescript
// src/components/ui/convex-provider/convex-client-provider.tsx
export function ConvexClientProvider({ children }: ConvexClientProviderProps) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
```

### Layout Integration

The provider is wrapped around the entire application in the locale layout:

```typescript
// src/app/[locale]/layout.tsx
<ConvexClientProvider>
  <NextIntlClientProvider messages={messages}>
    <ThemeProvider>
      {/* App content */}
    </ThemeProvider>
  </NextIntlClientProvider>
</ConvexClientProvider>
```

## Environment Configuration

Add the following to your `.env.local` file:

```env
# Convex deployment URL (required)
NEXT_PUBLIC_CONVEX_URL=http://127.0.0.1:3210
```

## Development Setup

### 1. Initialize Convex Development Environment

```bash
# Start Convex development server
npm run convex:dev
```

This will:
- Prompt you to log in with GitHub
- Create a new Convex project
- Generate your deployment URL
- Start syncing functions with the cloud

### 2. Import Sample Data (Optional)

```bash
# Import sample task data
npm run convex:import
```

### 3. Start Development Server

```bash
# Start Next.js with Turbopack
npm run dev
```

## Available Scripts

- `npm run convex:dev` - Start Convex development server
- `npm run convex:deploy` - Deploy functions to production
- `npm run convex:import` - Import sample data from `sampleData.jsonl`

## Database Schema

### Tasks Table

The sample implementation includes a `tasks` table with the following structure:

```typescript
interface Task {
  _id: Id<"tasks">;
  text: string;
  isCompleted: boolean;
  createdAt: number;
}
```

## API Functions

### Queries

- `api.tasks.get` - Retrieve all tasks
- Real-time updates automatically sync across all connected clients

### Mutations

- `api.tasks.create({ text, isCompleted? })` - Create a new task
- `api.tasks.toggle({ id })` - Toggle task completion status
- `api.tasks.remove({ id })` - Delete a task

## Usage Examples

### Basic Query

```typescript
'use client';

import { useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';

export function TaskList() {
  const tasks = useQuery(api.tasks.get);
  
  if (tasks === undefined) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      {tasks.map(task => (
        <div key={task._id}>{task.text}</div>
      ))}
    </div>
  );
}
```

### Mutations

```typescript
'use client';

import { useMutation } from 'convex/react';
import { api } from '../convex/_generated/api';

export function AddTaskForm() {
  const createTask = useMutation(api.tasks.create);
  
  const handleSubmit = async (text: string) => {
    await createTask({ text });
  };
  
  // ... form implementation
}
```

## Demo Component

A complete `TaskList` component is included at `src/components/common/task-list/task-list.tsx` that demonstrates:

- Real-time data querying
- Optimistic updates with mutations
- Loading states
- Error handling
- Integration with the project's design system

## Testing

### Unit Tests

Tests are included for all new components:

- `ConvexClientProvider` - Provider functionality
- `TaskList` - Component behavior with mocked Convex hooks

### Storybook Stories

Interactive documentation is available in Storybook:

```bash
npm run storybook
```

## Type Safety

Convex automatically generates TypeScript types for:

- API functions (`api.tasks.get`, `api.tasks.create`, etc.)
- Database schemas
- Function arguments and return types

Types are available in `convex/_generated/api.d.ts` and update automatically.

## Production Deployment

### 1. Deploy Convex Functions

```bash
npm run convex:deploy
```

### 2. Update Environment Variables

Set `NEXT_PUBLIC_CONVEX_URL` to your production Convex deployment URL.

### 3. Deploy Next.js Application

Your existing deployment process remains unchanged. The Convex client will automatically connect to the correct environment based on the `NEXT_PUBLIC_CONVEX_URL` variable.

## Real-time Features

Convex provides automatic real-time updates:

- Data changes are instantly reflected across all connected clients
- No manual WebSocket management required
- Optimistic updates provide immediate UI feedback
- Automatic reconnection on network issues

## Next Steps

With Convex integrated, you can now:

1. **Replace Static Data**: Replace hardcoded content with dynamic data from Convex
2. **Add User Features**: Implement user-specific data and preferences
3. **Real-time Collaboration**: Add collaborative features like live comments or updates
4. **Content Management**: Build admin interfaces for content management
5. **Analytics**: Track user interactions and behavior
6. **File Storage**: Use Convex file storage for images and documents

## File Structure

```
src/
├── components/
│   ├── common/
│   │   └── task-list/              # Demo component
│   └── ui/
│       └── convex-provider/        # Provider component
├── lib/
│   └── env.ts                      # Environment config (updated)
convex/
├── _generated/                     # Auto-generated types and API
├── tasks.ts                        # Sample functions
└── schema.ts                       # Database schema (optional)
sampleData.jsonl                    # Sample data for import
```

## Support

- [Convex Documentation](https://docs.convex.dev)
- [Next.js Integration Guide](https://docs.convex.dev/quickstart/nextjs)
- [TypeScript Support](https://docs.convex.dev/typescript)
