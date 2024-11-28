import Header from '@/modules/auth/components/cards/card-header'
import RedirectButton from '@/modules/auth/components/buttons/redirect/redirect-page-button'
import { Card, CardFooter, CardHeader } from '@/modules/ui/card'

export default function ErrorCard() {
  return (
    <Card className='w-96 shadow-sm'>
      <CardHeader>
        <Header />
      </CardHeader>
      <CardFooter>
        <RedirectButton href='/sign-in' label='Back to' page='Sign In' />
      </CardFooter>
    </Card>
  )
}
