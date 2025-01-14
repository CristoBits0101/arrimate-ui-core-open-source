// Icons
import { CheckCircledIcon } from '@radix-ui/react-icons'

// Routing
import { usePathname } from '@/i18n/routing'

// Type props
interface FormSuccessProps {
  message?: string
}

/**
 * Show success message
 * 
 * @param message 
 * @returns 
 */
export default function FormSuccess({ message }: FormSuccessProps) {
  // Example: /settings
  const path = usePathname()
  // Exit if no message exists
  if (!message) return null
  // View success
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
