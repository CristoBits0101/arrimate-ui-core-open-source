'use client'

// Assets
import activeDarkIcon from '@/assets/icons/buttons/active/dark-theme/dark-dark-icon.svg'
import activeDarkSystemIcon from '@/assets/icons/buttons/active/dark-theme/system-dark-icon.svg'
import activeLightIcon from '@/assets/icons/buttons/active/light-theme/light-light-icon.svg'
import activeLightSystemIcon from '@/assets/icons/buttons/active/light-theme/system-light-icon.svg'
import inactiveDarkIcon from '@/assets/icons/buttons/inactive/light-theme/themes/dark-light-icon.svg'
import inactiveDarkSystemIcon from '@/assets/icons/buttons/inactive/dark-theme/themes/system-dark-icon.svg'
import inactiveLightIcon from '@/assets/icons/buttons/inactive/dark-theme/themes/light-dark-icon.svg'
import inactiveLightSystemIcon from '@/assets/icons/buttons/inactive/light-theme/themes/system-light-icon.svg'

// Hooks
import useThemeSection from '@/modules/configuration/settings-panel/hooks/useThemeSection'

// Intl
import { useTranslations } from 'next-intl'

// Shadcn
import OptionButton from '@/modules/configuration/settings-panel/buttons/option-button'

const ThemeSection = () => {
  // Context
  const { theme, changeTheme } = useThemeSection()

  // System
  const systemIconSrc =
    theme === 'system'
      ? window.matchMedia('(prefers-color-scheme: light)').matches
        ? activeLightSystemIcon
        : activeDarkSystemIcon
      : theme === 'light'
      ? inactiveLightSystemIcon
      : inactiveDarkSystemIcon

  // Translations
  const t = useTranslations('SettingsPanel')

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
        iconSrc={systemIconSrc ?? ''}
        altText='System theme icon'
      />
    </section>
  )
}

export default ThemeSection
