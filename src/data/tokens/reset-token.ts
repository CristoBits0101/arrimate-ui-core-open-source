// Access database client
import { db } from '@/lib/orm/prisma-client'

// Fetch password reset token by token
export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    // Search by token
    const resetPasswordToken = await db.resetPasswordToken.findUnique({
      where: { token }
    })
    // Return token if found
    return resetPasswordToken
  } catch {
    return null
  }
}

// Fetch password reset token by email
export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    // Search by email
    const resetPasswordToken = await db.resetPasswordToken.findFirst({
      where: { email }
    })
    // Return token if found
    return resetPasswordToken
  } catch {
    return null
  }
}
