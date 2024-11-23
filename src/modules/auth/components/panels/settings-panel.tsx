import React from 'react'
import LanguagePanel from '@/modules/auth/components/sections/language-panel'
import ThemePanel from '@/modules/auth/components/sections/theme-panel'

export default function SettingsPanel() {
  return (
    <div className='flex items-center justify-between absolute w-full h-fit top-0 left-0 bg-red-100'>
      <ThemePanel />
      <LanguagePanel />
    </div>
  )
}
