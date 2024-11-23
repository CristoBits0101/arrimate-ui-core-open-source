'use client'

import { Button } from '@/modules/ui/button'

interface SignInButtonProps {
  icon: React.ElementType
  onClick: () => void
}

export default function SignInButton({
  icon: Icon,
  onClick
}: SignInButtonProps) {
  return (
    <Button
      size='lg'
      className='dark:bg-[#1d0f0f] w-full rounded-none border-[0.094rem] border-solid dark:border-[#D4DBE2] border-[#EBEAEB] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] text-[#1d0f0f] focus:border-[#1d0f0f] outline-0'
      variant='outline'
      onClick={onClick}
    >
      <Icon className='h-5 w-5' />
    </Button>
  )
}
