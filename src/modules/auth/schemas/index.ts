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
 * Sign in validations
 */

// Backend validations
export const SignInSchema = z.object({
  email: z
  .string()
  .min(1, {
    message: 'Email is required.'
  })
  .email({
    message: 'Invalid email address.'
  }),
  password: z
    .string()
    .min(12, {
      message: 'Minimum 12 characters.'
    })
    .max(64, {
      message: 'Maximum 64 characters.'
    })
})

/**
 * Sign up validations
 */

// Frontend validations
export const getSignUpSchema = (t: (key: string) => string) =>
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
export const SignUpSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required.'
  }),
  email: z
  .string()
  .min(1, {
    message: 'Email is required.'
  })
  .email({
    message: 'Invalid email address.'
  }),
  password: z
    .string()
    .min(12, {
      message: 'Minimum 12 characters.'
    })
    .max(64, {
      message: 'Maximum 64 characters.'
    })
})
