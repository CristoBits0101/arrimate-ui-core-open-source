// Database interaction
import { db } from '@/lib/orm/prisma-client'

// Get password reset token by email
import { getPasswordResetTokenByEmail } from '@/data/tokens/reset-token'

// Checks in bd if an email has an associated token
import { getVerificationTokenByEmail } from '@/data/tokens/check-token'

// Generate unique tokens
import { v4 as uuidv4 } from 'uuid'

/**
 * Generate a password reset token
 *
 * 1. Generate a unique token
 * 2. Set an expiration time (1 hour)
 * 3. Check if an existing token is already associated with the email
 * 4. Delete the existing token if found
 * 5. Create and store a new password reset token in the database
 * 6. Return the newly created token
 */
export const generateTokenResetPassword = async (email: string) => {
  // Generate a new token
  const token = uuidv4()

  // Set expiration date (1 hour from now)
  const expiresAt = new Date(new Date().getTime() + 3600 * 1000)

  // Check for an existing token in the database
  const existingToken = await getPasswordResetTokenByEmail(email)

  // If a token exists, delete it to avoid duplicates
  if (existingToken)
    await db.resetPasswordToken.delete({
      where: { id: existingToken.id }
    })

  // Create a new password reset token in the database
  const passwordResetToken = await db.resetPasswordToken.create({
    data: {
      email,
      token,
      expiresAt
    }
  })

  // Return the newly generated token
  return passwordResetToken
}

/**
 * Generate a verification token
 *
 * 1. Generate a unique token
 * 2. Set an expiration time (1 hour)
 * 3. Check if an existing verification token is already associated with the email
 * 4. Delete the existing token if found
 * 5. Create and store a new verification token in the database
 * 6. Return the newly created token
 */
export const generateVerificationToken = async (email: string) => {
  // Generate a new token
  const token = uuidv4()

  // Set expiration date of 1 hour
  const expiresAt = new Date(new Date().getTime() + 3600 * 1000)

  // Check for an existing verification token in the database
  const existingToken = await getVerificationTokenByEmail(email)

  // If a token exists, delete it to avoid duplicates
  if (existingToken) {
    await db.verificationToken.delete({
      where: { id: existingToken.id }
    })
  }

  // Create a new verification token in the database
  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expiresAt
    }
  })

  // Return the newly generated token
  return verificationToken
}
