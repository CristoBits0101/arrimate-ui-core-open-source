'use client'

import SignInButton from '@/modules/auth/components/buttons/sign-in/sign-in-social-button'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function SocialPanel() {
  return (
    <div className='flex items-center w-full gap-x-5'>
      <SignInButton
        icon={FcGoogle}
        onClick={() => console.log('Sign in with Google')}
      />
      <SignInButton
        icon={FaGithub}
        onClick={() => console.log('Sign in with GitHub')}
      />
    </div>
  )
}
