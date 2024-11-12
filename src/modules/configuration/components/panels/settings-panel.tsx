'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import language from '@/modules/configuration/assets/icons/selectors/language.svg'
import themes from '@/modules/configuration/assets/icons/selectors/themes.svg'
import OptionButton from '@/modules/configuration/components/buttons/option-button'

export default function SettingsPanel() {
  const [selectedOption, setSelectedOption] = useState<
    'language' | 'theme' | null
  >(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en')
  const [selectedTheme, setSelectedTheme] = useState<string>('system')
  // 
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'en'
    const storedTheme = localStorage.getItem('theme') || 'system'
    setSelectedLanguage(storedLanguage)
    setSelectedTheme(storedTheme)
  }, [])
  // 
  const handleBack = (): void => {
    setSelectedOption(null)
  }
  return (
    <div className='w-full h-full rounded-3xl border-[0.05rem] border-[#EBEAEB] border-solid'>
      {/*  */}
      {selectedOption === null && (
        <div className='w-full flex flex-col gap-4 m-8'>
          <button
            className='flex items-center gap-2'
            onClick={() => setSelectedOption('language')}
          >
            <Image src={language} alt='Languages' className='w-5' />
            {selectedLanguage === 'en' ? 'English' : 'Spanish'}
          </button>
          <button
            className='flex items-center gap-2'
            onClick={() => setSelectedOption('theme')}
          >
            <Image src={themes} alt='Themes' className='w-5' />
            {selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)}
          </button>
        </div>
      )}
      {/*  */}
      {selectedOption !== null && (
        <OptionButton component={selectedOption} handleBack={handleBack} />
      )}
    </div>
  )
}
