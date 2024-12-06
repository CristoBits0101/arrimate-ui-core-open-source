// Prisma: To interact with the database
import { db } from '@/lib/db'

// Get a verification token by token value
export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: {
        token
      }
    })
    return verificationToken
  } catch (error) {
    // Return null if an error occurs
    return null
  }
}

// Get a verification token by email
export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        email
      }
    })
    return verificationToken
  } catch (error) {
    // Return null if an error occurs
    return null
  }
}
