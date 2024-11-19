'use server'

import * as z from 'zod'
import { AuthError } from 'next-auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/config/routes'
import { signIn } from '@/lib/auth'
import { SignInSchema } from '@/modules/auth/schemas'

export default async function SignIn(values: z.infer<typeof SignInSchema>) {
  const validatedFields = SignInSchema.safeParse(values)
  if (!validatedFields.success) return { error: 'Invalid!' }
  const { email, password } = validatedFields.data
  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
    console.log('Sign-in response:')
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' }
        default:
          return { error: 'Something went wrong!' }
      }
    }
  }
}
