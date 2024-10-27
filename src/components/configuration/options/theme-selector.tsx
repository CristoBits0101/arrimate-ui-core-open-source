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

  // Función para cambiar el tema
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
        // Eliminar preferencias
        root.removeAttribute('data-mode')
        // Aplicar preferencias del sistema
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
    <section className='w-full h-fit flex flex-col gap-2 items-center'>
      <div className='w-full h-fit flex flex-row items-center gap-2'>
        <Image src={themes} alt='Themes' className='w-5' />
        <select
          className='appearance-none flex flex-row items-center outline-none bg-transparent cursor-pointer'
          onChange={handleThemeChange}
          value={theme}
        >
          <option value='dark'>{t('themes.dark')}</option>
          <option value='light'>{t('themes.light')}</option>
          <option value='system'>{t('themes.system')}</option>
        </select>
      </div>
    </section>
  )
}
