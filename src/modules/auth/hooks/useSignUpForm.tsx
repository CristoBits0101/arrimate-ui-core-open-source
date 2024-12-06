'use client'

// Actions: Encapsulates backend logic
import signUpAction from '@/modules/auth/actions/sign-up-action'

// Form: Manage form status and validation
import { useForm } from 'react-hook-form'

// Intl: To get language and set translations
import { useTranslations } from 'next-intl'

// React: Hooks from React
import { useEffect, useState, useTransition } from 'react'

// Zod: Define data validation rules
import * as z from 'zod'
import { SignUpSchema } from '@/modules/auth/schemas'
import { zodResolver } from '@hookform/resolvers/zod'

export function useSignUpForm(subject: string) {
  // Get translations
  const t = useTranslations('AuthActions')

  // Save action errors
  const [error, setError] = useState<string | undefined>('')

  // Save action success
  const [success, setSuccess] = useState<string | undefined>('')

  // To control component rendering
  const [hydrated, setHydrated] = useState(false)

  // Indicates code execution finished
  const [isPending, startTransition] = useTransition()

  // Type form with SignUpSchema
  const form = useForm<z.infer<typeof SignUpSchema>>({
    // Validate before sending
    resolver: zodResolver(SignUpSchema),
    // Runs on every shipment
    mode: 'onSubmit',
    // Initial state of the fields
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  // Handle form submission
  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    // Clear previous messages before sending
    setError('')
    setSuccess('')
    // Checks backend request status
    startTransition(() => {
      // Send input values and email subject to backend
      signUpAction(values, subject)
        // Transaction completed
        .then((data) => {
          if (data.error) setError(data.error)
          if (data.success) setSuccess(data.success)
        })
        // Failed transaction
        .catch((err) => {
          setError(t('unavailable'))
          console.error('Error in SignUp: ', err)
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
