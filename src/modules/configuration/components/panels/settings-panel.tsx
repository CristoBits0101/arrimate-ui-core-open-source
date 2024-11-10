'use client'

import LanguageSelector from '@/modules/configuration/components/selectors/language-selector'
import ThemeSelector from '@/modules/configuration/components/selectors/theme-selector'

export default function SettingsPanel() {
  return (
    <div className='w-full h-full flex flex-col gap-4 p-8 rounded-3xl border-[0.05rem] border-[#bfbdc050] border-solid'>
      <LanguageSelector />
      <ThemeSelector />
    </div>
  )
}
