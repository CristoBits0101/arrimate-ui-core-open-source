'use client'

// Imports the Next.js Image component for optimized image rendering
import Image from 'next/image'

// Imports the SVG icon for the back button
import backIcon from '@/modules/configuration/assets/buttons/navigation/back.svg'

// Imports a hook for handling translations in different languages
import { useTranslations } from 'next-intl'

// Defines the props expected by the BackButton component
interface BackButtonProps {
  onClick: () => void
}

// Defines a functional component that takes onClick as a prop
const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  // Hook to fetch translations in the SettingsPanel namespace
  const t = useTranslations('SettingsPanel')

  // Renders the back button with styling and behavior
  return (
    <button
      className='w-6 absolute left-8 top-1/2 transform -translate-y-1/2 flex items-center bg-[#F4F4F4] aspect-square rounded-full border-[0.05rem] border-[#EBEAEB] border-solid'
      onClick={onClick}
    >
      <Image
        width={24}
        height={24}
        src={backIcon}
        alt={t('backIconAlt', { defaultMessage: 'Back' })}
        className='aspect-square object-contain'
      />
    </button>
  )
}

export default BackButton
