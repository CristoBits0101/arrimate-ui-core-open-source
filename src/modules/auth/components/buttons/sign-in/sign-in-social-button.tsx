// Enables client-side rendering in a Next.js component
'use client'

// Imports the Image component from Next.js
import Image from 'next/image'

// Imports the Button component from the UI module
import { Button } from '@/modules/ui/button'

// Declares the interface for the SignInSocialButton component's props
interface SignInButtonProps {
  // Source URL for the icon
  iconSrc: string
  // Function to handle the button click event
  onClick: () => void
}

// Defines the SignInSocialButton functional component
export default function SignInSocialButton({
  iconSrc,
  onClick
}: SignInButtonProps) {
  return (
    // Renders a styled button element
    <Button
      className='p-2 bg-transparent w-full h-9 rounded-none border-[0.094rem] border-solid dark:border-[#3b3b40] border-[#EBEAEB] dark:hover:bg-[#3b3b40] hover:bg-[#EBEAEB] outline-0'
      variant='outline'
      onClick={onClick}
    >
      {/* Displays an image inside the button */}
      <Image
        src={iconSrc}
        alt='sdfsdfs'
        className='w-5 aspect-square object-fill border-0 outline-0 drop-shadow-sm'
      />
    </Button>
  )
}
