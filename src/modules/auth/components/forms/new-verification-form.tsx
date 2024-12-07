'use client'

// Actions: Handles feedback messages (error/success)
import AlertError from '@/modules/auth/components/alerts/alert-errors'
import AlertSuccess from '@/modules/auth/components/alerts/alert-success'

// Cards: Card to structure content
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

// Spinners: Loading indicator
import { BeatLoader } from 'react-spinners'

// Intl: To access translations
import { useLocale, useTranslations } from 'next-intl'

// Hooks: Encapsulates verification logic
import { useNewVerification } from '@/modules/auth/hooks/useNewVerification'

export default function NewVerificationForm(): React.ReactElement | null {
  // Hook: Handle logic for new verification
  const { success, error, isLoading } = useNewVerification()

  // Translations: Get form-related text
  const f = useTranslations('Forms')

  // Locale: Determine the current language for redirects
  const locale = useLocale()

  return (
    <CardWrapper
      pageNameRedirect={
        error
          ? f('newVerificationForm.pageSignUpRedirect')
          : f('newVerificationForm.pageSignInRedirect')
      }
      redirectButtonHref={`/${locale}/sign-in`}
      showDividingLine={true}
    >
      {/* Content: Verification status */}
      <div className='w-full flex flex-col items-center justify-center gap-2'>
        <h2>{f('newVerificationForm.confirmingVerification')}</h2>
        {isLoading && <BeatLoader />}
        <AlertError message={error} />
        {!success && <AlertSuccess message={success} />}
      </div>
    </CardWrapper>
  )
}
