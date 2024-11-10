import * as z from 'zod'

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
