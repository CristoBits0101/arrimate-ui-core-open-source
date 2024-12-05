import { PulseLoader
 } from 'react-spinners'
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
      className='w-full rounded-full dark:bg-[#848489] bg-[#453C41] dark:hover:bg-[#b8b8bb] hover:bg-[#1d0f0f] text-[#FFFFFF] dark:text-[#1B1A1F] shadow-sm flex items-center justify-center'
    >
      {isPending ? <PulseLoader
 /> : message}
    </Button>
  )
}
