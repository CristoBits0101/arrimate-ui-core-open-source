import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Image
import Image from 'next/image'

interface OptionButtonProps {
  label?: string
  isSelected: boolean
  onClick: () => void
  iconSrc: string
  altText: string
}

const SectionButton: React.FC<OptionButtonProps> = ({
  label,
  isSelected,
  onClick,
  iconSrc,
  altText
}) => {
  // Context
  const { activeTheme } = useThemeContext()

  return (
    <button
      className={`text-left text-sm cursor-pointer px-8 py-4 hover:bg-[#F4F4F4] dark:hover:bg-[#26272C] flex justify-between items-center border-b-[0.05rem] border-[#EBEAEB] dark:border-[#3b3b40] border-solid ${
        isSelected && activeTheme === 'light' ? 'bg-[#F4F4F4] font-medium' : ''
      }`}
      onClick={onClick}
    >
      {label}
      <Image
        src={iconSrc}
        alt={altText}
        className='w-5 h-5 aspect-square object-contain'
      />
    </button>
  )
}

export default SectionButton
