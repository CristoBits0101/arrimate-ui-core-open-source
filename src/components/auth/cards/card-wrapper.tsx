'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Header from '@/components/auth/cards/card-header'
import LoginSocial from '@/components/auth/buttons/login-social'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
}

export default function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial = false
}: CardWrapperProps) {
  return (
    <Card className="w-[25rem] shadow-none rounded-none">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <LoginSocial />
        </CardFooter>
      )}
    </Card>
  )
}
