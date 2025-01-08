// Prisma Client setup with global caching
import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

// Reuse or initialize Prisma Client
export const db = globalThis.prisma || new PrismaClient()

// Cache Prisma Client in development
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db
