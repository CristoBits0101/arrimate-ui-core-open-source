// Zod: Validations management
import * as z from 'zod'

// Client validations
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

// Server validations
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
