'use client'

import Header from '@/components/auth/cards/card-header'
import SignInSocial from '@/components/auth/buttons/sign-in-social'
import React from 'react'
import SignUpButton from '@/components/auth/buttons/sign-up-button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

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
    <>
      <Card className="w-[25rem] shadow-none rounded-none p-5 mb-5 text-inherit">
        <CardHeader>
          <Header label={headerLabel} />
        </CardHeader>
        <CardContent>{children}</CardContent>
        {showSocial && (
          <CardFooter>
            <SignInSocial />
          </CardFooter>
        )}
      </Card>
      <Card className="w-[25rem] shadow-none rounded-none p-5 mb-5 text-inherit">
        <CardContent className="p-0">
          <SignUpButton href={SignUpButtonHref} label={SignUpButtonLabel} />
        </CardContent>
      </Card>
    </>
  )
}
