'use client'

// Components
import OptionPanel from '@/layouts/aside/panels/components/option/option-panel'
import OptionsPanel from '@/layouts/aside/panels/components/options/settings-options'

// Custom
import { useSettings } from '@/modules/configuration/settings-panel/hooks/useSettingsPanel'

// Intl
import { useTranslations } from 'next-intl'

// Styles
import '@/modules/configuration/styles/gradient-collection.css'

export default function SettingsPanel() {
  // Translations
  const t = useTranslations('SettingsPanel')
  // States
  const { selectedOption, handleSelectOption, handleBack } = useSettings()
  return (
    <div className='w-full h-full rounded-3xl border-[0.05rem] border-[#EBEAEB] border-solid dark:border-[#3b3b40] shadow-sm gradient-glass'>
      {/* Renders the options panel on click */}
      {selectedOption === null ? (
        <OptionsPanel
          languageLabel={t('language.title')}
          themeLabel={t('themes.title')}
          handleSelectOption={handleSelectOption}
        />
      ) : (
        <OptionPanel component={selectedOption} handleBack={handleBack} />
      )}
    </div>
  )
}
