// Prisma: To interact with the database
import { db } from '@/lib/db'

// Get a password reset token by token
export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const resetPasswordToken = await db.resetPasswordToken.findUnique({
      where: { token }
    })
    return resetPasswordToken
  } catch {
    return null
  }
}

// Get a password reset token by email
export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const resetPasswordToken = await db.resetPasswordToken.findFirst({
      where: { email }
    })
    return resetPasswordToken
  } catch {
    return null
  }
}
