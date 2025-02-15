'use client'

// Custom
import useThemeSection from '@/modules/configuration/settings-panel/hooks/useThemeSection'

// Icons
import darkIcon from '@/assets/icons/themes/dark-icon.svg'
import lightIcon from '@/assets/icons/themes/light-icon.svg'

// Image
import Image from 'next/image'

const ThemeSettingsButton: React.FC = () => {
  const { theme, changeTheme } = useThemeSection()

  // Get theme
  const isDarkMode = theme === 'dark'

  // Conditional rendering
  const iconSrc = isDarkMode ? lightIcon : darkIcon
  const altText = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'

  // Switch between theme
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

export default ThemeSettingsButton
