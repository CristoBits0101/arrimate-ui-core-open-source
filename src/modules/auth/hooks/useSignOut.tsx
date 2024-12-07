'use client'

// Actions: Handles backend sign-out logic
import signOutAction from '@/modules/auth/actions/sign-out-action'

// Intl: Provides locale and translations for messages
import { useLocale, useTranslations } from 'next-intl'

// React: State and lifecycle management
import { useState, useEffect } from 'react'

// Hook: Manages sign-out logic and ensures client-side rendering
export const useSignOut = (): {
  hydrated: boolean
  handleSignOut: () => void
} => {
  // Translations: Access authentication messages
  const t = useTranslations('AuthActions')

  // Locale: Get the current locale for redirection
  const locale = useLocale()

  // State: Tracks hydration status
  const [hydrated, setHydrated] = useState(false)

  // Effect: Ensures client-side rendering
  useEffect(() => setHydrated(true), [])

  // Sign-out: Handles the sign-out process
  const handleSignOut = () => {
    signOutAction()
      .then((result) => {
        if (result.success) window.location.href = `/${locale}/sign-in`
        if (!result.success) alert(t('notifyDisconnection'))
      })
      .catch((error) => {
        console.error('Error during sign-out: ', error)
      })
  }

  // Return: Hydration state and sign-out handler
  return { hydrated, handleSignOut }
}
