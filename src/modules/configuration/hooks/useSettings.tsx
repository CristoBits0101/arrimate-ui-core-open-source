'use client'

import { useState, useEffect } from 'react'

// Setting options available
type OptionType = 'language' | 'theme' | null

// Custom hook to manage settings
export default function useSettings() {
  // State for the currently selected option
  const [selectedOption, setSelectedOption] = useState<OptionType>(null)

  // State for the currently selected language
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)

  // State for the currently selected theme
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null)

  useEffect(() => {
    // Retrieves stored language or defaults to 'en'
    const storedLanguage = localStorage.getItem('language') || 'en'

    // Retrieves stored theme or defaults to 'system'
    const storedTheme = localStorage.getItem('theme') || 'system'

    // Updates the state with the stored values
    setSelectedLanguage(storedLanguage)
    setSelectedTheme(storedTheme)
  }, [])

  // Sets the selected option for rendering
  const handleSelectOption = (option: OptionType) => setSelectedOption(option)

  // Resets to the initial panel
  const handleBack = () => setSelectedOption(null)

  // Returns states and handlers for settings
  return {
    selectedOption,
    selectedLanguage,
    selectedTheme,
    handleSelectOption,
    handleBack
  }
}
