// Zod: Validations management
import * as z from 'zod'

/**
 * Profile validations
 */

// Frontend validations
export const FrontendProfileSchema = (t: (key: string) => string) =>
  z.object({
    name: z
      .string()
      .max(64, { message: t('maxLength') })
      .min(1, { message: t('emptyName') }),
    nickname: z
      .string()
      .max(64, { message: t('maxLength') })
      .optional(),
    gender: z
      .string()
      .refine((value) => ['Male', 'Female', 'Other'].includes(value), {
        message: t('invalidGender')
      }),
    birthdate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: t('invalidBirthdate') })
      .refine(
        (date) => {
          const today = new Date()
          const birthDate = new Date(date)
          return birthDate < today
        },
        { message: t('birthdateInFuture') }
      ),
    phonePrefix: z
      .string()
      .regex(/^\+\d{1,4}$/, { message: t('invalidPhonePrefix') })
      .max(64, { message: t('maxLength') }),
    phoneNumber: z
      .string()
      .regex(/^\d{6,15}$/, { message: t('invalidPhoneNumber') }),
    email: z
      .string()
      .max(64, { message: t('maxLength') })
      .min(1, { message: t('emptyEmail') })
      .email({ message: t('invalidEmail') }),
    password: z
      .string()
      .min(12, { message: t('minPassword') })
      .max(64, { message: t('maxPassword') })
      .regex(/[A-Z]/, { message: t('uppercaseRequired') })
      .regex(/[a-z]/, { message: t('lowercaseRequired') })
      .regex(/\d/, { message: t('numberRequired') })
      .regex(/[^a-zA-Z0-9]/, { message: t('specialCharacterRequired') }),
    newPassword: z
      .string()
      .min(12, { message: t('minPassword') })
      .max(64, { message: t('maxPassword') })
      .regex(/[A-Z]/, { message: t('uppercaseRequired') })
      .regex(/[a-z]/, { message: t('lowercaseRequired') })
      .regex(/\d/, { message: t('numberRequired') })
      .regex(/[^a-zA-Z0-9]/, { message: t('specialCharacterRequired') })
      .optional(),
    zipCode: z
      .string()
      .max(10, { message: t('maxLength') })
      .optional(),
    country: z
      .string()
      .max(64, { message: t('maxLength') })
      .optional(),
    city: z
      .string()
      .max(64, { message: t('maxLength') })
      .optional(),
    address: z
      .string()
      .max(128, { message: t('maxLength') })
      .optional(),
    profession: z
      .string()
      .max(64, { message: t('maxLength') })
      .optional(),
    interests: z
      .array(z.string().max(64))
      .optional()
      .refine((interests) => interests && interests.length <= 10, {
        message: t('tooManyInterests')
      }),
    slogan: z
      .string()
      .max(64, { message: t('maxLength') })
      .optional(),
    portfolio: z
      .string()
      .url({ message: t('invalidPortfolio') })
      .max(128, { message: t('maxLength') })
      .optional()
  })

// Backend validations
export const BackendProfileSchema = z.object({
  name: z.string().min(1).max(64),
  nickname: z.string().max(64).optional(),
  gender: z
    .string()
    .refine((value) => ['Male', 'Female', 'Other'].includes(value)),
  birthdate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .refine((date) => {
      const today = new Date()
      const birthDate = new Date(date)
      return birthDate < today
    }),
  phonePrefix: z
    .string()
    .regex(/^\+\d{1,4}$/)
    .max(64),
  phoneNumber: z.string().regex(/^\d{6,15}$/),
  email: z.string().email().min(1).max(64),
  password: z
    .string()
    .min(12)
    .max(64)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/\d/)
    .regex(/[^a-zA-Z0-9]/),
  newPassword: z
    .string()
    .min(12)
    .max(64)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/\d/)
    .regex(/[^a-zA-Z0-9]/)
    .optional(),
  zipCode: z.string().max(10).optional(),
  country: z.string().max(64).optional(),
  city: z.string().max(64).optional(),
  address: z.string().max(128).optional(),
  occupation: z.string().max(64).optional(),
  interests: z
    .array(z.string().max(64))
    .optional()
    .refine((interests) => !interests || interests.length <= 10),
  slogan: z.string().max(64).optional(),
  portfolio: z.string().url().max(128).optional()
})
