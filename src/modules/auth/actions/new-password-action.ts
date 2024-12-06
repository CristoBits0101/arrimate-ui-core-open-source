'use server'

import * as z from 'zod'
import bcrypt from 'bcryptjs'

import { db } from '@/lib/db'
import { NewPasswordSchema } from '@/modules/auth/schemas'
import { getPasswordResetTokenByToken } from '@/modules/auth/data/verification-reset-token'
import { getUserByEmail } from '@/modules/auth/data/users/user-data'

const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null,
) => {
  // Check if token exists
  if (!token) return { error: 'Missing token' }

  // Check if data passed validations
  const validatedFields = NewPasswordSchema.safeParse(values)

  // Check validations
  if (!validatedFields.success) return { error: 'Invalid data!' }

  // Extract fields
  const { password } = validatedFields.data

  // Check if the token is valid
  const existingToken = await getPasswordResetTokenByToken(token)

  // Check if the user exists
  if (!existingToken) return { error: 'Invalid token!' }

  // Get token timestamp is activated
  const hasExpired = new Date(existingToken?.expiresAt) < new Date()

  // Check if token has expired
  if (hasExpired) return { error: 'Token has expired!' }

  // Get user by email
  const existingUser = await getUserByEmail(existingToken.email)

  // Check if the user exists
  if (!existingUser) return { error: 'Email does not exist!' }

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
  return { success: 'Password updated!' }
}

export default newPassword