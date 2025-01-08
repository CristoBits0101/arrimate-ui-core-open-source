'use client'

// Buttons
import LanguageButton from '@/modules/auth/auth-settings/buttons/language-settings-button'

// Custom
import useLanguageSection from '@/modules/configuration/hooks/sections/useLanguageSection'

// Icons
import enIcon from '@/modules/auth/assets/icons/languages/gb.svg'
import esIcon from '@/modules/auth/assets/icons/languages/es.svg'

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
