'use client'

// Card header
import Header from '@/modules/publications/create-post/components/cards/card-header'

// Card styles
import styles from '@/modules/feeds/styles/cards/card-wrapper.module.css'

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
    <div
      className={`w-3/4 h-3/4 grid grid-rows-[auto,1fr] ${styles.cardBorder} rounded-tr-3xl rounded-bl-3xl`}
    >
      <Header title={headerTitle} />
      <div className='w-full h-full flex items-center justify-center bg-[#F4F4F4] rounded-bl-3xl'>
        {children}
      </div>
    </div>
  )
}
