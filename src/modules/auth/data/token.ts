import { db } from '@/lib/db'
import { getPasswordResetTokenByEmail } from '@/modules/auth/data/password-reset-token'
import { getVerificationTokenByEmail } from '@/modules/auth/data/verification-token'
import { v4 as uuidv4 } from 'uuid'

//
export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4()
  const expiresAt = new Date(new Date().getTime() + 3600 * 1000)
  const existingToken = await getPasswordResetTokenByEmail(email)

  //
  if (existingToken)
    await db.resetPasswordToken.delete({
      where: { id: existingToken.id }
    })

  //
  const passwordResetToken = await db.resetPasswordToken.create({
    data: {
      email,
      token,
      expiresAt
    }
  })

  return passwordResetToken
}

//
export const generateVerificationToken = async (email: string) => {
  const token = uuidv4()
  const expiresAt = new Date(new Date().getTime() + 3600 * 1000)
  const existingToken = await getVerificationTokenByEmail(email)

  //
  if (existingToken) {
    await db.verificationToken.delete({
      where: { id: existingToken.id }
    })
  }

  //
  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expiresAt
    }
  })

  return verificationToken
}
