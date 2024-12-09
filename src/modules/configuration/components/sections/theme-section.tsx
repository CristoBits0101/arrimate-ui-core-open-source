'use client'

// Imports the OptionButton component for rendering theme options
import OptionButton from '@/modules/configuration/components/buttons/option-button'

// Imports icons for active and inactive dark theme states
import activeDarkIcon from '@/modules/configuration/assets/icons/buttons/themes/active/dark.svg'
import inactiveDarkIcon from '@/modules/configuration/assets/icons/buttons/themes/inactive/dark.svg'

// Imports icons for active and inactive light theme states
import activeLightIcon from '@/modules/configuration/assets/icons/buttons/themes/active/light.svg'
import inactiveLightIcon from '@/modules/configuration/assets/icons/buttons/themes/inactive/light.svg'

// Imports icons for active and inactive system theme states
import activeSystemIcon from '@/modules/configuration/assets/icons/buttons/themes/active/system.svg'
import inactiveSystemIcon from '@/modules/configuration/assets/icons/buttons/themes/inactive/system.svg'

// Imports a custom hook to manage theme selection
import useThemeSection from '@/modules/configuration/hooks/useThemeSection'

// Imports the useTranslations hook for handling translations
import { useTranslations } from 'next-intl'

// Defines the ThemeSection component for selecting themes
const ThemeSection = () => {
  // Extracts the current theme and the function to change themes from the custom hook
  const { theme, changeTheme } = useThemeSection()

  // Hook to fetch translations within the 'SettingsPanel' namespace
  const t = useTranslations('SettingsPanel')

  // Renders a section with options for dark, light, and system themes
  return (
    <section className='w-full h-fit flex flex-col'>
      <OptionButton
        label={t('themes.dark')}
        isSelected={theme === 'dark'}
        onClick={() => changeTheme('dark')}
        iconSrc={theme === 'dark' ? activeDarkIcon : inactiveDarkIcon}
        altText='Dark theme icon'
      />
      <OptionButton
        label={t('themes.light')}
        isSelected={theme === 'light'}
        onClick={() => changeTheme('light')}
        iconSrc={theme === 'light' ? activeLightIcon : inactiveLightIcon}
        altText='Light theme icon'
      />
      <OptionButton
        label={t('themes.system')}
        isSelected={theme === 'system'}
        onClick={() => changeTheme('system')}
        iconSrc={theme === 'system' ? activeSystemIcon : inactiveSystemIcon}
        altText='System theme icon'
      />
    </section>
  )
}

export default ThemeSection
