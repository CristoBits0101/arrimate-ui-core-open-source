'use client'

import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

export default function NewVerificationForm() {
  return (
    <CardWrapper
      pageNameRedirect='Sign In'
      redirectButtonLabel='Back to'
      redirectButtonHref='/sign-in'
    >
      <div className='w-full flex items-center justify-center'>
        <h2>Confirming your verification</h2>

      </div>
    </CardWrapper>
  )
}
