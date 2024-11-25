import React from 'react'
import LanguageSection from '@/modules/auth/components/sections/language-section'
import ThemeSection from '@/modules/auth/components/sections/theme-section'

export default function SettingsPanel() {
  return (
    <div className='flex items-center justify-between absolute w-[calc(100%-40px)] h-fit top-5 left-5'>
      <ThemeSection />
      <LanguageSection />
    </div>
  )
}
