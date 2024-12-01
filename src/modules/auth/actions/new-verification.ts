'use server'

// Data
import { getUserByEmail } from '@/modules/auth/data/user-data'
import { getVerificationTokenByToken } from '@/modules/auth/data/verification-token'

// Lib
import { db } from '@/lib/db'

export default async function newVerification(token: string) {
  // We check if the token exists
  const existingToken = await getVerificationTokenByToken(token)

  // Return an error if the token does not exist
  if (!existingToken) return { error: 'Token does not exist!' }

  // We check if the token expired
  const hasExpired = new Date(existingToken.expiresAt) < new Date()

  // Return an error if the token expired
  if (hasExpired) return { error: 'Token has expired!' }

  // We check if the user exists
  const existingUser = await getUserByEmail(existingToken.email)

  // Return an error if the user does not exist
  if (!existingUser) return { error: 'Email does not exist!' }

  // Update the user profile
  await db.user.update({
    where: { id: existingUser.id },
    data: { emailVerified: new Date(), email: existingToken.email }
  })

  // Delete token after verifying email
  await db.verificationToken.delete({
    where: { id: existingToken.id }
  })

  // Return a success message if verified correctly
  return { success: 'Email verified!' }
}
