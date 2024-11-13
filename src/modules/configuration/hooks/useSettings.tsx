'use client'

import { useState, useEffect } from 'react'

type OptionType = 'language' | 'theme' | null

export function useSettings() {
  const [selectedOption, setSelectedOption] = useState<OptionType>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en')
  const [selectedTheme, setSelectedTheme] = useState<string>('system')

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'en'
    const storedTheme = localStorage.getItem('theme') || 'system'
    setSelectedLanguage(storedLanguage)
    setSelectedTheme(storedTheme)
  }, [])

  const handleSelectOption = (option: OptionType) => setSelectedOption(option)
  const handleBack = () => setSelectedOption(null)

  return {
    selectedOption,
    selectedLanguage,
    selectedTheme,
    handleSelectOption,
    handleBack
  }
}
