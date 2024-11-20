import { Button } from '@/modules/ui/button'
import { signOut } from '@/lib/auth'
import { useTranslations } from 'next-intl'

export default function SignOutButton() {
  const t = useTranslations('Button')

  const handleSignOut = async (e: React.FormEvent<HTMLFormElement>) => {
    'use server'
    e.preventDefault() // Prevenir el comportamiento por defecto del formulario.
    await signOut() // Ejecutar la función de cierre de sesión.
  }

  return (
    <form onSubmit={handleSignOut}>
      <Button type='submit'>{t('SignOut')}</Button>
    </form>
  )
}
