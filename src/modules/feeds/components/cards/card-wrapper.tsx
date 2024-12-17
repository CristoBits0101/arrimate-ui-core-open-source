'use client'

// Card header
import Header from '@/modules/feeds/components/cards/card-header'

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
      <div className='overflow-auto'>{children}</div>
    </div>
  )
}
