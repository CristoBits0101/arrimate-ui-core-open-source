import { CheckCircledIcon } from '@radix-ui/react-icons'

interface FormSuccessProps {
  message?: string
}

export default function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null
  return (
    <div className='p-3 rounded-none flex items-center gap-x-2 text-sm text-emerald-500'>
      <CheckCircledIcon className='h-5 w-5' />
      {message}
    </div>
  )
}
