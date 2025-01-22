'use client'

// Form: Manage form status and validation
import { useForm } from 'react-hook-form'

// Intl: To get language and set translations
import { useTranslations } from 'next-intl'

// React: Hooks from React
import { useEffect, useState, useTransition } from 'react'

// Zod: Define data validation rules
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FrontendSignInSchema } from '@/modules/auth/sign-in/schemas'

export function useSignInForm() {
  // Get translations
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
      console.log(values)
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
