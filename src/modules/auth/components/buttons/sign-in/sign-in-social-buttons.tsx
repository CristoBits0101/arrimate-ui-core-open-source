'use client'

import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '@/modules/ui/button'

export default function SocialButtons() {
  return (
    <div className='flex items-center w-full gap-x-5'>
      <Button
        size='lg'
        className='dark:bg-[#1D0F0F] w-full rounded-none border-[0.094rem] border-solid dark:border-[#7B7C81] border-[#EBEAEB] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] text-[#1d0f0f] focus:border-[#1d0f0f] outline-0'
        variant='outline'
        onClick={() => {}}
      >
        <FcGoogle className='h-5 w-5' />
      </Button>
      <Button
        size='lg'
        className='dark:bg-[#1D0F0F] w-full rounded-none border-[0.094rem] border-solid dark:border-[#7B7C81] border-[#EBEAEB] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] text-[#1d0f0f] focus:border-[#1d0f0f] outline-0'
        variant='outline'
        onClick={() => {}}
      >
        <FaGithub className='h-5 w-5' />
      </Button>
    </div>
  )
}
