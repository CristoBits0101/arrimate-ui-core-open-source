'use client'

import LanguageSelector from '@/components/configuration/options/language-selector'
import ModeSelector from '../options/mode-selector'

export default function SettingsPanel() {
  return (
    <div className='w-full h-full flex flex-col gap-5'>
      <LanguageSelector />
      <ModeSelector />
    </div>
  )
}
