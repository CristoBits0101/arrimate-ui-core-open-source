'use client'

// Icons
import Image from 'next/image'
import language from '@/modules/configuration/assets/icons/selectors/language.svg'
import themes from '@/modules/configuration/assets/icons/selectors/themes.svg'

// Components
import LanguageSelector from '@/modules/configuration/components/selectors/language-selector'
import ThemeSelector from '@/modules/configuration/components/selectors/theme-selector'

// Hooks
import { useState, useEffect } from 'react'

export default function SettingsPanel() {
  const [selectedOption, setSelectedOption] = useState<'language' | 'theme' | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en')
  const [selectedTheme, setSelectedTheme] = useState<string>('system')

  useEffect(() => {
    // Get initial values from localStorage
    const storedLanguage = localStorage.getItem('language') || 'en'
    const storedTheme = localStorage.getItem('theme') || 'system'
    setSelectedLanguage(storedLanguage)
    setSelectedTheme(storedTheme)
  }, [])

  const handleBack = () => {
    setSelectedOption(null)
  }

  return (
    <div className='w-full h-full flex flex-col gap-4 p-8 rounded-3xl border-[0.05rem] border-[#bfbdc050] border-solid'>
      {/* Options */}
      {selectedOption === null && (
        <div className='w-full flex flex-col gap-4'>
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
      {/* Languages */}
      {selectedOption === 'language' && (
        <div className='flex flex-col items-center gap-4'>
          <h2 className='text-center text-lg font-medium'>Language</h2>
          <button
            className='self-start'
            onClick={handleBack}
          >
            Back
          </button>
          <LanguageSelector />
        </div>
      )}
      {/* Themes */}
      {selectedOption === 'theme' && (
        <div className='flex flex-col items-center gap-4'>
          <h2 className='text-center text-lg font-medium'>Theme</h2>
          <button
            className='self-start'
            onClick={handleBack}
          >
            Back
          </button>
          <ThemeSelector />
        </div>
      )}
    </div>
  )
}
