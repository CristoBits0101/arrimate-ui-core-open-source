'use client'

// Actions: Encapsulates backend logic
import signInAction from '@/modules/auth/actions/sign-in-action'

// Form: Manage form status and validation
import { useForm } from 'react-hook-form'

// Intl: To get language and set translations
import { useTranslations } from 'next-intl'

// React: Hooks from React
import { useEffect, useState, useTransition } from 'react'

// Zod: Define data validation rules
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FrontendSignInSchema } from '@/modules/auth/schemas'

/**
 * Hook: useSignInForm
 *
 * 1. Manages form validation and submission
 * 2. Uses translations for error/success messages
 * 3. Tracks pending state for form submission
 */
export function useSignInForm() {
  // Get translations
  const t = useTranslations('AuthActions') // Error/success messages
  const z = useTranslations('AuthSchemas') // Validation messages

  // Pass translations to Zod schema
  const SignInSchema = FrontendSignInSchema(z)

  // Save action errors
  const [error, setError] = useState<string | undefined>('')

  // Save action success
  const [success, setSuccess] = useState<string | undefined>('')

  // To control component rendering
  const [hydrated, setHydrated] = useState(false)

  // Indicates code execution finished
  const [isPending, startTransition] = useTransition()

  // Type form with SignInSchema
  const form = useForm<z.infer<typeof SignInSchema>>({
    // Validate before sending
    resolver: zodResolver(SignInSchema),
    // Runs on every shipment
    mode: 'onSubmit',
    // Initial state of the fields
    defaultValues: {
      email: '',
      password: ''
    }
  })

  /**
   * Handle form submission
   *
   * 1. Clear previous messages
   * 2. Execute backend action
   * 3. Handle success or error messages
   */
  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      signInAction(values)
        .then((data) => {
          // Translate error
          if (data.error) setError(t(data.error))
          // Translate success
          if (data.success) setSuccess(t(data.success))
        })
        .catch((err) => {
          // Generic error
          setError(t('notifyUnregister'))
          console.error('Error in SignIn: ', err)
        })
    })
  }

  // Ensure client-side rendering
  useEffect(() => setHydrated(true), [])

  return {
    form,
    error,
    success,
    isPending,
    hydrated,
    onSubmit
  }
}
