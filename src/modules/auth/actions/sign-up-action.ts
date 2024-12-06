'use server'

// Bcrypt
import bcrypt from 'bcrypt'

// Lib
import { generateVerificationToken } from '@/modules/auth/data/token'

// Mail
import { sendVerificationEmail } from '@/modules/auth/lib/resend'

// Prisma client
import { db } from '@/lib/db'

// Zod
import * as z from 'zod'
import { SignUpSchema } from '@/modules/auth/schemas'

// The data that the user's schema received is saved in value
export default async function signUpAction(
  values: z.infer<typeof SignUpSchema>,
  emailMessage: string
) {
  // Data validation
  const validatedFields = SignUpSchema.safeParse(values)

  // Returns an error object
  if (!validatedFields.success) return { error: 'validationFailed' }

  // Extract fields
  const { name, email, password } = validatedFields.data

  // Check password and email match
  if (email.toLocaleLowerCase().trim() === password.toLocaleLowerCase().trim())
    return { error: 'cannot' }

  // Regex for special characters
  const specialCharsRegex = /^[a-zA-Z\u00C0-\u024F\u0400-\u04FF\s]+$/

  // Check for special characters in the name
  if (!specialCharsRegex.test(name)) return { error: 'contain' }

  const cleanedEmail = email.toLocaleLowerCase().trim()

  const existingUser = await db.user.findUnique({
    where: {
      email: cleanedEmail
    }
  })

  // Returns an error object
  if (existingUser) return { error: 'email' }

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

    // Send verification email
    const verificationToken = await generateVerificationToken(email)
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
      emailMessage
    )

    // Returns an success object
    return { success: 'confirmation' }
  } catch (error) {
    // Returns an error object
    return { error: 'registration' }
  }
}
