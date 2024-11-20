import { signOut } from '@/lib/auth'
import { useTranslations } from 'next-intl'

export default function SignOut() {
  const t = useTranslations('Button')
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button type='submit'>{t('SignOut')}</button>
    </form>
  )
}
