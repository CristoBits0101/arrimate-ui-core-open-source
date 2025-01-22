'use client'

// Form
import { useForm } from 'react-hook-form'

// Intl
import { useTranslations } from 'next-intl'

// Hooks
import { useEffect, useState, useTransition } from 'react'

// Utils
import { getFingerprint } from '@/modules/auth/sign-in/utils/fingerprint'

// Zod
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FrontendSignInSchema } from '@/modules/auth/sign-in/schemas'

export function useSignInForm() {
  // Translations
  const z = useTranslations('AuthSchemas')

  // Schemas
  const SignInSchema = FrontendSignInSchema(z)

  // States
  const [error, setError] = useState<string | undefined>('')
  const [hydrated, setHydrated] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [success, setSuccess] = useState<string | undefined>('')

  const form = useForm<z.infer<typeof SignInSchema>>({
    // Validation
    resolver: zodResolver(SignInSchema),
    // Trigger
    mode: 'onSubmit',
    // Default
    defaultValues: {
      email: '',
      password: ''
    }
  })

  // Handlers
  const onSubmit = async (values: z.infer<typeof SignInSchema>) => {
    // Clear
    setError('')
    setSuccess('')

    // Hash
    const fingerprint = await getFingerprint()

    // Body
    const data = {
      ...values,
      fingerprint
    }

    // Send
    startTransition(() => {
      fetch('http://localhost:4000/api/v1/users/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        // Completed
        .then((data) => {
          if (data.ok)
            setSuccess('Sign in successful')
          else
            setError('Sign in failed')
        })
        // Failed
        .catch((err) => {
          setError('')
          console.error('', err)
        })
    })
  }

  // Hydrate
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
