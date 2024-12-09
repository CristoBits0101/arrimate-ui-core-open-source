'use client'

// Imports the SignInSocialButton component
import SignInSocialButton from '@/modules/auth/components/buttons/sign-in/sign-in-social-button'

// Imports the signIn function from NextAuth
import { signIn } from 'next-auth/react'

// Imports the useTranslations hook for localization
import { useTranslations } from 'next-intl'

// Imports React hooks
import { useEffect, useState } from 'react'

// Imports SVG assets for social provider icons
import appleD from '@/modules/auth/assets/icons/o-auth/dark/apple.svg'
import appleL from '@/modules/auth/assets/icons/o-auth/light/apple.svg'
import google from '@/modules/auth/assets/icons/o-auth/light/google.svg'
import microsoft from '@/modules/auth/assets/icons/o-auth/light/microsoft.svg'

// Defines the SocialPanel component
export default function SocialPanel() {
  // Translations for announcements
  const t = useTranslations('Announcements')

  // Handles sign-in logic for social providers
  const onClick = (provider: 'apple' | 'google' | 'microsoft') => {
    signIn(provider, {
      callbackUrl: '/'
    })
  }

  // Tracks the current theme (dark or light)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Determines the default theme based on localStorage or system preferences
    const storedTheme = localStorage.getItem('theme')
    const defaultDark =
      storedTheme === 'dark' ||
      (!storedTheme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    setIsDarkMode(defaultDark)

    // Listens for theme change events
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
    // Renders the social panel container
    <div className='flex items-center w-full h-fit justify-evenly space-x-5'>
      <SignInSocialButton iconSrc={google} onClick={() => onClick('google')} />
      <SignInSocialButton
        iconSrc={microsoft}
        onClick={() => alert(t('microsoft'))}
      />
      <SignInSocialButton
        iconSrc={isDarkMode ? appleD : appleL}
        onClick={() => alert(t('apple'))}
      />
    </div>
  )
}
