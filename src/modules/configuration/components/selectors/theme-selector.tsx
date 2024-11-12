'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

type Theme = 'system' | 'dark' | 'light'

export default function ThemeSelector() {
  const t = useTranslations('SettingsPanel')
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

  const handleThemeClick = (selectedTheme: Theme): void => {
    setTheme(selectedTheme)
    selectedTheme === 'system'
      ? localStorage.removeItem('theme')
      : localStorage.setItem('theme', selectedTheme)
    applyTheme(selectedTheme)
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null
    if (storedTheme) {
      setTheme(storedTheme)
      applyTheme(storedTheme)
    } else {
      applyTheme('system')
    }
  }, [])

  return (
    <section className='w-full h-fit flex flex-col'>
        <button
          className={`text-left cursor-pointer px-8 py-2 hover:bg-[#F4F4F4] ${
            theme === 'dark' ? 'bg-[#F4F4F4] font-medium' : ''
          }`}
          onClick={() => handleThemeClick('dark')}
        >
          {t('themes.dark')}
        </button>
        <button
          className={`text-left cursor-pointer px-8 py-2 hover:bg-[#F4F4F4] ${
            theme === 'light' ? 'bg-[#F4F4F4] font-medium' : ''
          }`}
          onClick={() => handleThemeClick('light')}
        >
          {t('themes.light')}
        </button>
        <button
          className={`text-left cursor-pointer px-8 py-2 hover:bg-[#F4F4F4] ${
            theme === 'system' ? 'bg-[#F4F4F4] font-medium' : ''
          }`}
          onClick={() => handleThemeClick('system')}
        >
          {t('themes.system')}
        </button>
    </section>
  )
}
