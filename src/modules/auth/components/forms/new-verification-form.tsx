'use client'

import CardWrapper from '@/modules/auth/components/cards/card-wrapper'
import { BeatLoader } from 'react-spinners'
import { useCallback, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function NewVerificationForm() {
  // Get the token from the path parameters
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  //
  const onSubmit = useCallback(() => {
    console.log(token)
  }, [token])

  // 
  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <CardWrapper
      pageNameRedirect='Sign In'
      redirectButtonLabel='Back to'
      redirectButtonHref='/sign-in'
    >
      <div className='w-full flex items-center justify-center gap-2'>
        <h2>Confirming your verification</h2>
        <BeatLoader />
      </div>
    </CardWrapper>
  )
}
