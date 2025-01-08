'use client'

// Components
import { Button } from '@/modules/ui/shadcn/button'

// Images
import Image from 'next/image'

// Type props
interface OAuthButtonProps {
  src: string
  onClick: () => void
}

export default function OAuthButton({ src, onClick }: OAuthButtonProps) {
  return (
    <Button
      className='p-2 bg-transparent w-full h-9 rounded-none border-[0.094rem] border-solid dark:border-[#3b3b40] border-[#EBEAEB] dark:hover:bg-[#3b3b40] hover:bg-[#EBEAEB] outline-0'
      variant='outline'
      onClick={onClick}
    >
      <Image
        src={src}
        alt='Provider icon'
        className='w-5 aspect-square object-fill border-0 outline-0 drop-shadow-sm'
      />
    </Button>
  )
}
