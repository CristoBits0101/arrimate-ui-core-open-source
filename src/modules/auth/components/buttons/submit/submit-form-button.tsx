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
      className='w-full rounded-full dark:bg-[#7B586B] bg-[#453C41] dark:hover:bg-[#D4DBE2] hover:bg-[#1d0f0f] text-[#FFFFFF] dark:text-[#1d0f0f] shadow-sm'
    >
      {isPending ? 'Processing...' : message}
    </Button>
  )
}
