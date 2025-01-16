'use client'

// Buttons
import OptionsButton from '@/modules/configuration/settings-panel/buttons/options-button'

// Forms
import SignOutForm from '@/modules/auth/sign-out/components/sign-out-form'

// Icons
import languageIcon from '@/assets/icons/buttons/inactive/light-theme/languages/language-light-icon.svg'
import themesIcon from '@/assets/icons/buttons/inactive/light-theme/themes/themes-light-icon.svg'

// Intl
import { useTranslations } from 'next-intl'

// Type props
interface OptionsPanelProps {
  languageLabel: string
  themeLabel: string
  handleSelectOption: (option: 'language' | 'theme') => void
}

/**
 * Settings panel
 */
const OptionsPanel: React.FC<OptionsPanelProps> = ({
  languageLabel,
  themeLabel,
  handleSelectOption
}) => {
  // Translations
  const t = useTranslations('SettingsPanel')
  return (
    <div className='flex flex-col items-center'>
      {/* Panel title */}
      <div className='relative w-full h-fit py-4 border-b-[0.05rem] dark:border-[#3b3b40] border-[#EBEAEB] border-solid'>
        <h2 className='w-full text-center text-lg font-medium'>
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
        {/* Sign out */}
        <SignOutForm />
      </div>
    </div>
  )
}

export default OptionsPanel
