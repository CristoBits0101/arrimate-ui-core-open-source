'use server'

import * as z from 'zod'
import { getUserByEmail } from '@/modules/auth/data/user-data'
import { ResetPasswordSchema } from '@/modules/auth/schemas'

const resetPasswordSchema = async (
  values: z.infer<typeof ResetPasswordSchema>
) => {
  const validatedFields = ResetPasswordSchema.safeParse(values)

  // Check if the email is valid
  if (!validatedFields.success) return { error: 'Invalid email!' }

  // Extract fields
  const { email } = validatedFields.data

  // Retrieve the user by email
  const existingUser = await getUserByEmail(email)

  // Check if the user exists
  if (!existingUser) return { error: 'Email not found!' }

  // TODO: Generate token & send email

  return { success: 'Reset email sent!' }
}

export default resetPasswordSchema
