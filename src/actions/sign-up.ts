'use server'

import * as z from 'zod'
import { SignUpSchema } from '@/schemas'

export default async function SignUp(values: z.infer<typeof SignUpSchema>) {
  const validatedFields = SignUpSchema.safeParse(values)
  if (!validatedFields.success) return { error: 'Invalid!' }
  return { success: 'Sent!' }
}
