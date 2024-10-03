// shadcn/ui
import { Button } from '@/components/ui/button'

interface SignInSubmitProps {
  message?: string
}

export default function SignInSubmit({ message }: SignInSubmitProps) {
  return (
    <Button
      type='submit'
      className='w-full rounded-full bg-[#453C41] hover:bg-[#1d0f0f]'
    >
      {message}
    </Button>
  )
}
