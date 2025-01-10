'use client'

// Buttons
import LanguageButton from '@/modules/auth/ui-settings/buttons/language-settings-button'

// Custom
import useLanguageSection from '@/modules/configuration/settings-panel/hooks/useLanguageSection'

// Icons
import enIcon from '@/assets/icons/languages/square/gb-square-icon.svg'
import esIcon from '@/assets/icons/languages/square/es-square-icon.svg'

export default function LanguageSettingSection() {
  // Change language
  const { locale, changeLanguage } = useLanguageSection()
  return (
    <section className='w-fit h-fit flex items-end justify-center gap-1 bg-transparent'>
      {locale === 'es' ? (
        // English
        <LanguageButton
          language='en'
          onClick={() => changeLanguage('en')}
          iconSrc={enIcon}
          altText='English icon'
        />
      ) : (
        // Spanish
        <LanguageButton
          language='es'
          onClick={() => changeLanguage('es')}
          iconSrc={esIcon}
          altText='Spanish icon'
        />
      )}
    </section>
  )
}
