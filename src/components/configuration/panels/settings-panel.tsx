'use client'

import LanguageSelector from '@/components/configuration/languages/language-selector'
import ModeSelector from '../themes/mode-selector'

export default function SettingsPanel() {
  return (
    <div className='w-full h-full flex flex-col gap-4'>
      <LanguageSelector />
      <ModeSelector />
    </div>
  )
}
