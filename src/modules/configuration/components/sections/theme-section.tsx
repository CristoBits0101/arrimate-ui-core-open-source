'use client'

import OptionButton from '@/modules/configuration/components/buttons/option-button'
import darkIcon from '@/modules/configuration/assets/icons/buttons/themes/inactive/dark.svg'
import lightIcon from '@/modules/configuration/assets/icons/buttons/themes/inactive/light.svg'
import systemIcon from '@/modules/configuration/assets/icons/buttons/themes/inactive/system.svg'
import useThemeSection from '@/modules/configuration/hooks/useThemeSection'
import { useTranslations } from 'next-intl'

const ThemeSelector = () => {
  const { theme, changeTheme } = useThemeSection()
  const t = useTranslations('SettingsPanel')

  return (
    <section className="w-full h-fit flex flex-col">
      <OptionButton
        label={t('themes.dark')}
        isSelected={theme === 'dark'}
        onClick={() => changeTheme('dark')}
        iconSrc={darkIcon}
        altText="Dark theme icon"
      />
      <OptionButton
        label={t('themes.light')}
        isSelected={theme === 'light'}
        onClick={() => changeTheme('light')}
        iconSrc={lightIcon}
        altText="Light theme icon"
      />
      <OptionButton
        label={t('themes.system')}
        isSelected={theme === 'system'}
        onClick={() => changeTheme('system')}
        iconSrc={systemIcon}
        altText="System theme icon"
      />
    </section>
  )
}

export default ThemeSelector
