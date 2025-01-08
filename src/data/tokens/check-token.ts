// Database interaction
import { db } from '@/lib/orm/prisma-client'

// Get token by value
export const getVerificationTokenByToken = async (token: string) => {
  try {
    return await db.verificationToken.findUnique({ where: { token } })
  } catch {
    // Return null on error
    return null
  }
}

// Get token by email
export const getVerificationTokenByEmail = async (email: string) => {
  try {
    return await db.verificationToken.findFirst({ where: { email } })
  } catch {
    // Return null on error
    return null
  }
}
