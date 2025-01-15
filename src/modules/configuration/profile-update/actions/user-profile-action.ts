'use server'

// Prisma: To consult the database
import { db } from '@/lib/orm/prisma-client'

// Bcrypt: For password validation
import bcrypt from 'bcrypt'

// Utilities for email verification
import { generateVerificationToken } from '@/data/tokens/generate-token'
import { sendVerificationEmail } from '@/lib/email/resend'

export default async function profileAction(
  values: {
    name?: string
    email?: string
    password?: string
    newPassword?: string
    phonePrefix?: string
    phoneNumber?: string
    birthdate?: string
    zipCode?: string
    country?: string
    city?: string
    address?: string
    occupation?: string
    interests?: string
    slogan?: string
    portfolio?: string
  },
  userEmail: string | undefined
) {
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
  } = values

  // Retrieve the user from the database
  const verifyEmail = userEmail
  const user = await db.user.findUnique({
    where: { email: verifyEmail }
  })

  if (!user) return { error: 'userNotFound' }

  // Validate password if changing sensitive data
  if (newPassword || email) {
    if (!user.password || password === undefined)
      return { error: 'invalidCredentials' }
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
    if (!prefixRegex.test(phonePrefix) || !numberRegex.test(phoneNumber))
      return { error: 'invalidPhoneData' }
    updateData.phonePrefixId = phonePrefix
    updateData.phoneNumber = phoneNumber
  }
  if (zipCode) updateData.zipCode = zipCode
  if (country) updateData.country = country
  if (city) updateData.city = city
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
