'use client'

// Actions
import signOutAction from '@/modules/auth/actions/sign-out-action'

// Buttons
import SubmitButton from '@/modules/auth/components/buttons/submit/submit-form-button'

// Intl
import { useLocale, useTranslations } from 'next-intl'

// React
import { useTransition } from 'react'

export default function SignOut() {
  const t = useTranslations('Button')
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()

  const handleSignOut = async (e: React.FormEvent) => {
    e.preventDefault()
    startTransition(async () => {
      const result = await signOutAction()
      if (result.success) window.location.href = `/${locale}/sign-up`
      else {
        console.error('Error al cerrar sesión:', result.error)
        alert('Ocurrió un error al cerrar sesión.')
      }
    })
  }

  return (
    <form onSubmit={handleSignOut}>
      <SubmitButton message='Sign Out' disabled={isPending}>
        {isPending ? t('SigningOut') : t('SignOut')}
      </SubmitButton>
    </form>
  )
}
