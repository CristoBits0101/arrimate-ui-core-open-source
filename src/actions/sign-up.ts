'use server'

// We import the pisma client to make queries
import { db } from '@/lib/db'

// Bcrypt
import bcrypt from 'bcrypt'

// Zod
import * as z from 'zod'
import { SignUpSchema } from '@/schemas'

// The data that the user's schema received is saved in value
export default async function SignUp(values: z.infer<typeof SignUpSchema>) {

  // The sent data is validated and saved in the variable
  const validatedFields = SignUpSchema.safeParse(values)

  // Return error if fields do not pass validations
  if (!validatedFields.success) return { error: 'Invalid!' }

  // Get validated data
  const { name, email, password } = validatedFields.data

  // We encrypt the user's password with a hash
  const hashedPassword = await bcrypt.hash(password, 10)

  //
  const existingUser = await db.user.findUnique({
    where: {
      email
    }
  })

  if (existingUser) return { error: 'Email already in use!' }

  //
  return { success: 'Sent!' }
}
