import CardWrapper from '@/modules/auth/components/cards/card-wrapper'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export default function UnauthorizedAccessCard() {
  return (
    <CardWrapper
      pageNameRedirect='Sign In'
      redirectButtonLabel='Back to'
      redirectButtonHref='/sign-in'
    >
      <div className='w-full flex items-center justify-center'>
        <h2>Please try again in a moment.</h2>
        <br />
        <ExclamationTriangleIcon className='text-destructive' />
      </div>
    </CardWrapper>
  )
}
