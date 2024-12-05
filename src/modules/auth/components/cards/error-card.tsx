import CardWrapper from '@/modules/auth/components/cards/card-wrapper'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export default function UnauthorizedAccessCard() {
  return (
    <CardWrapper
      pageNameRedirect='Sign In'
      redirectButtonLabel='Back to'
      redirectButtonHref='/sign-in'
    >
      <div className='w-full flex flex-col gap-2 items-center justify-center'>
        <h2>Please try again in a moment</h2>
        <ExclamationTriangleIcon className='text-destructive' />
      </div>
    </CardWrapper>
  )
}
