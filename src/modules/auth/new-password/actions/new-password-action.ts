'use server'

// Bcrypt: To encrypt the password
import bcrypt from 'bcryptjs'

// Data: Get token for reset password
import { getPasswordResetTokenByToken } from '@/modules/auth/data/tokens/verification-reset-token'

// Data: Function that queries the database
import { getUserByEmail } from '@/modules/auth/data/users/user-data'

// Prisma: To consult the database
import { db } from '@/lib/orm/prisma-client'

// Schema: Validation schema for new password
import { NewPasswordSchema } from '@/modules/auth/new-password/schemas'

// Zod: To validate data in the backend
import * as z from 'zod'

const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null,
) => {
  // Check if token exists
  if (!token) return { error: 'notifyRequest' }

  // Check if data passed validations
  const validatedFields = NewPasswordSchema.safeParse(values)

  // Check validations
  if (!validatedFields.success) return { error: 'invalidData' }

  // Extract fields
  const { password } = validatedFields.data

  // Check if the token is valid
  const existingToken = await getPasswordResetTokenByToken(token)

  // Check if the user exists
  if (!existingToken) return { error: 'notifyRequest' }

  // Get token timestamp is activated
  const hasExpired = new Date(existingToken?.expiresAt) < new Date()

  // Check if token has expired
  if (hasExpired) return { error: 'notifyExpired' }

  // Get user by email
  const existingUser = await getUserByEmail(existingToken.email)

  // Check if the user exists
  if (!existingUser) return { error: 'lostEmail' }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10)

  // Update the user with the new password
  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword }
  })

  // Delete token
  await db.resetPasswordToken.delete({
    where: { id: existingToken.id }
  })

  // Return confirmation of password is changed
  return { success: 'notifyUpdated' }
}

export default newPassword