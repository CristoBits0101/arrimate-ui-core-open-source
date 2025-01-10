'use client'

// Components
import OptionsButton from '@/modules/configuration/settings-panel/buttons/options-button'

// Custom
import { useSignOut } from '@/modules/auth/sign-out/hooks/useSignOut'

// Icon
import signOutIcon from '@/assets/icons/buttons/inactive/light-theme/auth/sign-out-light-icon.svg'

// Intl
import { useTranslations } from 'next-intl'

// Component to render a sign-out button
export default function SignOutForm(): JSX.Element | null {
  // Load button translations
  const t = useTranslations('Button')
  // Manage hydration state and sign-out action
  const { hydrated, handleSignOut } = useSignOut()
  // Render the sign-out button when hydrated
  return hydrated ? (
    <div className='space-y-5 w-full'>
      <OptionsButton
        icon={signOutIcon}
        label={t('signOut')}
        onClick={handleSignOut}
        altText='Sign-out icon'
      />
    </div>
  ) : null
}
