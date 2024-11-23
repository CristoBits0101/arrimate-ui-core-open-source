import React from 'react'
import LanguagePanel from '@/modules/auth/components/sections/language-panel'
import ThemePanel from '@/modules/auth/components/sections/theme-panel'

export default function SettingsPanel() {
  return (
    <div className='flex items-center justify-between absolute w-[calc(100%-40px)] h-fit top-5 left-5'>
      <ThemePanel />
      <LanguagePanel />
    </div>
  )
}
