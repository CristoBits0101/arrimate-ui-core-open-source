// Zod: Validations management
import * as z from 'zod'

/**
 * Profile validations
 */

// Frontend validations
export const FrontendProfileSchema = (t: (key: string) => string) =>
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
      }),
    phonePrefix: z.string().regex(/^\+\d{1,4}$/, {
      message: t('invalidPhonePrefix')
    }),
    phoneNumber: z.string().regex(/^\d{6,15}$/, {
      message: t('invalidPhoneNumber')
    }),
    birthdate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, {
        message: t('invalidBirthdate')
      })
      .refine(
        (date) => {
          const today = new Date()
          const birthDate = new Date(date)
          return birthDate < today
        },
        {
          message: t('invalidBirthdate')
        }
      ),
    interests: z.string().optional(),
    slogan: z.string().optional(),
    profession: z.string().optional(),
    location: z.string().optional()
  })

// Backend validations
export const BackendProfileSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email(),
  password: z
    .string()
    .min(12)
    .max(64)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/[^a-zA-Z0-9]/),
  phonePrefix: z.string().regex(/^\+\d{1,4}$/),
  phoneNumber: z.string().regex(/^\d{6,15}$/),
  birthdate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .refine((date) => {
      const today = new Date()
      const birthDate = new Date(date)
      return birthDate < today
    }),
  interests: z.string().optional(),
  slogan: z.string().optional(),
  profession: z.string().optional(),
  location: z.string().optional()
})
