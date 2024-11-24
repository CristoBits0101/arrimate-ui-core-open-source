'use client'

import SignInSocialButton from '@/modules/auth/components/buttons/sign-in/sign-in-social-button'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function SocialPanel() {
  return (
    <div className='flex items-center w-full gap-x-5'>
      <SignInSocialButton
        icon={FcGoogle}
        onClick={() => console.log('Sign in with Google')}
      />
      <SignInSocialButton
        icon={FaApple}
        onClick={() => console.log('Sign in with GitHub')}
      />
    </div>
  )
}
