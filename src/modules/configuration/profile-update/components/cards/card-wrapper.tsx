'use client'

// Components
import UserArticle from '@/modules/auth/session-data/components/user-article'

// Shadcn
import { Card } from '@/modules/ui/card'

// Types props
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
