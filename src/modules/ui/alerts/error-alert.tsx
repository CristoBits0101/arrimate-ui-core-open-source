// Icons
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

// Routing
import { usePathname } from '@/i18n/routing'

// Type props
interface FormErrorProps {
  message?: string
}

/**
 * Show error message
 * 
 * @param message 
 * @returns 
 */
export default function FormError({ message }: FormErrorProps) {
  // Example: /settings
  const path = usePathname()
  // Exit if there are no errors
  if (!message) return null
  // View errors
  return (
    <div className={`p-3 rounded-none flex items-center gap-x-2 text-[#F74201] ${path === '/new-verification' || 'unauthorized-access' ? 'pb-0' : ''}`}>
      <ExclamationTriangleIcon className='h-4 w-4' />
      {message}
    </div>
  )
}
