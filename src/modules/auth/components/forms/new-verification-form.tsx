'use client'

import CardWrapper from '@/modules/auth/components/cards/card-wrapper'
import { BeatLoader } from 'react-spinners'

export default function NewVerificationForm() {
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
