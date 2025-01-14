// Components
import CardWrapper from '@/modules/auth/form-pieces/cards/card-wrapper'

// Icons
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export default function UnauthorizedAccessCard() {
  return (
    <CardWrapper
      // Redirect page name
      pageNameRedirect='Sign In'
      // Redirect button label
      redirectButtonLabel='Back to'
      // Redirect button href
      redirectButtonHref='/sign-in'
    >
      {/* Content inside the card */}
      <div className='w-full flex flex-col gap-2 items-center justify-center'>
        <h2>Please try again in a moment</h2>
        <ExclamationTriangleIcon className='text-destructive' />{' '}
      </div>
    </CardWrapper>
  )
}
