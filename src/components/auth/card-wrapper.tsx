'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

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
  showSocial = false,
}: CardWrapperProps) {
  return (
    <Card>
      <CardHeader>
        
      </CardHeader>
      {children}
    </Card>
  )
}
