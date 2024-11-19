import { Button } from '@/modules/ui/button'
import { signOut } from '@/lib/auth'
import { useTranslations } from 'next-intl'

export default function SignOutButton() {
  const t = useTranslations('Button')
  return (
    <div>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      ></form>
      <Button type='submit'>{t('SignOut')}</Button>
    </div>
  )
}
