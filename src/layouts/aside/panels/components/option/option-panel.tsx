'use client'

// Components
import BackButton from '@/modules/configuration/settings-panel/buttons/back-button'
import LanguageSection from '@/modules/configuration/settings-panel/components/language-section'
import ThemeSection from '@/modules/configuration/settings-panel/components/theme-section'

// Intl
import { useTranslations } from 'next-intl'

// Type props
interface OptionPanelProps {
  component: 'language' | 'theme'
  handleBack: () => void
}

export default function OptionPanel({
  component,
  handleBack
}: OptionPanelProps) {
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
