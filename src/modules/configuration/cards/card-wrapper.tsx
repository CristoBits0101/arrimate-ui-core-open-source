'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/modules/ui/card'

interface CardWrapperProps {
  children: React.ReactNode
}

export default function CardWrapper({ children }: CardWrapperProps) {
  return (
    <Card className='relative w-[22rem] shadow-none rounded-none p-5 text-inherit border-[0.094rem] border-solid dark:border-[#3b3b40] border-[#EBEAEB] bg-transparent'>
      <CardHeader>Card header</CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className='px-5 flex flex-col'>Card footer</CardFooter>
    </Card>
  )
}
