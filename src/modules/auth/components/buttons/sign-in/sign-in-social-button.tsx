'use client'

import { Button } from '@/modules/ui/button'
import Image from 'next/image'

interface SignInButtonProps {
  iconSrc: string
  onClick: () => void
}

export default function SignInSocialButton({
  iconSrc,
  onClick
}: SignInButtonProps) {
  return (
    <Button
      className='p-2 bg-transparent w-fit h-fit rounded-none border-[0.094rem] border-solid dark:border-[#3b3b40] border-[#EBEAEB] dark:hover:bg-[#3b3b40] hover:bg-[#EBEAEB] outline-0'
      variant='outline'
      onClick={onClick}
    >
      <Image
        src={iconSrc}
        alt='sdfsdfs'
        className='w-5 aspect-square object-fill border-0 outline-0 drop-shadow-sm'
      />
    </Button>
  )
}
