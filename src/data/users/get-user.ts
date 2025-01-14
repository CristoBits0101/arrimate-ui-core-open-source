// Access database client
import { db } from '@/lib/orm/prisma-client'

// Fetch user by email
export const getUserByEmail = async (email: string) => {
  try {
    // Search by email
    const user = await db.user.findUnique({ where: { email } })
    // Return user if found
    return user
  } catch {
    return null
  }
}

// Fetch user by ID
export const getUserById = async (id: string) => {
  try {
    // Search by ID
    const user = await db.user.findUnique({ where: { id } })
    // Return user if found
    return user
  } catch {
    return null
  }
}
