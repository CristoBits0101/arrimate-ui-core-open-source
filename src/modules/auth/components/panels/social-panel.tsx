'use client'

import SignInSocialButton from '@/modules/auth/components/buttons/sign-in/sign-in-social-button'
import appleL from '@/modules/auth/assets/icons/buttons/o-auth/light/apple.svg'
import google from '@/modules/auth/assets/icons/buttons/o-auth/light/google.svg'
import microsoft from '@/modules/auth/assets/icons/buttons/o-auth/light/microsoft.svg'

export default function SocialPanel() {
  return (
    <div className='flex items-center w-full gap-x-5'>
      <SignInSocialButton
        iconSrc={google}
        onClick={() => alert('Sign in with Google is coming soon!')}
      />
      <SignInSocialButton
        iconSrc={microsoft}
        onClick={() => alert('Sign in with Microsoft')}
      />
      <SignInSocialButton
        iconSrc={appleL}
        onClick={() => alert('Sign in with Apple')}
      />
    </div>
  )
}
