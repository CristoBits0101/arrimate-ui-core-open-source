'use client'
import Image from 'next/image'
import dark from '@/modules/configuration/assets/icons/buttons/dark.svg'
import light from '@/modules/configuration/assets/icons/buttons/light.svg'
import system from '@/modules/configuration/assets/icons/buttons/system.svg'
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

    window.location.reload()
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      setTheme('system')
    }
  }, [])

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return (
    <section className='w-full h-fit flex flex-col'>
      <button
        className={`text-left cursor-pointer px-8 py-2 hover:bg-[#F4F4F4] flex justify-between items-center gap-2 ${
          theme === 'dark' ? 'bg-[#F4F4F4] font-medium' : ''
        }`}
        onClick={() => handleThemeClick('dark')}
      >
        {t('themes.dark')}
        <Image width={24} height={24} src={dark} alt='Dark icon' className='ml-[0.05rem] aspect-square object-cover' />
      </button>
      <button
        className={`text-left cursor-pointer px-8 py-2 hover:bg-[#F4F4F4] flex justify-between items-center gap-2 ${
          theme === 'light' ? 'bg-[#F4F4F4] font-medium' : ''
        }`}
        onClick={() => handleThemeClick('light')}
      >
        {t('themes.light')}
        <Image width={24} height={24} src={light} alt='Light icon' className='ml-[0.05rem] aspect-square object-cover' />
      </button>
      <button
        className={`text-left cursor-pointer px-8 py-2 hover:bg-[#F4F4F4] flex justify-between items-center gap-2 ${
          theme === 'system' ? 'bg-[#F4F4F4] font-medium' : ''
        }`}
        onClick={() => handleThemeClick('system')}
      >
        {t('themes.system')}
        <Image width={24} height={24} src={system} alt='System icon' className='ml-[0.05rem] aspect-square object-cover' />
      </button>
    </section>
  )
}
