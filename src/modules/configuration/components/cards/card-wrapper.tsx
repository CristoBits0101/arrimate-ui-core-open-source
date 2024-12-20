'use client'

import UserArticle from '@/modules/configuration/components/articles/user-article'
import { Card, CardContent, CardHeader } from '@/modules/ui/card'

interface CardWrapperProps {
  children: React.ReactNode
}

export default function CardWrapper({ children }: CardWrapperProps) {
  return (
    <Card className='relative w-full shadow-none rounded-none p-3 text-inherit border-[0.094rem] border-solid dark:border-[#3b3b40] border-[#EBEAEB] bg-transparent'>
      <CardHeader>
        <UserArticle />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
