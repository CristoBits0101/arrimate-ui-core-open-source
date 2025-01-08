'use client'

// Actions: Handles feedback messages (error/success)
import AlertError from '@/modules/auth/status-alerts/error-alert'
import AlertSuccess from '@/modules/auth/status-alerts/success-alert'

// Cards: Card to structure content
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

// Spinners: Loading indicator
import { BeatLoader } from 'react-spinners'

// Intl: To access translations
import { useLocale, useTranslations } from 'next-intl'

// Hooks: Encapsulates verification logic
import { useNewVerification } from '@/modules/auth/new-verification/hooks/useNewVerification'

export default function NewVerificationForm(): React.ReactElement | null {
  // Hook: Handle logic for new verification
  const { success, error, isLoading, hydrated } = useNewVerification()

  // Translations: Get form-related text
  const f = useTranslations('Forms')

  // Locale: Determine the current language for redirects
  const locale = useLocale()

  return hydrated ? (
    <CardWrapper
      pageNameRedirect={
        error
          ? // Redirect if error
            f('newVerificationForm.pageSignUpRedirect')
          : // Redirect if success
            f('newVerificationForm.pageSignInRedirect')
      }
      redirectButtonHref={`/${locale}/sign-in`}
      showDividingLine={true}
    >
      {/* Content: Verification status */}
      <div className='w-full flex flex-col items-center justify-center gap-2'>
        <h2>{f('newVerificationForm.confirmingVerification')}</h2>
        {/* Show loading spinner */}
        {isLoading && <BeatLoader />}
        {/* Display error message */}
        <AlertError message={error} />
        {/* Display success message */}
        <AlertSuccess message={success} />
      </div>
    </CardWrapper>
  ) : null
}
