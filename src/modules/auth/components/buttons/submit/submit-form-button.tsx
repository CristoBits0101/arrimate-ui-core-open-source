import { Button } from '@/modules/ui/button'

interface SubmitButtonProps {
  message?: string
  isPending: boolean
}

export default function SubmitButton({
  message,
  isPending
}: SubmitButtonProps) {
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
