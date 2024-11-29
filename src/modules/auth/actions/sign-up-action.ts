'use server'

// Bcrypt
import bcrypt from 'bcrypt'

// Lib
import { generateVerificationToken } from '@/lib/token'

// Prisma client
import { db } from '@/lib/db'

// Zod
import * as z from 'zod'
import { SignUpSchema } from '@/modules/auth/schemas'

// The data that the user's schema received is saved in value
export default async function SignUpAction(
  values: z.infer<typeof SignUpSchema>
) {
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

    const verificationToken = await generateVerificationToken(email)
    // TODO: Send verification token email

    // Returns an success object
    return { success: 'Confirmation email sent!' }
  } catch (error) {
    // Returns an error object
    return { error: 'Registration failed. Please try again.' }
  }
}
