'use client'

// Custom hook
import useThemeSection from '@/modules/configuration/hooks/useThemeSection'

// Icons
import darkIcon from '@/modules/configuration/assets/icons/buttons/themes/inactive/dark.svg'
import lightIcon from '@/modules/configuration/assets/icons/buttons/themes/inactive/light.svg'

// next/image
import Image from 'next/image'

const ThemeButton: React.FC = () => {
  const { theme, changeTheme } = useThemeSection()

  // Conditional rendering of icon and alt
  const isDarkMode = theme === 'dark'
  const iconSrc = isDarkMode ? lightIcon : darkIcon
  const altText = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'

  // Switch between light and dark
  const handleThemeToggle = () => {
    const nextTheme = isDarkMode ? 'light' : 'dark'
    changeTheme(nextTheme)
  }

  return (
    <button
      className='w-fit h-fit outline-none border-none  transition-colors bg-transparent'
      onClick={handleThemeToggle}
    >
      <Image
        src={iconSrc}
        alt={altText}
        className='w-5 h-auto object-cover aspect-square'
      />
    </button>
  )
}

export default ThemeButton
