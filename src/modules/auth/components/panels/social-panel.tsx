'use client'

import SignInSocialButton from '@/modules/auth/components/buttons/sign-in/sign-in-social-button'
import appleD from '@/modules/auth/assets/icons/buttons/o-auth/dark/apple.svg'
import appleL from '@/modules/auth/assets/icons/buttons/o-auth/light/apple.svg'
import google from '@/modules/auth/assets/icons/buttons/o-auth/light/google.svg'
import microsoft from '@/modules/auth/assets/icons/buttons/o-auth/light/microsoft.svg'
import { signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function SocialPanel() {
  // Try to log in with the selected provider
  const onClick = (provider: 'apple' | 'google' | 'microsoft') => {
    signIn(provider, {
      callbackUrl: '/'
    })
  }

  // Sets whether dark mode is active
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
    <div className='flex items-center w-full h-fit justify-evenly space-x-5'>
      <SignInSocialButton iconSrc={google} onClick={() => onClick('google')} />
      <SignInSocialButton
        iconSrc={microsoft}
        onClick={() => onClick('microsoft')}
      />
      <SignInSocialButton
        iconSrc={isDarkMode ? appleD : appleL}
        onClick={() => onClick('apple')}
      />
    </div>
  )
}
