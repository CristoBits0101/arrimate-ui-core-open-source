'use client'

// Auth
import { signIn } from 'next-auth/react'

// Components
import OAuthButton from '@/modules/auth/oauth-service/oauth-button'

// Context
import { useThemeContext } from '@/modules/configuration/x/hooks/sections/useThemeContext'

// Icons
import appleD from '@/modules/auth/assets/icons/o-auth/dark/apple.svg'
import appleL from '@/modules/auth/assets/icons/o-auth/light/apple.svg'
import google from '@/modules/auth/assets/icons/o-auth/light/google.svg'
import microsoft from '@/modules/auth/assets/icons/o-auth/light/microsoft.svg'

// Intl
import { useTranslations } from 'next-intl'

export default function OAuthPanel() {
  // Context
  const { activeTheme } = useThemeContext()

  // Theme
  const isDarkMode = activeTheme === 'dark'

  // Sign in
  const onClick = (provider: 'apple' | 'google' | 'microsoft') => {
    signIn(provider, {
      callbackUrl: '/'
    })
  }

  // Translations
  const t = useTranslations('Announcements')

  return (
    <div className='flex items-center w-full h-fit justify-evenly space-x-5'>
      {/* Google */}
      <OAuthButton src={google} onClick={() => onClick('google')} />
      {/* Microsoft */}
      <OAuthButton src={microsoft} onClick={() => alert(t('microsoft'))} />
      {/* Apple */}
      <OAuthButton
        src={isDarkMode ? appleD : appleL}
        onClick={() => alert(t('apple'))}
      />
    </div>
  )
}
