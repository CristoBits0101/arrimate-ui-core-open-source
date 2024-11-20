'use client'

import OptionsButton from '@/modules/configuration/components/buttons/options-button'
import languageIcon from '@/modules/configuration/assets/icons/buttons/settings/language.svg'
import themesIcon from '@/modules/configuration/assets/icons/buttons/settings/themes.svg'
import { useTranslations } from 'next-intl'

interface OptionsPanelProps {
  languageLabel: string
  themeLabel: string
  handleSelectOption: (option: 'language' | 'theme') => void
}

const OptionsPanel: React.FC<OptionsPanelProps> = ({
  languageLabel,
  themeLabel,
  handleSelectOption
}) => {
  const t = useTranslations('SettingsPanel')

  return (
    <div className='flex flex-col items-center'>
      {/* Panel title */}
      <div className='relative w-full h-fit py-4 border-b-[0.05rem] border-[#EBEAEB] border-solid'>
        <h2 className='w-full text-center text-lg font-medium'>
          {' '}
          {t('settings')}
        </h2>
      </div>
      {/* Selection buttons */}
      <div className='w-full h-fit flex flex-col'>
        <OptionsButton
          icon={languageIcon}
          label={languageLabel}
          onClick={() => handleSelectOption('language')}
          altText='Language icon'
        />
        <OptionsButton
          icon={themesIcon}
          label={themeLabel}
          onClick={() => handleSelectOption('theme')}
          altText='Themes icon'
        />
      </div>
    </div>
  )
}

export default OptionsPanel
