'use client'

// Imports the LanguageButton component for toggling languages
import LanguageButton from '@/modules/auth/components/buttons/configuration/language-button'

// Imports icons for English and Spanish languages
import enIcon from '@/modules/auth/assets/icons/languages/gb.svg'
import esIcon from '@/modules/auth/assets/icons/languages/es.svg'

// Imports the custom hook for handling language selection
import useLanguageSection from '@/modules/configuration/hooks/sections/useLanguageSection'

// Defines the LanguageSection component
export default function LanguageSection() {
  // Retrieves the current locale and changeLanguage function
  const { locale, changeLanguage } = useLanguageSection()
  return (
    // Renders the language section container
    <section className='w-fit h-fit flex items-end justify-center gap-1 bg-transparent'>
      {locale === 'es' ? (
        // Displays the English button if the current locale is Spanish
        <LanguageButton
          language='en'
          onClick={() => changeLanguage('en')}
          iconSrc={enIcon}
          altText='English icon'
        />
      ) : (
        // Displays the Spanish button if the current locale is not Spanish
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
