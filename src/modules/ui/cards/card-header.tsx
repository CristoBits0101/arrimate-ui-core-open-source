// Imports the cn utility function
import { cn } from '@/lib/utils/classnames'

// Imports the ds font utility
import { ds } from '@/lib/google/google-fonts'

// Defines the CardHeader component
export default function CardHeader() {
  return (
    // Renders a container div with styling
    <div className='w-full flex flex-col gap-y-3 items-center justify-center'>
      {/* Renders the main heading with dynamic classes and custom font */}
      <h1 className={cn('text-5xl dark:text-[#ececed]', ds.className)}>
        Arrímate
      </h1>
    </div>
  )
}
