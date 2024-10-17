'use client'

import LanguageSelector from '@/components/configuration/options/language-selector'
import ThemeSelector from '@/components/configuration/options/theme-selector'

export default function SettingsPanel() {
  return (
    <div className='w-full h-full flex flex-col gap-8 p-8 rounded-3xl border-[0.05rem] border-[#bfbdc050] border-solid'>
      <LanguageSelector />
      <ThemeSelector />
    </div>
  )
}
