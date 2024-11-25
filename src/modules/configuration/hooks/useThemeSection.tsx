'use client'

import { PUBLIC_ROUTES } from '@/config/routes'
import { useEffect, useState } from 'react'
import { usePathname } from '@/i18n/routing'

type Theme = 'system' | 'dark' | 'light'

const useThemeSection = () => {
  const path = usePathname()
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

    applyTheme(selectedTheme)

    window.dispatchEvent(
      new CustomEvent('theme-change', { detail: selectedTheme })
    )

    if (!PUBLIC_ROUTES.includes(path)) window.location.reload()
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null
    setTheme(storedTheme || 'system')
    applyTheme(storedTheme || 'system')
  }, [])

  return {
    theme,
    changeTheme
  }
}

export default useThemeSection
