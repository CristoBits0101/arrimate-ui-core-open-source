'use server'

// Prisma: To consult the database
import { db } from '@/lib/db'

// Bcrypt: For password validation
import bcrypt from 'bcrypt'

// Zod: Schema validation
import * as z from 'zod'
import { BackendProfileSchema } from '@/modules/configuration/schemas'

// Utilities for email verification
import { generateVerificationToken } from '@/modules/auth/data/tokens/token-generator'
import { sendVerificationEmail } from '@/modules/auth/lib/resend'

export default async function profileAction(
  values: z.infer<typeof BackendProfileSchema>,
  userEmail: string | undefined,
) {
  // Validate input data using Zod
  const validatedFields = BackendProfileSchema.safeParse(values)

  // If validation fails, return an error
  if (!validatedFields.success) return { error: 'invalidData' }

  const {
    name,
    email,
    password,
    newPassword,
    phonePrefix,
    phoneNumber,
    birthdate,
    zipCode,
    country,
    city,
    address,
    occupation,
    interests,
    slogan,
    portfolio
  } = validatedFields.data

  // Retrieve the user from the database
  const verifyEmail = userEmail
  const user = await db.user.findUnique({
    where: { email: verifyEmail }
  })

  if (!user) return { error: 'userNotFound' }

  // Validate password if changing sensitive data
  if (newPassword || email) {
    if (!user.password) return { error: 'invalidCredentials' }
    const passwordMatches = await bcrypt.compare(password, user.password)
    if (!passwordMatches) return { error: 'invalidCredentials' }
  }

  // Handle email change and confirmation
  if (email && email !== user.email) {
    const emailExists = await db.user.findUnique({
      where: { email: email.toLowerCase().trim() }
    })

    if (emailExists) return { error: 'emailAlreadyExists' }

    const verificationToken = await generateVerificationToken(email)
    await sendVerificationEmail(
      email,
      verificationToken.token,
      'Please confirm your email to update your profile'
    )

    return { success: 'emailVerificationSent' }
  }

  // Update fields that are provided, skip null/undefined
  const updateData: Record<string, unknown> = {}

  if (name) updateData.name = name
  if (birthdate) updateData.birthdate = new Date(birthdate)
  if (phonePrefix && phoneNumber) {
    const prefixRegex = /^\+\d{1,4}$/
    const numberRegex = /^\d{6,15}$/
    if (!prefixRegex.test(phonePrefix) || !numberRegex.test(phoneNumber)) {
      return { error: 'invalidPhoneData' }
    }
    updateData.phonePrefixId = phonePrefix
    updateData.phoneNumber = phoneNumber
  }
  if (zipCode) updateData.zipCodeId = zipCode
  if (country) updateData.countryId = country
  if (city) updateData.cityId = city
  if (address) updateData.address = address
  if (occupation) updateData.occupation = occupation
  if (interests) updateData.interests = interests
  if (slogan) updateData.slogan = slogan
  if (portfolio) updateData.portfolioUrl = portfolio

  // Handle password change
  if (newPassword) {
    const hashedNewPassword = await bcrypt.hash(newPassword, 10)
    updateData.password = hashedNewPassword
  }

  // Apply updates to the user record
  try {
    await db.user.update({
      where: { email: verifyEmail },
      data: updateData
    })

    return { success: 'profileUpdated' }
  } catch (error) {
    console.error('Error updating profile: ', error)
    return { error: 'updateFailed' }
  }
}
