'use server'

// Import Zod for data validation
import * as z from 'zod'

// Import AuthError to handle authentication-specific errors
import { AuthError } from 'next-auth'

// Import function to generate verification tokens
import { generateVerificationToken } from '@/modules/auth/data/tokens/token-generator'

// Import function to send verification emails
import { sendVerificationEmail } from '@/modules/auth/lib/resend'

// Import function to perform user sign-in
import { signIn } from '@/modules/auth/lib/auth'

// Import schema for sign-in validation
import { BackendSignInSchema } from '@/modules/auth/schemas'

// Import function to retrieve user details by email
import { getUserByEmail } from '@/modules/auth/data/users/user-data'

// Receive input values ​​and email message
export default async function signInAction(
  values: z.infer<typeof BackendSignInSchema>,
  emailMessage: string
) {
  // Validate input using the Zod schema
  const validatedFields = BackendSignInSchema.safeParse(values)

  // Return error if validation fails
  if (!validatedFields.success) {
    return { error: 'Invalid email or password format!' }
  }

  // Extract email and password from validated input
  const { email, password } = validatedFields.data

  // Retrieve the user from the database using the provided email
  const existingUser = await getUserByEmail(email)

  // Return error if the user does not exist or has incomplete data
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: 'Email does not exist!' }
  }

  // Check if the user's email is not verified
  if (!existingUser.emailVerified) {
    // Generate a verification token for the user's email
    const verificationToken = await generateVerificationToken(
      existingUser.email
    )

    // Send a verification email with the generated token
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
      emailMessage
    )

    // Return success message indicating a confirmation email was sent
    return { success: 'Confirmation email sent!' }
  }

  try {
    // Attempt to sign in the user with the provided credentials
    await signIn('credentials', { email, password, redirect: false })

    // Return success message if sign-in is successful
    return { success: 'Sign-in successful!' }
  } catch (error) {
    // Handle authentication-specific errors
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          // Return error for invalid credentials
          return { error: 'Invalid credentials!' }
        default:
          // Return generic error for other authentication issues
          return { error: 'Something went wrong!' }
      }
    }

    // Log unexpected errors for debugging
    console.error('Unexpected error in SignIn:', error)

    // Return generic server error message
    return { error: 'Unexpected server error.' }
  }
}
