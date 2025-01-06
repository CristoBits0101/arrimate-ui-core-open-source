'use client'

// React hooks
import { useEffect, useState } from 'react'

// Allowed themes
type Theme = 'system' | 'dark' | 'light'

const useThemeSection = () => {
  // Manage the status of selected theme
  const [theme, setTheme] = useState<Theme>('system')

  /**
   * Change the selected theme
   * @param selectedTheme
   */
  const changeTheme = (selectedTheme: Theme): void => {
    setTheme(selectedTheme)
  }

  // Detect the current theme
  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  /**
   * Apply the theme selected
   * @param selectedTheme
   */
  const applyTheme = (theme: Theme): void => {
    // 1. Get the HTML element
    const root = document.documentElement

    // 2. Apply the selected theme to the root element
    switch (theme) {
      case 'dark':
        root.setAttribute('data-mode', 'dark')
        localStorage.setItem('theme', theme)
        break
      case 'light':
        root.setAttribute('data-mode', 'light')
        localStorage.setItem('theme', theme)
        break
      case 'system':
        root.setAttribute('data-mode', '')
        localStorage.removeItem('theme')
        break
    }
  }

  /**
   * Get the stored theme
   */
  const getTheme = () => {
    const storedTheme = localStorage.getItem('theme') as Theme | null
    changeTheme(storedTheme || 'system')
  }

  return {
    theme,
    changeTheme,
    getTheme
  }
}

export default useThemeSection
