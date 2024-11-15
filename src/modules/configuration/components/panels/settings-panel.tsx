'use client'

// Panels
import OptionPanel from '@/modules/configuration/components/panels/option-panel'
import OptionsPanel from '@/modules/configuration/components/panels/options-panel'

// Custom hook
import { useSettings } from '@/modules/configuration/hooks/useSettings'

export default function SettingsPanel() {
  const {
    selectedOption,
    selectedLanguage,
    selectedTheme,
    handleSelectOption,
    handleBack
  } = useSettings()

  // Wait for useEffect to finish getting values 
  if (selectedLanguage === null || selectedTheme === null) return null

  return (
    <div className='w-full h-full rounded-3xl border-[0.05rem] border-[#EBEAEB] border-solid'>
      {selectedOption === null ? (
        <OptionsPanel
          selectedLanguage={selectedLanguage}
          selectedTheme={selectedTheme}
          handleSelectOption={handleSelectOption}
        />
      ) : (
        <OptionPanel component={selectedOption} handleBack={handleBack} />
      )}
    </div>
  )
}
