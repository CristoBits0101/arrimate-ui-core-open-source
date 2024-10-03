import { Button } from '@/components/ui/button'

interface SignInSubmitProps {
  message?: string
  isPending: boolean
}

export default function SignInSubmit({
  message,
  isPending
}: SignInSubmitProps) {
  return (
    <Button
      disabled={isPending}
      type='submit'
      className='w-full rounded-full bg-[#453C41] hover:bg-[#1d0f0f]'
    >
      {isPending ? 'Processing...' : message}
    </Button>
  )
}
