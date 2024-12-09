'use client'

// Panels
import OptionPanel from '@/modules/configuration/components/options/options-option'
import OptionsPanel from '@/modules/configuration/components/options/settings-options'

// Custom hook
import { useSettings } from '@/modules/configuration/hooks/useSettings'

// next-intl
import { useTranslations } from 'next-intl'

// Renders the settings options or the values ​​of the selected option
export default function SettingsPanel() {
  const t = useTranslations('SettingsPanel')
  const { selectedOption, handleSelectOption, handleBack } = useSettings()

  return (
    <div className='w-full h-full rounded-3xl border-[0.05rem] border-[#EBEAEB] border-solid dark:border-[#3b3b40]'>
      {/* If you click on the options panel the option panel is rendered */}
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
