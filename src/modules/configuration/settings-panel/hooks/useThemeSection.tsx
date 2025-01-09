'use client'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Hooks
import { useEffect } from 'react'

// Allowed themes
type Theme = 'system' | 'dark' | 'light'

const useThemeSection = () => {
  const { activeTheme, changeTheme } = useThemeContext()

  /**
   * Apply the selected theme
   * @param theme
   */
  const applyTheme = (theme: Theme) => {
    const root = document.documentElement

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

  // Apply theme directly on mount or when the active theme changes
  useEffect(() => {
    if (activeTheme) {
      applyTheme(activeTheme)
    }
  }, [activeTheme])

  return {
    theme: activeTheme,
    changeTheme
  }
}

export default useThemeSection
