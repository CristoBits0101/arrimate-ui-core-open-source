'use client'

import LanguageSelector from '@/components/configuration/options/language-selector'
import ModeSelector from '@/components/configuration/options/mode-selector'

export default function SettingsPanel() {
  return (
    <section className='w-full h-full flex flex-col gap-5'>
      <LanguageSelector />
      <ModeSelector />
    </section>
  )
}
