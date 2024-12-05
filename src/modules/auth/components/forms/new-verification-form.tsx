'use client'

// actions
import newVerificationAction from '@/modules/auth/actions/new-verification-action'

// alerts
import AlertError from '@/modules/auth/components/alerts/alert-errors'
import AlertSuccess from '@/modules/auth/components/alerts/alert-success'

// cards
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

// hooks
import { useCallback, useEffect, useState } from 'react'

// spinners
import { BeatLoader } from 'react-spinners'

// Intl
import { useLocale, useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'

export default function NewVerificationForm() {
  // 
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  // Translations
  const locale = useLocale()
  const f = useTranslations('Forms')

  // Get the token from the path parameters
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  // 
  const onSubmit = useCallback(() => {
    if (success || error) return
    if (!token) {
      setError(locale === 'en' ? 'Request not found!' : '¡Solicitud no encontrada!')
      return
    }
    newVerificationAction(token, locale)
      .then((data) => {
        setSuccess(data.success)
        setError(data.error)
      })
      .catch(() => {
        setError(locale === 'en' ? 'Something went wrong!' : '¡Algo salió mal!')
      })
  }, [token, success, error, locale])

  //
  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <CardWrapper
      pageNameRedirect={error ? f('newVerificationForm.pageSignUpRedirect') : f('newVerificationForm.pageSignInRedirect')}
      redirectButtonHref={`/${locale}/sign-in`}
      showDividingLine={true}
    >
      <div className='w-full flex flex-col items-center justify-center gap-2'>
        <h2>{f('newVerificationForm.confirmingVerification') && f('newVerificationForm.confirmingVerification')}</h2>
        {!success && !error && <BeatLoader />}
        <AlertError message={error} />
        {!success && <AlertSuccess message={success} />}
      </div>
    </CardWrapper>
  )
}
