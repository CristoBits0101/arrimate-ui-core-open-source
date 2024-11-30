'use client'

import Header from '@/modules/auth/components/cards/card-header'
import RedirectButton from '@/modules/auth/components/buttons/redirect/redirect-page-button'
import SettingsPanel from '@/modules/auth/components/panels/settings-panel'
import SocialPanel from '@/modules/auth/components/panels/social-panel'
import { Card, CardContent, CardFooter, CardHeader } from '@/modules/ui/card'
import { useTranslations } from 'next-intl'

interface CardWrapperProps {
  children: React.ReactNode
  pageNameRedirect: string
  redirectButtonLabel: string
  redirectButtonHref: string
  showSocial?: boolean
  showForgotPassword?: boolean
}

export default function CardWrapper({
  children,
  pageNameRedirect,
  redirectButtonLabel,
  redirectButtonHref,
  showSocial = false,
  showForgotPassword = false
}: CardWrapperProps) {
  const t = useTranslations('Forms')
  return (
    <Card className='relative w-[22rem] shadow-none rounded-none p-5 text-inherit border-[0.094rem] border-solid dark:border-[#3b3b40] border-[#EBEAEB] bg-transparent'>
      <SettingsPanel />
      <CardHeader>
        <Header />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <SocialPanel />
        </CardFooter>
      )}
      <CardFooter className='px-5 flex flex-col'>
        {showForgotPassword && (
          <RedirectButton href='/reset-password' label={t('signInForm.forgotPassword')} />
        )}
        <div className='w-full flex justify-center items-center space-x-4 font-light'>
          <p className='text-[#EBEAEB]'>━━━━━━━</p>
          <p className='text-[#767576]'>O</p>
          <p className='text-[#EBEAEB]'>━━━━━━━</p>
        </div>
        <RedirectButton
          href={redirectButtonHref}
          label={redirectButtonLabel}
          page={pageNameRedirect}
        />
      </CardFooter>
    </Card>
  )
}
