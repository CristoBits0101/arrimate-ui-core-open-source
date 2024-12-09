'use client'

import { useState, useEffect } from 'react'

// Setting options available
type OptionType = 'language' | 'theme' | null

export function useSettings() {
  // Initially selected option
  const [selectedOption, setSelectedOption] = useState<OptionType>(null)
  // Initially selected language
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  // Initially selected theme
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null)

  useEffect(() => {
    // Returns the values stored in localStorage
    const storedLanguage = localStorage.getItem('language') || 'en'
    const storedTheme = localStorage.getItem('theme') || 'system'
    // Update the states with the localStorage values
    setSelectedLanguage(storedLanguage)
    setSelectedTheme(storedTheme)
  }, [])

  // Allows you to set which panel is rendered
  const handleSelectOption = (option: OptionType) => setSelectedOption(option)
  // Allows you to return to the initial panel
  const handleBack = () => setSelectedOption(null)

  return {
    selectedOption,
    selectedLanguage,
    selectedTheme,
    handleSelectOption,
    handleBack,
  }
}
