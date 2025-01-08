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
