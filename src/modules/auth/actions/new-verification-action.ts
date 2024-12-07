'use server'

// Data: Access user and token information
import { getUserByEmail } from '@/modules/auth/data/users/user-data'
import { getVerificationTokenByToken } from '@/modules/auth/data/tokens/verification-token-exists'

// Prisma: Database queries
import { db } from '@/lib/db'

export default async function newVerificationAction(token: string, locale: string) {
  // We check if the token exists
  const existingToken = await getVerificationTokenByToken(token)

  // Return an error if the token does not exist
  if (!existingToken)
    return {
      error: locale === 'en' ? 'Token does not exist!' : '¡El token no existe!'
    }

  // We check if the token expired
  const hasExpired = new Date(existingToken.expiresAt) < new Date()

  // Return an error if the token expired
  if (hasExpired)
    return {
      error: locale === 'en' ? 'Token has expired!' : '¡El token ha expirado!'
    }

  // We check if the user exists
  const existingUser = await getUserByEmail(existingToken.email)

  // Return an error if the user does not exist
  if (!existingUser)
    return {
      error:
        locale === 'en'
          ? 'Email does not exist!'
          : '¡El correo electrónico no existe!'
    }

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
  return {
    success:
      locale === 'en' ? 'Email verified!' : '¡Correo electrónico verificado!'
  }
}
