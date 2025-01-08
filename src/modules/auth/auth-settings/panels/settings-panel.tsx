// Components
import LanguageSection from '@/modules/auth/auth-settings/sections/language-setting-section'
import ThemeSection from '@/modules/auth/auth-settings/sections/theme-setting-section'

export default function SettingsPanel() {
  return (
    // Panel
    <div className='flex items-center justify-between absolute w-[calc(100%-40px)] h-fit top-5 left-5'>
      <ThemeSection />
      <LanguageSection />
    </div>
  )
}
