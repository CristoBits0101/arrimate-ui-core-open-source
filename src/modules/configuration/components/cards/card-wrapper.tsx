'use client'

import UserArticle from '@/modules/configuration/components/articles/user-article'
import { Card } from '@/modules/ui/card'

interface CardWrapperProps {
  children: React.ReactNode
}

export default function CardWrapper({ children }: CardWrapperProps) {
  return (
    <Card className='relative w-4/5 h-full flex flex-col justify-between rounded-none border-none text-inherit mx-auto bg-transparent shadow-none'>
      <UserArticle />
      {children}
    </Card>
  )
}
