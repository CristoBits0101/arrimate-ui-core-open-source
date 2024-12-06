'use server'

// Bcrypt: To encrypt the password
import bcrypt from 'bcrypt'

// Data: Function that queries the database
import { generateVerificationToken } from '@/modules/auth/data/tokens/token-generator'

// Mail: To send verification email
import { sendVerificationEmail } from '@/modules/auth/lib/resend'

// Prisma: To consult the database
import { db } from '@/lib/db'

// Zod: To validate data in backend
import * as z from 'zod'
import { SignUpSchema } from '@/modules/auth/schemas'

// Receive input values ​​and email message
export default async function signUpAction(
  values: z.infer<typeof SignUpSchema>,
  emailMessage: string
) {
  /**
   * Validation
   *
   * 1. Data validation
   * 2. Returns an error object
   */
  const validatedFields = SignUpSchema.safeParse(values)

  // Returns an error object
  if (!validatedFields.success) return { error: 'invalid' }

  /**
   * Validation
   *
   * 1. Extract fields
   * 2. Check password and email match
   * 3. Regex for special characters
   */
  const { name, email, password } = validatedFields.data

  if (email.toLocaleLowerCase().trim() === password.toLocaleLowerCase().trim())
    return { error: 'cannot' }

  /**
   * Validation
   *
   * 1. Regex for special characters
   * 2. Check for special character in names
   */
  const specialCharsRegex = /^[a-zA-Z\u00C0-\u024F\u0400-\u04FF\s]+$/

  if (!specialCharsRegex.test(name)) return { error: 'contain' }

  /**
   * Validation
   *
   * 1. Format email before storing it
   * 2. We check if the user exists
   * 3. Returns an error object
   */
  const cleanedEmail = email.toLocaleLowerCase().trim()

  const existingUser = await db.user.findUnique({
    where: {
      email: cleanedEmail
    }
  })

  if (existingUser) return { error: 'email' }

  /**
   * Registration
   *
   * 1. Encrypt the password
   * 2. Create a new user
   * 3. 
   * 4. Send verification email
   * 5. Returns an success object
   * 6. Returns an error object
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

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
      emailMessage
    )

    return { success: 'confirmation' }
  } catch (error) {
    return { error: 'registration' }
  }
}
