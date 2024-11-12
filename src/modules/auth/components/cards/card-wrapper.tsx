'use client'

import Header from '@/modules/auth/components/cards/card-header'
import SocialButtons from '@/modules/auth/components/buttons/sign-in/sign-in-social-buttons'
import RedirectButton from '@/modules/auth/components/buttons/redirect/redirect-page-button'
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
    <Card className='w-[22rem] shadow-none rounded-none p-5 text-inherit border-[0.094rem] border-solid border-[#EBEAEB]'>
      <CardHeader>
        <Header />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <SocialButtons />
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
