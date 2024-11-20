import OptionsButton from '@/modules/configuration/components/buttons/options-button'
import languageIcon from '@/modules/configuration/assets/icons/buttons/settings/language.svg'
import themesIcon from '@/modules/configuration/assets/icons/buttons/settings/themes.svg'
import { useTranslations } from 'next-intl'

interface OptionsPanelProps {
  selectedLanguage: string
  selectedTheme: string
  handleSelectOption: (option: 'language' | 'theme') => void
}

const OptionsPanel: React.FC<OptionsPanelProps> = ({
  selectedLanguage,
  selectedTheme,
  handleSelectOption
}) => {
  const t = useTranslations('SettingsPanel')

  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-full h-fit py-4 border-b-[0.05rem] border-[#EBEAEB] border-solid'>
        <h2 className='w-full text-center text-lg font-medium'>
          {t('settings')}
        </h2>
      </div>
      <div className='w-full h-fit flex flex-col'>
        <OptionsButton
          icon={languageIcon}
          label={
            selectedLanguage === 'en'
              ? t('language.english')
              : t('language.spanish')
          }
          onClick={() => handleSelectOption('language')}
          altText={t('languageIconAlt')}
        />
        <OptionsButton
          icon={themesIcon}
          label={t(`themes.${selectedTheme}`)}
          onClick={() => handleSelectOption('theme')}
          altText={t('themesIconAlt')}
        />
      </div>
    </div>
  )
}

export default OptionsPanel
