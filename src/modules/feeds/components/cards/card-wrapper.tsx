'use client'

// Card header
import Header from '@/modules/feeds/components/cards/card-header'

// Types allowed
interface CardWrapperProps {
  children: React.ReactNode
  headerTitle: string
}

// Card wrapper
export default function CardWrapper({
  children,
  headerTitle
}: CardWrapperProps) {
  return (
    <div className='w-4/5 h-4/5 grid grid-rows-[auto,1fr]'>
      <Header title={headerTitle} />
      <div className='overflow-auto'>{children}</div>
    </div>
  )
}
