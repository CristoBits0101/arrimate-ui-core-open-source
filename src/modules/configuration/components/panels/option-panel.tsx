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
    <div className='flex flex-col items-center py-4'>
      <div className='w-full h-fit flex items-center pb-4 border-b-[0.05rem] border-[#EBEAEB] border-solid'>
        <h2 className='relative text-center font-medium w-full'>
          {component === 'language' ? t('language.title') : t('themes.title')}
          <BackButton onClick={handleBack} />
        </h2>
      </div>
      {component === 'language' ? <LanguageSection /> : <ThemeSection />}
    </div>
  )
}
