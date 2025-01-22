'use client'

// Form: Manage form status and validation
import { useForm } from 'react-hook-form'

// Intl: To get language and set translations
import { useTranslations } from 'next-intl'

// React: Hooks from React
import { useEffect, useState, useTransition } from 'react'

// Zod: Define data validation rules
import * as z from 'zod'
import { FrontendSignUpSchema } from '@/modules/auth/sign-up/schemas/index'
import { zodResolver } from '@hookform/resolvers/zod'

export function useSignUpForm() {
  // Translations
  const t = useTranslations('AuthActions')
  const z = useTranslations('AuthSchemas')

  // Pass translations to Zod schema
  const SignUpSchema = FrontendSignUpSchema(z)

  // States
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [hydrated, setHydrated] = useState(false)
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
      fetch('http://localhost:4000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
        // Completed
        .then((data) => {
          if (data.ok)
            setSuccess('Register successful')
          else
            setError('')
        })
        // Failed
        .catch((err) => {
          setError(t('notifyUnregister'))
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
