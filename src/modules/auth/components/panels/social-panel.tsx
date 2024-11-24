'use client'

import SignInSocialButton from '@/modules/auth/components/buttons/sign-in/sign-in-social-button'
import appleL from '@/modules/auth/assets/icons/buttons/o-auth/light/apple.svg'
import facebook from '@/modules/auth/assets/icons/buttons/o-auth/light/facebook.svg'
import google from '@/modules/auth/assets/icons/buttons/o-auth/light/google.svg'
import microsoft from '@/modules/auth/assets/icons/buttons/o-auth/light/microsoft.svg'
import X from '@/modules/auth/assets/icons/buttons/o-auth/light/x.svg'

export default function SocialPanel() {
  return (
    <div className='flex items-center w-full h-fit justify-between'>
      <SignInSocialButton
        iconSrc={google}
        onClick={() => alert('Sign in with Google is coming soon!')}
      />
      <SignInSocialButton
        iconSrc={microsoft}
        onClick={() => alert('Sign in with Microsoft is coming soon!')}
      />
      <SignInSocialButton
        iconSrc={appleL}
        onClick={() => alert('Sign in with Apple is coming soon!')}
      />
      <SignInSocialButton
        iconSrc={facebook}
        onClick={() => alert('Sign in with Facebook is coming soon!')}
      />
      <SignInSocialButton
        iconSrc={X}
        onClick={() => alert('Sign in with X is coming soon!')}
      />
    </div>
  )
}
