'use server'

// Zod
import * as z from 'zod'
import { SignUpSchema } from '@/schemas'

// Bcrypt
import bcrypt from 'bcrypt'

export default async function SignUp(values: z.infer<typeof SignUpSchema>) {
  // 
  const validatedFields = SignUpSchema.safeParse(values)
  
  // 
  if (!validatedFields.success) return { error: 'Invalid!' }
  
  // 
  const { name, email, password } = validatedFields.data
  
  // We encrypt the user's password with a hash
  const hashedPassword = await bcrypt.hash(password, 10)
  
  // 
  return { success: 'Sent!' }
}
