'use server'

import * as z from 'zod'
import { AuthError } from 'next-auth'
import { signIn } from '@/lib/auth'
import { SignInSchema } from '@/modules/auth/schemas'

export default async function SignInAction(values: z.infer<typeof SignInSchema>) {
  const validatedFields = SignInSchema.safeParse(values)
  if (!validatedFields.success)
    return { error: 'Invalid email or password format!' }
  const { email, password } = validatedFields.data
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
