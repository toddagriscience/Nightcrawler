# Clerk + Convex Authentication Setup Guide

This guide walks you through testing the current setup and configuring Clerk authentication with Convex integration.

## 🚀 Quick Start Testing

### 1. Set Up Convex Development Environment

```bash
# Start Convex development server (this will prompt for login)
npm run convex:dev
```

This will:
- Prompt you to log in with GitHub
- Create a new Convex project if you don't have one
- Generate your `NEXT_PUBLIC_CONVEX_URL` 
- Start syncing your functions with the cloud

### 2. Set Up Clerk Authentication

1. **Create a Clerk Account**: Visit [clerk.com](https://clerk.com) and create an account
2. **Create a New Application**: Choose "Next.js" as your framework
3. **Get your API keys** from the Clerk dashboard

### 3. Configure Environment Variables

Create a `.env.local` file with the following variables:

```env
# Convex (you'll get this from step 1)
NEXT_PUBLIC_CONVEX_URL=https://your-deployment-name.convex.cloud

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your-clerk-publishable-key
CLERK_SECRET_KEY=sk_test_your-clerk-secret-key
CLERK_JWT_ISSUER_DOMAIN=your-clerk-domain.clerk.accounts.dev
```

### 4. Configure Clerk-Convex Integration

In your Clerk dashboard:
1. Go to **JWT Templates**
2. Create a new template called "convex"
3. Set the **Audience** to "convex"
4. Copy your **JWT Issuer Domain** to the environment variable above

### 5. Start the Application

```bash
# Start Next.js development server
npm run dev
```

Visit `http://localhost:3000/demo` to test the integration.

## 🧪 Testing the Integration

### Test Flow:

1. **Visit Demo Page**: Go to `http://localhost:3000/demo`
2. **Sign In**: Click "Sign In" button in the header
3. **Create Tasks**: Add some tasks to test real-time functionality
4. **Test Real-time**: Open multiple browser tabs to see real-time updates
5. **Sign Out**: Test sign-out functionality

### What to Expect:

- ✅ **Before Sign-In**: "Please sign in to view tasks" message
- ✅ **After Sign-In**: Welcome message with your name/email
- ✅ **Task Creation**: Tasks are saved to your user account only
- ✅ **Real-time Updates**: Changes appear instantly across tabs
- ✅ **User Isolation**: Each user sees only their own tasks

## 🏗️ Architecture Overview

### Provider Stack (in layout.tsx):
```tsx
<ClerkAuthProvider>          {/* Handles authentication */}
  <ConvexClientProvider>     {/* Connects to Convex with auth */}
    <NextIntlClientProvider> {/* Internationalization */}
      <ThemeProvider>        {/* Theme management */}
        {/* Your app content */}
      </ThemeProvider>
    </NextIntlClientProvider>
  </ConvexClientProvider>
</ClerkAuthProvider>
```

### Authentication Flow:
1. **Clerk** handles user authentication (sign-in/out, user management)
2. **ConvexProviderWithClerk** automatically passes auth tokens to Convex
3. **Convex functions** verify user identity and filter data by user
4. **Real-time updates** work seamlessly with authenticated queries

## 📁 New Files Created

### Components:
- `src/components/ui/clerk-provider/` - Clerk authentication provider
- `src/components/ui/auth/` - Authentication UI components (sign-in/out buttons)
- `src/components/common/task-list/` - Demo component showing Convex + Clerk integration
- `src/app/[locale]/demo/page.tsx` - Demo page for testing

### Configuration:
- `convex/auth.config.js` - Convex authentication configuration
- `convex/tasks.ts` - Updated with user-specific queries and mutations

### Documentation:
- `CLERK_CONVEX_SETUP.md` - This setup guide
- `CONVEX_SETUP.md` - Original Convex setup documentation

## 🔒 Security Features

### User Data Isolation:
- All tasks are filtered by `userId` (from Clerk)
- Users can only see/modify their own data
- Server-side authorization in all Convex functions

### Authentication Checks:
```typescript
// Every Convex mutation/query checks authentication
const identity = await ctx.auth.getUserIdentity();
if (!identity) {
  throw new Error("Must be authenticated");
}
```

## 🎨 UI Integration

### Header Updates:
- **AuthButton** component shows sign-in/out state
- **User greeting** displays when signed in
- **Responsive design** for mobile and desktop

### Theme Integration:
- Clerk UI matches your brand colors
- **Custom appearance** configuration in `ClerkAuthProvider`
- **Dark mode support** (inherits from your theme system)

## 🚀 Next Steps

### Immediate:
1. **Test the demo page** at `/demo`
2. **Verify authentication flow** works correctly
3. **Check real-time updates** across browser tabs

### Development:
1. **Replace demo data** with your actual application data
2. **Add more user-specific features** (profiles, preferences, etc.)
3. **Implement role-based access** if needed
4. **Add more Convex tables** for your application needs

### Production:
1. **Deploy Convex functions**: `npm run convex:deploy`
2. **Update environment variables** in your hosting platform
3. **Configure Clerk production settings**
4. **Set up proper domain configuration**

## 🔧 Troubleshooting

### Common Issues:

1. **"Must be authenticated" errors**:
   - Check your Clerk JWT template configuration
   - Verify `CLERK_JWT_ISSUER_DOMAIN` is correct

2. **Convex connection issues**:
   - Ensure `NEXT_PUBLIC_CONVEX_URL` is correct
   - Check that `convex dev` is running

3. **Authentication not working**:
   - Verify all Clerk environment variables
   - Check browser console for errors

### Debug Commands:
```bash
# Check Convex deployment status
npx convex dashboard

# View Convex logs
npx convex logs

# Test Clerk configuration
# (Check browser console when signing in)
```

## 📚 Additional Resources

- [Convex Documentation](https://docs.convex.dev)
- [Clerk Documentation](https://clerk.com/docs)
- [Convex + Clerk Integration Guide](https://docs.convex.dev/auth/clerk)
- [Next.js App Router with Clerk](https://clerk.com/docs/quickstarts/nextjs)

## 🎯 Demo Features

The `/demo` page showcases:
- ✅ **User authentication** with Clerk
- ✅ **Real-time database** with Convex
- ✅ **User-specific data** isolation
- ✅ **CRUD operations** (Create, Read, Update, Delete)
- ✅ **Optimistic updates** for smooth UX
- ✅ **Responsive design** following your project patterns

This integration provides a solid foundation for building user-centric features with real-time data synchronization!
