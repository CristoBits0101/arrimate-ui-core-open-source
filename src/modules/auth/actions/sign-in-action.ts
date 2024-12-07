'use server'

import * as z from 'zod'
import { BackendSignInSchema } from '@/modules/auth/schemas'
import { getUserByEmail } from '@/modules/auth/data/users/user-data'
import { signIn } from '@/modules/auth/lib/auth'

/**
 * Action: signInAction
 *
 * 1. Validate input values
 * 2. Fetch user from database
 * 3. Validate credentials and authentication
 * 4. Return error/success messages
 */
export default async function signInAction(
  values: z.infer<typeof BackendSignInSchema>
) {
  // Validate input fields
  const validatedFields = BackendSignInSchema.safeParse(values)
  if (!validatedFields.success) return { error: 'invalidData' }

  // Extract fields
  const { email, password } = validatedFields.data

  /**
   * User validation
   *
   * 1. Check if user exists
   * 2. Verify email format
   */
  const existingUser = await getUserByEmail(email)
  if (!existingUser) return { error: 'invalidEmail' }

  /**
   * Authentication
   *
   * 1. Sign in with credentials
   * 2. Handle errors or successful authentication
   */
  try {
    const signInResult = await signIn('credentials', {
      email,
      password,
      redirect: false
    })
    if (!signInResult?.ok) return { error: 'invalidCredentials' }
    return { success: 'signInSuccess' }
  } catch (error) {
    console.error('Error in SignInAction:', error)
    return { error: 'unexpectedError' }
  }
}
