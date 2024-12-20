'use client'

// Custom hook
import useThemeSection from '@/modules/configuration/hooks/sections/useThemeSection'

// Icons
import darkIcon from '@/modules/auth/assets/icons/themes/dark.svg'
import lightIcon from '@/modules/auth/assets/icons/themes/light.svg'

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
    // Button
    <button
      className='w-fit h-fit flex items-center justify-center border-0 outline-none'
      onClick={handleThemeToggle}
    >
      {/* Icon */}
      <Image
        src={iconSrc}
        alt={altText}
        className='w-5 h-5 raspect-square object-cover border-0 outline-0 drop-shadow-sm'
      />
    </button>
  )
}

export default ThemeButton
