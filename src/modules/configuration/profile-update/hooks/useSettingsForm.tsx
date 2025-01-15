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

export function useSettingsForm() {
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

  // Get session
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined)
  const { session } = useUserSession()

  useEffect(() => {
    setUserEmail(session?.user?.email || '')
  }, [session])

  // Initialize form with default values
  const form = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: session?.user?.name || '',
      email: session?.user?.email || '',
      password: '',
      country: session?.user?.country || '',
      city: session?.user?.city || '',
      zipCode: session?.user?.zipCode || ''
    }
  })

  // Synchronize form values with session when it changes
  useEffect(() => {
    if (session?.user) {
      form.reset({
        name: session.user.name || '',
        email: session.user.email || '',
        password: '',
        country: session.user.country || '',
        city: session.user.city || '',
        zipCode: session.user.zipCode || ''
      })
    }
  }, [session, form])

  // Handle form submission
  const onSubmit = (values: Record<string, any>) => {
    // Clear previous messages before sending
    setError('')
    setSuccess('')
    console.log('Submitted Values:', values) // Debugging values
    startTransition(() => {
      // Send input values
      profileAction(values, userEmail)
        .then((data) => {
          if (data?.error) setError(t(data.error))
          if (data?.success) setSuccess(t(data.success))
        })
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
