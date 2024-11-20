'use client'

import { useTranslations } from 'next-intl'

// Panels
import OptionPanel from '@/modules/configuration/components/panels/option-panel'
import OptionsPanel from '@/modules/configuration/components/panels/options-panel'

// Custom hook
import { useSettings } from '@/modules/configuration/hooks/useSettings'

export default function SettingsPanel() {
  const t = useTranslations('SettingsPanel')

  const { selectedOption, handleSelectOption, handleBack } = useSettings()

  return (
    <div className='w-full h-full rounded-3xl border-[0.05rem] border-[#EBEAEB] border-solid'>
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
