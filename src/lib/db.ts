/**
 * Prisma Client Initialization with Global Caching
 * 
 * This code sets up a Prisma Client instance for database access in a Next.js application
 * It includes a mechanism to reuse the client during development, preventing multiple instances
 * from being created and ensuring efficient database connections
 */

// Import the PrismaClient class from the Prisma ORM library
import { PrismaClient } from '@prisma/client'

// Declare a global variable `prisma` that can be used across the application
// This ensures that the Prisma Client instance is accessible globally
// without creating multiple instances during development
declare global {
  var prisma: PrismaClient | undefined
}

// Initialize the Prisma Client instance
// - If a global instance (`globalThis.prisma`) exists, reuse it (useful in development)
// - Otherwise, create a new Prisma Client instance
export const db = globalThis.prisma || new PrismaClient()

// In non-production environments, store the Prisma Client instance in `globalThis.prisma`
// This prevents the creation of a new Prisma Client instance on every file change or request
// during development, which could otherwise lead to performance issues or warnings
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db
