'use client'

import Header from '@/modules/auth/components/cards/card-header'
import LanguagePanel from '@/modules/auth/components/panels/language-panel'
import RedirectButton from '@/modules/auth/components/buttons/redirect/redirect-page-button'
import SocialPanel from '@/modules/auth/components/panels/social-panel'
import ThemePanel from '@/modules/auth/components/panels/theme-panel'
import { Card, CardContent, CardFooter, CardHeader } from '@/modules/ui/card'

interface CardWrapperProps {
  children: React.ReactNode
  pageNameRedirect: string
  redirectButtonLabel: string
  redirectButtonHref: string
  showSocial?: boolean
}

export default function CardWrapper({
  children,
  pageNameRedirect,
  redirectButtonLabel,
  redirectButtonHref,
  showSocial = false
}: CardWrapperProps) {
  return (
    <Card className='relative w-[22rem] shadow-none rounded-none p-5 text-inherit border-[0.094rem] border-solid dark:border-[#424246] border-[#EBEAEB] dark:bg-[#1d0f0f]'>
      <ThemePanel />
      <LanguagePanel />
      <CardHeader>
        <Header />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <SocialPanel />
        </CardFooter>
      )}
      <CardFooter className='p-0'>
        <RedirectButton
          href={redirectButtonHref}
          label={redirectButtonLabel}
          page={pageNameRedirect}
        />
      </CardFooter>
    </Card>
  )
}
