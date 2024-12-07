import { CheckCircledIcon } from '@radix-ui/react-icons'
import { usePathname } from '@/i18n/routing'

interface FormSuccessProps {
  message?: string
}

export default function FormSuccess({ message }: FormSuccessProps) {
  // Example: /settings
  const path = usePathname()
  if (!message) return null
  return (
    <div
      className={`p-3 rounded-none flex items-center gap-x-2 text-emerald-500 ${
        path === '/new-verification' || 'unauthorized-access' ? 'pb-0' : ''
      }`}
    >
      <CheckCircledIcon className='h-5 w-5' />
      {message}
    </div>
  )
}
