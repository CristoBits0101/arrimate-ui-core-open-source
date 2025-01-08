// Components to render
import LanguageSection from '@/modules/auth/auth-settings/language-section'
import ThemeSection from '@/modules/auth/auth-settings/theme-section'

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
