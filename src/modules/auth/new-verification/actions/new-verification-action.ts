'use server'

// Data: Access user and token information
import { getUserByEmail } from '@/data/users/get-user'
import { getVerificationTokenByToken } from '@/data/tokens/check-token'

// Prisma: To consult the database
import { db } from '@/lib/orm/prisma-client'

export default async function newVerificationAction(token: string) {
  // Check if the token exists
  const existingToken = await getVerificationTokenByToken(token)

  // Return an error if the token does not exist
  if (!existingToken) return { error: 'lostProcess' }

  // Check if the token expired
  const hasExpired = new Date(existingToken.expiresAt) < new Date()

  // Return an error if the token expired
  if (hasExpired) return { error: 'lostVerification' }

  // Check if the user exists
  const existingUser = await getUserByEmail(existingToken.email)

  // Return an error if the user does not exist
  if (!existingUser) return { error: 'lostEmail' }

  // Update the user profile
  await db.user.update({
    where: { id: existingUser.id },
    data: { emailVerified: new Date(), email: existingToken.email }
  })

  // Delete token after verifying email
  await db.verificationToken.delete({
    where: { id: existingToken.id }
  })

  // Return success
  return { success: 'notifyVerification' }
}
