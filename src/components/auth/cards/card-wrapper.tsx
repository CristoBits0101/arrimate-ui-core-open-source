'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Header from '@/components/auth/cards/card-header'
import LoginSocial from '@/components/auth/buttons/sign-in-social'
import SignUpButton from '../buttons/sign-up-button'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  SignUpButtonLabel: string
  SignUpButtonHref: string
  showSocial?: boolean
}

export default function CardWrapper({
  children,
  headerLabel,
  SignUpButtonLabel,
  SignUpButtonHref,
  showSocial = false
}: CardWrapperProps) {
  return (
    <Card className="w-[25rem] shadow-none rounded-none p-5">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <LoginSocial />
        </CardFooter>
      )}
      <CardFooter>
        <SignUpButton href={SignUpButtonHref} label={SignUpButtonLabel} />
      </CardFooter>
    </Card>
  )
}
