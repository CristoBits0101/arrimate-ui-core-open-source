'use client'

// Imports the OptionButton component used to render selectable options
import OptionButton from '@/modules/configuration/components/buttons/option-button'

// Imports the English language icon
import enIcon from '@/modules/configuration/assets/icons/buttons/languages/gb.svg'

// Imports the Spanish language icon
import esIcon from '@/modules/configuration/assets/icons/buttons/languages/es.svg'

// Imports a custom hook to manage language selection and locale changes
import useLanguageSection from '@/modules/configuration/hooks/useLanguageSection'

// Imports the useTranslations hook for handling translations
import { useTranslations } from 'next-intl'

// Defines the LanguageSelector component
const LanguageSelector = () => {
  // Extracts the current locale and the function to change languages from the custom hook
  const { locale, changeLanguage } = useLanguageSection()
  // Hook to fetch translations within the 'SettingsPanel' namespace
  const t = useTranslations('SettingsPanel')
  // Renders a section containing language options
  return (
    <section className='w-full h-fit flex flex-col'>
      <OptionButton
        label={t('language.english')}
        isSelected={locale === 'en'}
        onClick={() => changeLanguage('en')}
        iconSrc={enIcon}
        altText='English icon'
      />
      <OptionButton
        label={t('language.spanish')}
        isSelected={locale === 'es'}
        onClick={() => changeLanguage('es')}
        iconSrc={esIcon}
        altText='Spanish icon'
      />
    </section>
  )
}

export default LanguageSelector
