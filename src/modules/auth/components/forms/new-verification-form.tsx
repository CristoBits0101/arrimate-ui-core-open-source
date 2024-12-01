'use client'

import CardWrapper from '@/modules/auth/components/cards/card-wrapper'
import newVerification from '@/modules/auth/actions/new-verification'
import AlertError from '@/modules/auth/components/alerts/alert-errors'
import AlertSuccess from '@/modules/auth/components/alerts/alert-success'
import { BeatLoader } from 'react-spinners'
import { useCallback, useEffect, useState } from 'react'
// Intl
import { useLocale, useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'

export default function NewVerificationForm() {
  //
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  //
  const locale = useLocale()
  const f = useTranslations('Forms')

  // Get the token from the path parameters
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  //
  const onSubmit = useCallback(() => {
    if (success || error) return
    if (!token) {
      setError('Missing token!')
      return
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success)
        setError(data.error)
      })
      .catch(() => {
        setError('Something went wrong!')
      })
  }, [token, success, error])

  //
  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <CardWrapper
      pageNameRedirect={error ? f('newVerificationForm.pageSignUpRedirect') : f('newVerificationForm.pageSignInRedirect')}
      redirectButtonLabel={f('newVerificationForm.redirectButtonLabel')}
      redirectButtonHref={`/${locale}/sign-up`}
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
