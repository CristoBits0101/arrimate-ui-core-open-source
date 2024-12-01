import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { usePathname } from '@/i18n/routing'

interface FormErrorProps {
  message?: string
}

export default function FormError({ message }: FormErrorProps) {
  // Example: /settings
  const path = usePathname()
  if (!message) return null
  return (
    <div className={`p-3 rounded-none flex items-center gap-x-2 text-[#F74201] ${path === '/new-verification' || 'unauthorized-access' ? 'pb-0' : ''}`}>
      <ExclamationTriangleIcon className='h-4 w-4' />
      {message}
    </div>
  )
}
