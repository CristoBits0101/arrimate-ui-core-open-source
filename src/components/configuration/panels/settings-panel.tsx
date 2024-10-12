'use client'

import LanguageSelector from '@/components/configuration/languages/language-selector'

export default function SettingsPanel() {
  return (
    <div className='w-full h-full flex flex-col gap-8'>
      <LanguageSelector />
    </div>
  )
}
