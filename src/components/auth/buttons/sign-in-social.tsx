'use client'

import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '@/components/ui/button'

export default function SignInSocial() {
  return (
    <div className="flex items-center w-full gap-x-10">
      <Button
        size="lg"
        className="w-full rounded-none"
        variant="outline"
        onClick={() => {}}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full rounded-none"
        variant="outline"
        onClick={() => {}}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  )
}
