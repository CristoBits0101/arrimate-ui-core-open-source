'use client'

import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '@/components/ui/button'

export default function SignInSocial() {
  return (
    <div className='flex items-center w-full gap-x-5'>
      <Button
        size='lg'
        className='w-full rounded-none border-[0.05rem] border-solid border-[#bfbdc050] hover:bg-[#bfbdc050] focus:bg-[#bfbdc050] text-[#1d0f0f] focus:border-[#1d0f0f] outline-0'
        variant='outline'
        onClick={() => {}}
      >
        <FcGoogle className='h-5 w-5' />
      </Button>
      <Button
        size='lg'
        className='w-full rounded-none border-[0.05rem] border-solid border-[#bfbdc050] hover:bg-[#bfbdc050] focus:bg-[#bfbdc050] text-[#1d0f0f] focus:border-[#1d0f0f] outline-0'
        variant='outline'
        onClick={() => {}}
      >
        <FaGithub className='h-5 w-5' />
      </Button>
    </div>
  )
}
