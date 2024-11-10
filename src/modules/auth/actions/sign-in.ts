'use server'

import * as z from 'zod'
import { SignInSchema } from '@/modules/auth/schemas'

export default async function SignIn(values: z.infer<typeof SignInSchema>) {
  const validatedFields = SignInSchema.safeParse(values)
  if (!validatedFields.success) return { error: 'Invalid!' }
  return { success: 'Sent!' }
}
