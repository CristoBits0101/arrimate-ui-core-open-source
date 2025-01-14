// Zod: Validations management
import * as z from 'zod'

// Client validations
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

// Server validations
export const BackendSignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(12).max(64)
})
