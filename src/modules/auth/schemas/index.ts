// Zod: Validations management
import * as z from 'zod'

// New password validations
export const NewPasswordSchema = z.object({
  password: z
    .string()
    .min(12, {
      message: 'Mínimo 12 caracteres.'
    })
    .max(64, {
      message: 'Máximo 64 caracteres.'
    })
})

// Reset password validations
export const ResetPasswordSchema = z.object({
  email: z.string().email({
    message: 'Please provide a valid email address.'
  })
})

/**
 * Sign In Validations
 */

// Frontend validations
export const FrontendSignInSchema = (t: (key: string) => string) =>
  z.object({
    email: z
      .string()
      .min(1, { message: t('emptyEmail') })
      .email({ message: t('invalidEmail') }),
    password: z
      .string()
      .min(12, { message: t('minPassword') })
      .max(64, { message: t('maxPassword') })
  })

// Backend validations
export const BackendSignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(12).max(64)
})

/**
 * Sign up validations
 */

// Frontend validations
export const FrontendSignUpSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(1, {
      message: t('emptyName')
    }),
    email: z
      .string()
      .min(1, {
        message: t('emptyEmail')
      })
      .email({
        message: t('invalidEmail')
      }),
    password: z
      .string()
      .min(12, {
        message: t('minPassword')
      })
      .max(64, {
        message: t('maxPassword')
      })
  })

// Backend validations
export const BackendSignUpSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email(),
  password: z
    .string()
    .min(12)
    .max(64)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/[^a-zA-Z0-9]/)
})
