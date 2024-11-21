'use client'

// Actions
import signOutAction from '@/modules/auth/actions/sign-out-action'

// Components
import OptionsButton from '@/modules/configuration/components/buttons/options-button'

// Icons
import signOutIcon from '@/modules/auth/assets/icons/buttons/session/sign-out.svg'

// Intl
import { useLocale, useTranslations } from 'next-intl'

// React
import React from 'react'

export default function SignOutForm() {
  const locale = useLocale()
  const t = useTranslations('Button')

  const handleSignOut = () => {
    // Trigger sign-out action
    signOutAction()
      .then((result) => {
        if (result.success) window.location.href = `/${locale}/sign-in`
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error)
      })
  }

  // Ensure client-side rendering
  const [hydrated, setHydrated] = React.useState(false)
  React.useEffect(() => setHydrated(true), [])

  return hydrated ? (
    <div className='space-y-5 w-full'>
      <OptionsButton
        icon={signOutIcon}
        label={t('SignOut')}
        onClick={handleSignOut}
        altText='Sign-out icon'
      />
    </div>
  ) : null
}
