'use client'

import { useEffect, useState } from 'react'

type Theme = 'system' | 'dark' | 'light'

const useThemeSection = () => {
  const [theme, setTheme] = useState<Theme>('system')

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

  const changeTheme = (selectedTheme: Theme): void => {
    setTheme(selectedTheme)
    selectedTheme === 'system'
      ? localStorage.removeItem('theme')
      : localStorage.setItem('theme', selectedTheme)
    window.location.reload()
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null
    setTheme(storedTheme || 'system')
  }, [])

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return {
    theme,
    changeTheme
  }
}

export default useThemeSection
