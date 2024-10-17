'use client'

import Image from 'next/image'
import themes from '@/assets/icons/settings/themes.svg'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

// Allowed Themes
type Theme = 'system' | 'dark' | 'light'

export default function ThemeSelector() {
  const t = useTranslations('SettingsPanel')
  const [theme, setTheme] = useState<Theme>('system')

  // Function to change the theme
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
        // Delete preferences
        root.removeAttribute('data-mode')
        // Apply system-based preferences
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? root.setAttribute('data-mode', 'dark')
          : root.setAttribute('data-mode', 'light')
    }
  }

  // Manejar el cambio de selección del usuario
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedTheme = e.target.value as Theme
    setTheme(selectedTheme)
    selectedTheme === 'system'
      ? localStorage.removeItem('theme')
      : localStorage.setItem('theme', selectedTheme)
    applyTheme(selectedTheme)
  }

  // Configurar el tema inicial al cargar la página
  useEffect(() => {
    // Verificar si el entorno es el navegador
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as Theme | null
      if (storedTheme) {
        setTheme(storedTheme)
        applyTheme(storedTheme)
      } else {
        setTheme('system')
        applyTheme('system')
      }

      // Escuchar cambios en las preferencias de color del sistema
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleSystemThemeChange = (): void => {
        if (!localStorage.getItem('theme')) applyTheme('system')
      }

      mediaQuery.addEventListener('change', handleSystemThemeChange)

      // Clear effect
      return () =>
        mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  return (
    <section className='text-sm w-full h-fit flex flex-col gap-2 items-center'>
      <div className='w-full h-fit flex flex-row items-center font-medium gap-2'>
        <Image src={themes} alt='Languages' className='w-5' />
        <h2 className='font-semibold flex flex-row items-center'>
          {t('themes.title')}
        </h2>
      </div>
      <select
        className='appearance-none font-normal w-full h-fit pl-1 pr-1 pt-2 pb-2 border-[0.05rem] border-solid border-[#bfbdc050] outline-none bg-[#F4F4F4]'
        onChange={handleThemeChange}
        value={theme}
      >
        <option value='dark'>{t('themes.dark')}</option>
        <option value='light'>{t('themes.light')}</option>
        <option value='system'>{t('themes.system')}</option>
      </select>
    </section>
  )
}
