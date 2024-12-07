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

export function useSignInForm(subject: string) {
  // Get translations
  const t = useTranslations('AuthActions')
  const z = useTranslations('AuthSchemas')

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

  // Handle form submission
  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    // Clear previous messages before sending
    setError('')
    setSuccess('')
    // Checks backend request status
    startTransition(() => {
      // Send input values and email subject to backend
      signInAction(values, subject)
        // Transaction completed
        .then((data) => {
          if (data.error) setError(t(data.error))
          if (data.success) setSuccess(t(data.success))
        })
        // Failed transaction
        .catch((err) => {
          setError(t('notifyUnregister'))
          console.error('Error in SignIn: ', err)
        })
    })
  }

  // Backend finished allowing frontend to render
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
