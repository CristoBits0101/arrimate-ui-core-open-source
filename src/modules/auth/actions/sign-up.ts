'use server'

// Prisma client
import { db } from '@/lib/db'

// Bcrypt
import bcrypt from 'bcrypt'

// Zod
import * as z from 'zod'
import { SignUpSchema } from '@/modules/auth/schemas'

// The data that the user's schema received is saved in value
export default async function SignUp(values: z.infer<typeof SignUpSchema>) {
  /**
   * Data validation
   */
  const validatedFields = SignUpSchema.safeParse(values)

  // Returns an error object
  if (!validatedFields.success) return { error: 'Invalid data!' }

  /**
   * Check existence
   */
  const { name, email, password } = validatedFields.data

  const existingUser = await db.user.findUnique({
    where: {
      email
    }
  })

  // Returns an error object
  if (existingUser) return { error: 'Email already in use!' }

  /**
   * Try registration
   */
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })
    // Returns an success object
    return { success: 'Registration completed!' }
  } catch (error) {
    // Returns an error object
    return { error: 'Registration failed. Please try again.' }
  }
}
