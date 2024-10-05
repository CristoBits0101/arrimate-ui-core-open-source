'use client'

import Header from '@/components/auth/cards/card-header'
import SocialButtons from '@/components/auth/buttons/social-buttons'
import RedirectButton from '@/components/auth/buttons/redirect-button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

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
    <Card className='w-[22rem] shadow-none rounded-none p-5 text-inherit border-[0.094rem] border-solid border-[#bfbdc050]'>
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
