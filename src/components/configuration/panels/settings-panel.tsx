'use client'

import LanguageSelector from '@/components/configuration/options/language-selector'
import ThemeSelector from '@/components/configuration/options/theme-selector'

export default function SettingsPanel() {
  return (
    <div className='w-full h-full flex flex-col items-center gap-7 p-7 rounded-2xl border-[0.05rem] border-[#bfbdc050] border-solid shadow shadow-[#edeced]'>
      <LanguageSelector />
      <ThemeSelector />
    </div>
  )
}
