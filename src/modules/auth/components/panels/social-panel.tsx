'use client'

import { useEffect, useState } from 'react'
import SignInSocialButton from '@/modules/auth/components/buttons/sign-in/sign-in-social-button'
import appleD from '@/modules/auth/assets/icons/buttons/o-auth/dark/apple.svg'
import appleL from '@/modules/auth/assets/icons/buttons/o-auth/light/apple.svg'
import facebook from '@/modules/auth/assets/icons/buttons/o-auth/light/facebook.svg'
import google from '@/modules/auth/assets/icons/buttons/o-auth/light/google.svg'
import microsoft from '@/modules/auth/assets/icons/buttons/o-auth/light/microsoft.svg'
import xD from '@/modules/auth/assets/icons/buttons/o-auth/dark/x.svg'
import xL from '@/modules/auth/assets/icons/buttons/o-auth/light/x.svg'

export default function SocialPanel() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const defaultDark =
      storedTheme === 'dark' ||
      (!storedTheme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    setIsDarkMode(defaultDark)

    const handleThemeChange = (event: CustomEvent) => {
      setIsDarkMode(event.detail === 'dark')
    }

    window.addEventListener('theme-change', handleThemeChange as EventListener)

    return () => {
      window.removeEventListener(
        'theme-change',
        handleThemeChange as EventListener
      )
    }
  }, [])

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
        iconSrc={isDarkMode ? appleD : appleL}
        onClick={() => alert('Sign in with Apple is coming soon!')}
      />
      <SignInSocialButton
        iconSrc={facebook}
        onClick={() => alert('Sign in with Facebook is coming soon!')}
      />
      <SignInSocialButton
        iconSrc={isDarkMode ? xD : xL}
        onClick={() => alert('Sign in with X is coming soon!')}
      />
    </div>
  )
}
