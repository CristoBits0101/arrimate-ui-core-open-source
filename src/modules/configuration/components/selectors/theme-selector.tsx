// components/ThemeSelector.tsx
'use client'

import SelectorButton from '@/modules/configuration/components/buttons/selector-button'
import darkIcon from '@/modules/configuration/assets/icons/buttons/dark.svg'
import lightIcon from '@/modules/configuration/assets/icons/buttons/light.svg'
import systemIcon from '@/modules/configuration/assets/icons/buttons/system.svg'
import useThemeSelector from '@/modules/configuration//hooks/useThemeSelector'
import { useTranslations } from 'next-intl'

const ThemeSelector = () => {
  const { theme, changeTheme } = useThemeSelector()
  const t = useTranslations('SettingsPanel')

  return (
    <section className="w-full h-fit flex flex-col">
      <SelectorButton
        label={t('themes.dark')}
        isSelected={theme === 'dark'}
        onClick={() => changeTheme('dark')}
        iconSrc={darkIcon}
        altText="Dark theme icon"
      />
      <SelectorButton
        label={t('themes.light')}
        isSelected={theme === 'light'}
        onClick={() => changeTheme('light')}
        iconSrc={lightIcon}
        altText="Light theme icon"
      />
      <SelectorButton
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
