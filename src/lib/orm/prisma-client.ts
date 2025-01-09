// Prisma Client setup
import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

// Initialize or reuse Prisma Client
export const db = globalThis.prisma || new PrismaClient()

// Cache client in development
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db
