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

// Sign in validations
export const SignInSchema = z.object({
  email: z.string().email({
    message: 'Please provide a valid email address.'
  }),
  password: z
    .string()
    .min(12, {
      message: 'Password must be at least 12 characters.'
    })
    .max(64, {
      message: 'Password cannot exceed 64 characters.'
    })
})

// Sign up validations
export const SignUpSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required.'
  }),
  email: z.string().email({
    message: 'Please provide a valid email address.'
  }),
  password: z
    .string()
    .min(12, {
      message: 'Password must be at least 12 characters.'
    })
    .max(64, {
      message: 'Password cannot exceed 64 characters.'
    })
})
