'use server'

// Import schema validation for form fields
import * as z from 'zod'

// Import function to generate password reset tokens
import { generateTokenResetPassword } from '@/data/tokens/generate-token'

// Import function to retrieve user information
import { getUserByEmail } from '@/data/users/get-user'

// Import validation schema for reset password
import { ResetPasswordSchema } from '@/modules/auth/reset-password/schemas'

// Import function to send password reset email
import { sendPasswordResetEmail } from '@/lib/email/resendresend'

// Define function to handle reset password requests
const resetPasswordSchema = async (
  values: z.infer<typeof ResetPasswordSchema>,
  emailMessage: string
) => {
  // Validate form fields using the schema
  const validatedFields = ResetPasswordSchema.safeParse(values)

  // Return error if validation fails
  if (!validatedFields.success) return { error: 'invalidData' }

  // Extract validated email from fields
  const { email } = validatedFields.data

  // Retrieve user by email from the database
  const existingUser = await getUserByEmail(email)

  // Return error if user is not found
  if (!existingUser) return { error: 'lostEmail' }

  // Generate password reset token for the user
  const resetPasswordToken = await generateTokenResetPassword(email)

  // Send password reset email to the user
  await sendPasswordResetEmail(
    resetPasswordToken.email,
    resetPasswordToken.token,
    emailMessage
  )

  // Return success message after sending email
  return { success: 'notifyReset' }
}

// Export the resetPasswordSchema function as default
export default resetPasswordSchema
