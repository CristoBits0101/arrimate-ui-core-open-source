'use client'

import signOutAction from '@/modules/auth/actions/sign-out-action'
import { useLocale, useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

export const useSignOut = (): {
  hydrated: boolean
  handleSignOut: () => void
} => {
  // Get translations
  const t = useTranslations('AuthActions')

  const locale = useLocale()
  const [hydrated, setHydrated] = useState(false)

  // Ensure client-side rendering
  useEffect(() => setHydrated(true), [])

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

  return { hydrated, handleSignOut }
}
