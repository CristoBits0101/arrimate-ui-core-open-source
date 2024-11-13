import OptionsPanel from '@/modules/configuration/components/panels/options-panel'
import OptionPanel from '@/modules/configuration/components/panels/option-panel'
import { useSettings } from '@/modules/configuration/hooks/useSettings'

export default function SettingsPanel() {
  const {
    selectedOption,
    selectedLanguage,
    selectedTheme,
    handleSelectOption,
    handleBack
  } = useSettings()

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
