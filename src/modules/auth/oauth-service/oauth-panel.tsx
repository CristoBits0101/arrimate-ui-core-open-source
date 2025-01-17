'use client'

// Auth
import { signIn } from 'next-auth/react'

// Components
import OAuthButton from '@/modules/auth/oauth-service/oauth-button'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import appleD from '@/assets/icons/buttons/inactive/dark-theme/companies/apple-dark-icon.svg'
import appleL from '@/assets/icons/buttons/inactive/light-theme/companies/apple-light-icon.svg'
import google from '@/assets/icons/buttons/inactive/light-theme/companies/google-light-icon.svg'
import microsoft from '@/assets/icons/buttons/inactive/light-theme/companies/microsoft-light-icon.svg'

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
