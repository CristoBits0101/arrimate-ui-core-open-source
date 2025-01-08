// Zod: Validations management
import * as z from 'zod'

// Reset password validations
export const ResetPasswordSchema = z.object({
  email: z.string().email({
    message: 'Please provide a valid email address.'
  })
})
