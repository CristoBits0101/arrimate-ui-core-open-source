import * as z from 'zod'

export const SignInSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.'
  }),
  password: z
    .string()
    .min(12, {
      message: 'Password must be at least 12 characters long.'
    })
    .max(64)
})
