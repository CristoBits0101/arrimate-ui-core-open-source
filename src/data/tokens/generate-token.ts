// Database interaction
import { db } from '@/lib/orm/prisma-client'

// Fetch reset token by email
import { getPasswordResetTokenByEmail } from '@/data/tokens/reset-token'

// Verify if email has a token
import { getVerificationTokenByEmail } from '@/data/tokens/check-token'

// Generate unique tokens
import { v4 as uuidv4 } from 'uuid'

/**
 * Generate a password reset token
 *
 * 1. Create a unique token
 * 2. Set 1-hour expiration
 * 3. Check for existing token by email
 * 4. Remove existing token if found
 * 5. Store new token in the database
 * 6. Return the new token
 */
export const generateTokenResetPassword = async (email: string) => {
  // Generate a new token
  const token = uuidv4()

  // Set expiration date (1 hour from now)
  const expiresAt = new Date(new Date().getTime() + 3600 * 1000)

  // Check for token in database
  const existingToken = await getPasswordResetTokenByEmail(email)

  // Delete existing token to prevent duplicates
  if (existingToken)
    await db.resetPasswordToken.delete({
      where: { id: existingToken.id }
    })

  // Create new reset token in database
  const passwordResetToken = await db.resetPasswordToken.create({
    data: {
      email,
      token,
      expiresAt
    }
  })

  // Return the new token
  return passwordResetToken
}

/**
 * Generate a verification token
 *
 * 1. Create a unique token
 * 2. Set 1-hour expiration
 * 3. Check for existing token by email
 * 4. Remove existing token if found
 * 5. Store new token in the database
 * 6. Return the new token
 */

export const generateVerificationToken = async (email: string) => {
  // Generate a unique token
  const token = uuidv4()

  // Set 1-hour expiration
  const expiresAt = new Date(new Date().getTime() + 3600 * 1000)

  // Check for existing verification token
  const existingToken = await getVerificationTokenByEmail(email)

  // Delete existing token to prevent duplicates
  if (existingToken) {
    await db.verificationToken.delete({
      where: { id: existingToken.id }
    })
  }

  // Create new verification token in database
  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expiresAt
    }
  })

  // Return the new token
  return verificationToken
}
