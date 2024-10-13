import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

interface FormErrorProps {
  message?: string
}

export default function FormError({ message }: FormErrorProps) {
  if (!message) return null
  return (
    <div className='p-3 rounded-none flex items-center gap-x-2 text-sm text-red-500'>
      <ExclamationTriangleIcon className='h-4 w-4' />
      {message}
    </div>
  )
}
