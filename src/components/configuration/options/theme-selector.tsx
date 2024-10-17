'use client'

import Image from 'next/image'
import themes from '@/assets/icons/settings/themes.svg'
import { useEffect, useState, MouseEvent } from 'react'
import { useTranslations } from 'next-intl'

// Allowed Themes
type Theme = 'system' | 'dark' | 'light'

export default function ThemeSelector() {
  const t = useTranslations('SettingsPanel')
  const [theme, setTheme] = useState<Theme>('system')

  // Function to apply the selected theme
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

  // Handle theme change when an option is clicked
  const handleThemeChange = (
    e: MouseEvent<HTMLParagraphElement>,
    selectedTheme: Theme
  ): void => {
    e.preventDefault()
    setTheme(selectedTheme)
    selectedTheme === 'system'
      ? localStorage.removeItem('theme')
      : localStorage.setItem('theme', selectedTheme)
    applyTheme(selectedTheme)
  }

  // Setup the initial theme when the page loads
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as Theme | null
      if (storedTheme) {
        setTheme(storedTheme)
        applyTheme(storedTheme)
      } else {
        setTheme('system')
        applyTheme('system')
      }

      // Listen for system theme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleSystemThemeChange = (): void => {
        if (!localStorage.getItem('theme')) applyTheme('system')
      }

      mediaQuery.addEventListener('change', handleSystemThemeChange)

      return () =>
        mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  return (
    <details className='group'>
      <summary className='text-sm font-medium flex justify-between items-center cursor-pointer'>
        <h2 className='flex gap-2'>
          <Image src={themes} alt='Themes' className='w-5 h-5 aspect-square' />
          {t('themes.title')}
        </h2>
      </summary>
      <article className='text-sm flex flex-col'>
        {/* Option for dark theme */}
        <p
          onClick={(e) => handleThemeChange(e, 'dark')}
          className={`cursor-pointer ${
            theme === 'dark' ? 'font-bold' : ''
          }`}
        >
          {t('themes.dark')}
        </p>
        {/* Option for light theme */}
        <p
          onClick={(e) => handleThemeChange(e, 'light')}
          className={`cursor-pointer ${
            theme === 'light' ? 'font-bold' : ''
          }`}
        >
          {t('themes.light')}
        </p>
        {/* Option for system theme */}
        <p
          onClick={(e) => handleThemeChange(e, 'system')}
          className={`cursor-pointer ${
            theme === 'system' ? 'font-bold' : ''
          }`}
        >
          {t('themes.system')}
        </p>
      </article>
    </details>
  )
}
