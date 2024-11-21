'use client'

// Actions
import signOutAction from '@/modules/auth/actions/sign-out-action'

// Alerts
import FormError from '@/modules/auth/components/alerts/alert-errors'
import FormSuccess from '@/modules/auth/components/alerts/alert-success'

// Icons
import signOutIcon from '@/modules/auth/assets/icons/sign-out.svg'

// Intl
import { useLocale, useTranslations } from 'next-intl'

// React
import React, { useState } from 'react'

// Components
import OptionsButton from '@/modules/configuration/components/buttons/options-button'

export default function SignOutForm() {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const locale = useLocale()
  const t = useTranslations('Button')

  const handleSignOut = () => {
    // Reset states
    setError('')
    setSuccess('')
    // Trigger sign-out action
    signOutAction()
      .then((result) => {
        if (result.success) {
          setSuccess('Sesión cerrada exitosamente.')
          window.location.href = `/${locale}/sign-in`
        } else setError(result.error || 'Ocurrió un error al cerrar sesión.')
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error)
        setError('Ocurrió un error inesperado.')
      })
  }

  // Ensure client-side rendering
  const [hydrated, setHydrated] = React.useState(false)
  React.useEffect(() => setHydrated(true), [])

  return hydrated ? (
    <div className='space-y-5 w-full'>
      <FormError message={error} />
      <FormSuccess message={success} />
      <OptionsButton
        icon={signOutIcon}
        label={t('SignOut')}
        onClick={handleSignOut}
        altText='Sign-out icon'
      />
    </div>
  ) : null
}
