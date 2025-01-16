'use client'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import backDarkIcon from '@/assets/icons/buttons/inactive/dark-theme/windows/back-dark-icon.svg'
import backLightIcon from '@/assets/icons/buttons/inactive/light-theme/windows/back-light-icon.svg'

// Image
import Image from 'next/image'

// Type props
interface BackButtonProps {
  onClick: () => void
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  // Context
  const { activeTheme } = useThemeContext()
  return (
    <button
      className='w-6 absolute left-8 top-1/2 transform -translate-y-1/2 flex items-center bg-[#F4F4F4] dark:bg-[#26272C] aspect-square rounded-full border-[0.05rem] dark:border-[#3b3b40] border-[#EBEAEB] border-solid'
      onClick={onClick}
    >
      <Image
        width={24}
        height={24}
        src={activeTheme === 'light' ? backLightIcon : backDarkIcon}
        alt='Back button icon'
        className='aspect-square object-contain'
      />
    </button>
  )
}

export default BackButton
