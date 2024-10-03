import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

interface FormErrorProps {
  message?: string
}

export default function FormError({ message }: FormErrorProps) {
  if (!message) return null
  return (
    <div className='bg-red-200 p-3 rounded-none flex items-center gap-x-2 text-xs text-red-500'>
      <ExclamationTriangleIcon className='h-4 w-4' />
      {message}
    </div>
  )
}
