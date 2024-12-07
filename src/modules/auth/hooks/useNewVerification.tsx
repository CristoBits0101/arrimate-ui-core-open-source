'use client'

// Actions: Encapsulates backend logic
import newVerificationAction from '@/modules/auth/actions/new-verification-action'

// Hooks: React hooks for state and effects
import { useCallback, useEffect, useState } from 'react'

// Intl: To get translations
import { useLocale, useTranslations } from 'next-intl'

// Navigation: To retrieve URL parameters
import { useSearchParams } from 'next/navigation'

export const useNewVerification = () => {
  // Manage error and success messages
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  // Access localized strings for feedback messages
  const t = useTranslations('AuthActions')

  // Retrieve current language
  const locale = useLocale()

  // Extract the token from the URL parameters
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  // Handle the verification process
  const onSubmit = useCallback(() => {
    if (success || error) return
    if (!token) {
      setError(t('lostProcess'))
      return
    }
    newVerificationAction(token, locale)
      .then((data) => {
        setSuccess(data.success)
        setError(data.error)
      })
      .catch(() => {
        setError(t('notifyDisconnect'))
      })
  }, [token, success, error, locale, t])

  // Trigger the verification process on component mount
  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  // Return values
  return {
    success,
    error,
    isLoading: !success && !error
  }
}
