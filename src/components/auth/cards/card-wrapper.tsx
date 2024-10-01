'use client'

import Header from '@/components/auth/cards/card-header'
import SignInSocial from '@/components/auth/buttons/sign-in-social'
import SignUpButton from '@/components/auth/buttons/sign-up-button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

interface CardWrapperProps {
  children: React.ReactNode
  SignUpButtonLabel: string
  SignUpButtonHref: string
  showSocial?: boolean
}

export default function CardWrapper({
  children,
  SignUpButtonLabel,
  SignUpButtonHref,
  showSocial = false
}: CardWrapperProps) {
  return (
    <Card className='w-[25rem] shadow-none rounded-none p-5 mb-5 text-inherit border-[0.05rem] border-solid border-[#bfbdc050]'>
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
        <SignUpButton href={SignUpButtonHref} label={SignUpButtonLabel} />
      </CardFooter>
    </Card>
  )
}
