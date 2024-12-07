'use client'

// Actions: Encapsulates backend logic
import newVerificationAction from '@/modules/auth/actions/new-verification-action'

// Hooks: React hooks for state and effects
import { useCallback, useEffect, useState } from 'react'

// Intl: To get translations
import { useTranslations } from 'next-intl'

// Navigation: To retrieve URL parameters
import { useSearchParams } from 'next/navigation'

export const useNewVerification = () => {
  // States: Manage error and success messages
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  // Translations: Access localized strings for feedback messages
  const t = useTranslations('AuthActions')

  // Navigation: Extract the token from the URL parameters
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  // Submission: Handle the verification process
  const onSubmit = useCallback(() => {
    // Prevent redundant submissions
    if (success || error) return 
    // Show error if token is missing
    if (!token) {
      setError(t('lostProcess'))
      return
    }
    newVerificationAction(token)
      // Set messages
      .then((data) => {
        if (data.success) setSuccess(t(data.success))
        if (data.error) setError(t(data.error))
      })
      .catch(() => {
        setError(t('notifyDisconnect')) // Handle request failure
      })
  }, [token, success, error, t])

  // Effect: Trigger the verification process on component mount
  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  // Return values: Error, success, and loading state
  return {
    success,
    error,
    isLoading: !success && !error
  }
}
