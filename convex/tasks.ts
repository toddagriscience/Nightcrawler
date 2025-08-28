// Copyright Todd LLC, All rights reserved.

//TODO: map to actual DB entities

import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Get all tasks for the current user
 */
export const get = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return [];
    }
    
    return await ctx.db
      .query("tasks")
      .filter((q) => q.eq(q.field("userId"), identity.subject))
      .collect();
  },
});

/**
 * Create a new task for the current user
 */
export const create = mutation({
  args: { 
    text: v.string(),
    isCompleted: v.optional(v.boolean())
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Must be authenticated to create tasks");
    }
    
    const taskId = await ctx.db.insert("tasks", {
      text: args.text,
      isCompleted: args.isCompleted ?? false,
      userId: identity.subject,
      createdAt: Date.now(),
    });
    return taskId;
  },
});

/**
 * Update a task's completion status for the current user
 */
export const toggle = mutation({
  args: { 
    id: v.id("tasks"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Must be authenticated to update tasks");
    }
    
    const task = await ctx.db.get(args.id);
    if (!task) {
      throw new Error("Task not found");
    }
    
    if (task.userId !== identity.subject) {
      throw new Error("Not authorized to update this task");
    }
    
    await ctx.db.patch(args.id, {
      isCompleted: !task.isCompleted,
    });
  },
});

/**
 * Delete a task for the current user
 */
export const remove = mutation({
  args: { 
    id: v.id("tasks"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Must be authenticated to delete tasks");
    }
    
    const task = await ctx.db.get(args.id);
    if (!task) {
      throw new Error("Task not found");
    }
    
    if (task.userId !== identity.subject) {
      throw new Error("Not authorized to delete this task");
    }
    
    await ctx.db.delete(args.id);
  },
});
