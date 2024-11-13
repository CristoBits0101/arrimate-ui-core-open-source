'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import languageIcon from '@/modules/configuration/assets/icons/buttons/settings/language.svg'
import themesIcon from '@/modules/configuration/assets/icons/buttons/settings/themes.svg'
import OptionButton from '@/modules/configuration/components/panels/option-panel'
import { useTranslations } from 'next-intl'

export default function SettingsPanel() {
  const [selectedOption, setSelectedOption] = useState<'language' | 'theme' | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en')
  const [selectedTheme, setSelectedTheme] = useState<string>('system')
  const t = useTranslations('SettingsPanel')

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'en'
    const storedTheme = localStorage.getItem('theme') || 'system'
    setSelectedLanguage(storedLanguage)
    setSelectedTheme(storedTheme)
  }, [])

  const handleBack = (): void => {
    setSelectedOption(null)
  }

  return (
    <div className='w-full h-full rounded-3xl border-[0.05rem] border-[#EBEAEB] border-solid'>
      {selectedOption === null && (
        <div className='w-full flex flex-col gap-4 m-8'>
          <button
            className='flex items-center gap-2'
            onClick={() => setSelectedOption('language')}
          >
            <Image src={languageIcon} alt={t('languageIconAlt')} className='w-5' />
            {selectedLanguage === 'en' ? t('language.english') : t('language.spanish')}
          </button>
          <button
            className='flex items-center gap-2'
            onClick={() => setSelectedOption('theme')}
          >
            <Image src={themesIcon} alt={t('themesIconAlt')} className='w-5' />
            {t(`themes.${selectedTheme}`)}
          </button>
        </div>
      )}
      {selectedOption !== null && (
        <OptionButton component={selectedOption} handleBack={handleBack} />
      )}
    </div>
  )
}
