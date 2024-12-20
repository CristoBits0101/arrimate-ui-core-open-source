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
    telefonoPrefijo: z.string().regex(/^\+\d{1,4}$/, {
      message: t('invalidPhonePrefix')
    }),
    telefonoNumero: z.string().regex(/^\d{6,15}$/, {
      message: t('invalidPhoneNumber')
    }),
    intereses: z.string().optional(),
    slogan: z.string().optional(),
    profesion: z.string().optional(),
    localizacion: z.string().optional()
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
  telefonoPrefijo: z
    .string()
    .regex(/^\+\d{1,4}$/),
  telefonoNumero: z
    .string()
    .regex(/^\d{6,15}$/),
  intereses: z.string().optional(),
  slogan: z.string().optional(),
  profesion: z.string().optional(),
  localizacion: z.string().optional()
})
