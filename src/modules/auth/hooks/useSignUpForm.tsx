'use client'

// Actions: Encapsulates backend logic
import signUpAction from '@/modules/auth/actions/sign-up-action'

// Form: Manage form status and validation
import { useForm } from 'react-hook-form'

// React: Hooks from React
import { useEffect, useState, useTransition } from 'react'

// Zod: Define data validation rules
import * as z from 'zod'
import { SignUpSchema } from '@/modules/auth/schemas'
import { zodResolver } from '@hookform/resolvers/zod'

export function useSignUpForm(subject: string) {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [hydrated, setHydrated] = useState(false)
  const [isPending, startTransition] = useTransition()

  // Initialize form with react-hook-form
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  // Handle form submission
  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      signUpAction(values, subject)
        .then((data) => {
          setError(data.error)
          setSuccess(data.success)
        })
        .catch((err) => {
          console.error('Error in SignUp:', err)
          setError('An unexpected error occurred.')
        })
    })
  }

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
