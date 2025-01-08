'use server'

// Bcrypt
import bcrypt from 'bcryptjs'

// Prisma
import { db } from '@/lib/orm/prisma-client'

// Queries
import { getPasswordResetTokenByToken } from '@/data/tokens/reset-token'
import { getUserByEmail } from '@/data/users/get-user'

// Validation
import { NewPasswordSchema } from '@/modules/auth/new-password/schemas'

// Zod
import * as z from 'zod'

const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
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
