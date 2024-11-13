'use client'

import BackButton from '@/modules/configuration/components/buttons/back-button'
import LanguageSection from '@/modules/configuration/components/sections/language-section'
import ThemeSection from '@/modules/configuration/components/sections/theme-section'
import { useTranslations } from 'next-intl'

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
    <div className='flex flex-col items-center gap-2 py-8'>
      <div className='relative w-full h-fit mb-4'>
        <h2 className='text-center text-lg font-medium'>
          {component === 'language' ? t('language.title') : t('themes.title')}
        </h2>
        <BackButton onClick={handleBack} />
      </div>
      {component === 'language' ? <LanguageSection /> : <ThemeSection />}
    </div>
  )
}
