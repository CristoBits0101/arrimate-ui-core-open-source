// components/OptionPanel.tsx
'use client'

import BackButton from '@/modules/configuration/components/buttons/back-button'
import LanguageSelector from '../sections/language-section'
import ThemeSelector from '../sections/theme-section'
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
      <div className='relative w-full h-fit'>
        <h2 className='text-center text-lg font-medium'>
          {component === 'language' ? t('language.title') : t('themes.title')}
        </h2>
        <BackButton onClick={handleBack} />
      </div>
      {component === 'language' ? <LanguageSelector /> : <ThemeSelector />}
    </div>
  )
}
