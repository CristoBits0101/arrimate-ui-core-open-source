'use client'

import signOutAction from '@/modules/auth/actions/sign-out-action'
import { useTranslations } from 'next-intl'
import { useTransition } from 'react'

export default function SignOut() {
  const t = useTranslations('Button')
  const [isPending, startTransition] = useTransition()

  const handleSignOut = async (e: React.FormEvent) => {
    e.preventDefault()
    startTransition(async () => {
      const result = await signOutAction()
      if (result.success) window.location.href = '/sign-in'
      else {
        console.error('Error al cerrar sesión:', result.error)
        alert('Ocurrió un error al cerrar sesión.')
      }
    })
  }

  return (
    <form onSubmit={handleSignOut}>
      <button type='submit' disabled={isPending}>
        {isPending ? t('SigningOut') : t('SignOut')}
      </button>
    </form>
  )
}
