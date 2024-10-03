'use client'

import Header from '@/components/auth/cards/card-header'
import SignInSocial from '@/components/auth/buttons/sign-in-social'
import SignUpButton from '@/components/auth/buttons/sign-up-button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

interface CardWrapperProps {
  children: React.ReactNode
  pageNameRedirect: string
  signUpButtonLabel: string
  signUpButtonHref: string
  showSocial?: boolean
}

export default function CardWrapper({
  children,
  pageNameRedirect,
  signUpButtonLabel,
  signUpButtonHref,
  showSocial = false
}: CardWrapperProps) {
  return (
    <Card className='w-[22rem] shadow-none rounded-none p-5 mb-5 text-inherit border-[0.05rem] border-solid border-[#bfbdc050]'>
      <CardHeader>
        <Header />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <SignInSocial />
        </CardFooter>
      )}
      <CardFooter className='p-0'>
        <SignUpButton
          href={signUpButtonHref}
          label={signUpButtonLabel}
          page={pageNameRedirect}
        />
      </CardFooter>
    </Card>
  )
}
