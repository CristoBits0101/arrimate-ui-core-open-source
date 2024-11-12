'use client'

import Image from 'next/image'
import themes from '@/modules/configuration/assets/icons/selectors/themes.svg'
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

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedTheme = e.target.value as Theme
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
