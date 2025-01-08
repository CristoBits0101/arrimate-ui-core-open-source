// Components
import LanguageSection from '@/modules/auth/auth-settings/language-setting'
import ThemeSection from '@/modules/auth/auth-settings/theme-setting'

// Defines the SettingsPanel component
export default function SettingsPanel() {
  return (
    // Renders the container for theme and language settings
    <div className='flex items-center justify-between absolute w-[calc(100%-40px)] h-fit top-5 left-5'>
      <ThemeSection />
      <LanguageSection />
    </div>
  )
}
