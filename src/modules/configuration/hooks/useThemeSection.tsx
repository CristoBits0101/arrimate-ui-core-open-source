'use client'

// Imports public routes configuration
import { PUBLIC_ROUTES } from '@/config/routes'

// Imports hooks for React functionality
import { useEffect, useState } from 'react'

// Imports the usePathname hook for path detection
import { usePathname } from '@/i18n/routing'

// Declares the Theme type
type Theme = 'system' | 'dark' | 'light'

// Defines the useThemeSection custom hook
const useThemeSection = () => {
  // Gets the current path
  const path = usePathname()

  // State to manage the theme
  const [theme, setTheme] = useState<Theme>('system')

  // Applies the selected theme to the document
  const applyTheme = (selectedTheme: Theme): void => {
    const root = document.documentElement
    switch (selectedTheme) {
      case 'dark':
        root.setAttribute('data-mode', 'dark')
        break
      case 'light':
        root.setAttribute('data-mode', 'light')
        break
      case 'system':
        root.removeAttribute('data-mode')
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? root.setAttribute('data-mode', 'dark')
          : root.setAttribute('data-mode', 'light')
    }
  }

  // Changes the theme and updates localStorage
  const changeTheme = (selectedTheme: Theme): void => {
    setTheme(selectedTheme)
    selectedTheme === 'system'
      ? localStorage.removeItem('theme')
      : localStorage.setItem('theme', selectedTheme)

    applyTheme(selectedTheme)

    // Dispatches a custom event for theme change
    window.dispatchEvent(
      new CustomEvent('theme-change', { detail: selectedTheme })
    )

    // Reloads the page if the path is not public
    if (!PUBLIC_ROUTES.includes(path)) window.location.reload()
  }

  // Initializes the theme on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null
    setTheme(storedTheme || 'system')
    applyTheme(storedTheme || 'system')
  }, [])

  // Returns the current theme and changeTheme function
  return {
    theme,
    changeTheme
  }
}

export default useThemeSection
