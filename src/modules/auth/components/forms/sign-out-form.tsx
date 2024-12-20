'use client'

// Button for handling sign-out action
import OptionsButton from '@/modules/configuration/components/buttons/options-button'

// Icon used in the sign-out button
import signOutIcon from '@/modules/auth/assets/icons/session/sign-out.svg'

// Next.js internationalization utilities
import { useTranslations } from 'next-intl'

// Hook for handling sign-out logic and hydration
import { useSignOut } from '@/modules/auth/hooks/useSignOut'

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
