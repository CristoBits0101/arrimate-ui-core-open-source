'use client'

// Components
import OptionsButton from '@/modules/configuration/settings-panel/buttons/options-button'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Custom
import { useSignOut } from '@/modules/auth/sign-out/hooks/useSignOut'

// Icon
import signOutDarkIcon from '@/assets/icons/buttons/inactive/dark-theme/auth/sign-out-dark-icon.svg'
import signOutLightIcon from '@/assets/icons/buttons/inactive/light-theme/auth/sign-out-light-icon.svg'

// Intl
import { useTranslations } from 'next-intl'

// Component to render a sign-out button
export default function SignOutForm(): JSX.Element | null {
  // Context
  const { activeTheme } = useThemeContext()
  // Load button translations
  const t = useTranslations('Button')
  // Manage hydration state and sign-out action
  const { hydrated, handleSignOut } = useSignOut()
  // Render the sign-out button when hydrated
  return hydrated ? (
    <div className='space-y-5 w-full'>
      <OptionsButton
        icon={activeTheme === 'light' ? signOutLightIcon : signOutDarkIcon}
        label={t('signOut')}
        onClick={handleSignOut}
        altText='Sign-out icon'
      />
    </div>
  ) : null
}
