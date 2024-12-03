'use server'

import * as z from 'zod'
import { AuthError } from 'next-auth'
import { generateVerificationToken } from '@/modules/auth/data/token'
import { sendVerificationEmail } from '@/modules/auth/lib/mail'
import { signIn } from '@/modules/auth/lib/auth'
import { SignInSchema } from '@/modules/auth/schemas'
import { getUserByEmail } from '../data/user-data'

export default async function signInAction(
  values: z.infer<typeof SignInSchema>,
  emailMessage: string
) {
  const validatedFields = SignInSchema.safeParse(values)

  //
  if (!validatedFields.success)
    return { error: 'Invalid email or password format!' }

   // Extract fields
  const { email, password } = validatedFields.data
  const existingUser = await getUserByEmail(email)

  //
  if (!existingUser || !existingUser.email || !existingUser.password)
    return { error: 'Email does not exist!' }

  //
  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    )
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
      emailMessage
    )
    return { success: 'Confirmation email sent!' }
  }

  //
  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false
    })
    return { success: 'Sign-in successful!' }
  } catch (error) {
    if (error instanceof AuthError)
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' }
        default:
          return { error: 'Something went wrong!' }
      }
    console.error('Unexpected error in SignIn:', error)
    return { error: 'Unexpected server error.' }
  }
}
