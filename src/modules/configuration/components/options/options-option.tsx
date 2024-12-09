'use client'

// Imports the BackButton component for navigating back
import BackButton from '@/modules/configuration/components/buttons/back-button'

// Imports the LanguageSection component for the language settings
import LanguageSection from '@/modules/configuration/components/sections/language-section'

// Imports the ThemeSection component for the theme settings
import ThemeSection from '@/modules/configuration/components/sections/theme-section'

// Imports the useTranslations hook for handling translations
import { useTranslations } from 'next-intl'

/**
 * Specifies whether to show language or theme section
 * Function to handle back button click
 */
interface OptionsOptionProps {
  component: 'language' | 'theme'
  handleBack: () => void
}

// Defines the OptionPanel component to display language or theme settings
export default function OptionPanel({
  component,
  handleBack
}: OptionsOptionProps) {
  // Hook to fetch translations in the SettingsPanel namespace
  const t = useTranslations('SettingsPanel')
  return (
    <div className='flex flex-col items-center py-4'>
      <div className='w-full h-fit flex items-center pb-4 border-b-[0.05rem] border-[#EBEAEB] border-solid'>
        <h2 className='relative text-center text-lg font-medium w-full'>
          {component === 'language' ? t('language.title') : t('themes.title')}
          <BackButton onClick={handleBack} />
        </h2>
      </div>
      {component === 'language' ? <LanguageSection /> : <ThemeSection />}
    </div>
  )
}
