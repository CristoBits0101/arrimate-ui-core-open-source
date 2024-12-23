'use client'

import UserArticle from '@/modules/configuration/components/articles/user-article'
import { Card } from '@/modules/ui/card'

interface CardWrapperProps {
  children: React.ReactNode
}

export default function CardWrapper({ children }: CardWrapperProps) {
  return (
    <Card className='relative w-11/12 h-full flex flex-col rounded-none border-none text-inherit mx-auto bg-transparent shadow-none min-w-[720px]'>
      <UserArticle />
      {children}
    </Card>
  )
}
