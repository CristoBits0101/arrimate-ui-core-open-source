'use client'

// Actions: Encapsulates backend logic
import profileAction from '@/modules/configuration/profile-update/actions/user-profile-action'

// Form: Manage form status and validation
import { useForm } from 'react-hook-form'

// Intl: To get language and set translations
import { useTranslations } from 'next-intl'

// React: Hooks from React
import { useEffect, useState, useTransition } from 'react'

// Session: Custom hook for get user profile
import { useUserSession } from '@/modules/auth/session-data/hooks/useUserSession'

// Zod: Define data validation rules
import * as z from 'zod'
import { FrontendProfileSchema } from '@/modules/configuration/profile-update/schemas/index'
import { zodResolver } from '@hookform/resolvers/zod'

export function useSettingsForm() {
  // Get translations
  const t = useTranslations('AuthActions')
  const z = useTranslations('AuthSchemas')

  // Pass translations to Zod schema
  const ProfileSchema = FrontendProfileSchema(z)

  // Save action errors
  const [error, setError] = useState<string | undefined>('')

  // Save action success
  const [success, setSuccess] = useState<string | undefined>('')

  // To control component rendering
  const [hydrated, setHydrated] = useState(false)

  // Indicates code execution finished
  const [isPending, startTransition] = useTransition()

  // Get session
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined)
  const { session } = useUserSession()

  useEffect(() => {
    setUserEmail(session?.user?.email || '')
  }, [session])

  // Type form with ProfileSchema
  const form = useForm<z.infer<typeof ProfileSchema>>({
    // Validate before sending
    resolver: zodResolver(ProfileSchema),
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
  const onSubmit = (values: z.infer<typeof ProfileSchema>) => {
    // Clear previous messages before sending
    setError('')
    setSuccess('')
    // Checks backend request status
    startTransition(() => {
      // Send input values
      profileAction(values, userEmail)
        // Transaction completed
        .then((data) => {
          if (data?.error) setError(t(data.error))
          if (data?.success) setSuccess(t(data.success))
        })
        // Failed transaction
        .catch((err) => {
          setError(t('notifyUnregister'))
          console.error('Error updating profile: ', err)
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
