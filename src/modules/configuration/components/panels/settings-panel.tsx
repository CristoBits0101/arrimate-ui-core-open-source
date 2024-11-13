import languageIcon from '@/modules/configuration/assets/icons/buttons/settings/language.svg'
import themesIcon from '@/modules/configuration/assets/icons/buttons/settings/themes.svg'
import SettingButton from '@/modules/configuration/components/buttons/setting-button'
import OptionButton from '@/modules/configuration/components/panels/option-panel'
import { useSettings } from '@/modules/configuration/hooks/useSettings'
import { useTranslations } from 'next-intl'

export default function SettingsPanel() {
  const {
    selectedOption,
    selectedLanguage,
    selectedTheme,
    handleSelectOption,
    handleBack
  } = useSettings()
  const t = useTranslations('SettingsPanel')

  return (
    <div className='w-full h-full rounded-3xl border-[0.05rem] border-[#EBEAEB] border-solid'>
      {selectedOption === null && (
        <div className='w-full flex flex-col gap-4 m-8'>
          <SettingButton
            icon={languageIcon}
            label={
              selectedLanguage === 'en'
                ? t('language.english')
                : t('language.spanish')
            }
            onClick={() => handleSelectOption('language')}
            altText={t('languageIconAlt')}
          />
          <SettingButton
            icon={themesIcon}
            label={t(`themes.${selectedTheme}`)}
            onClick={() => handleSelectOption('theme')}
            altText={t('themesIconAlt')}
          />
        </div>
      )}
      {selectedOption !== null && (
        <OptionButton component={selectedOption} handleBack={handleBack} />
      )}
    </div>
  )
}
