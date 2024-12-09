// Imports the PulseLoader component
import { PulseLoader } from 'react-spinners'

// Imports the Button component
import { Button } from '@/modules/ui/button'

// Declares the SubmitButtonProps interface
interface SubmitButtonProps {
  // Optional message
  message?: string
  // Pending state flag
  isPending: boolean
}

// Defines the SubmitButton component
export default function SubmitButton({
  message,
  isPending
}: SubmitButtonProps) {
  return (
    // Renders a Button component
    <Button
      // Disabled if pending
      disabled={isPending}
      // Button type is submit
      type='submit'
      // Styling for the button
      className='w-full rounded-full dark:bg-[#848489] bg-[#453C41] dark:hover:bg-[#b8b8bb] hover:bg-[#1d0f0f] text-[#FFFFFF] dark:text-[#1B1A1F] shadow-sm flex items-center justify-center'
    >
      {/* Shows loader if pending, otherwise message */}
      {isPending ? <PulseLoader /> : message}
    </Button>
  )
}
