'use client'

import UserArticle from '@/modules/configuration/components/articles/user-article'
import { Card, CardContent, CardHeader } from '@/modules/ui/card'

interface CardWrapperProps {
  children: React.ReactNode
}

export default function CardWrapper({ children }: CardWrapperProps) {
  return (
    <Card className='relative w-4/5 h-full rounded-none border-none p-3 text-inherit mx-auto'>
      <CardHeader>
        <UserArticle />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
