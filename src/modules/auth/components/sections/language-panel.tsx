'use client'

import LanguageButton from '@/modules/auth/components/buttons/configuration/language-button'
import enIcon from '@/modules/configuration/assets/icons/buttons/languages/gb.svg'
import esIcon from '@/modules/configuration/assets/icons/buttons/languages/es.svg'
import useLanguageSection from '@/modules/configuration/hooks/useLanguageSection'

export default function LanguagePanel() {
  const { locale, changeLanguage } = useLanguageSection()

  return (
    <section className='w-fit h-fit flex items-end justify-center gap-1 bg-transparent'>
      {locale === 'es' ? (
        <LanguageButton
          language='en'
          onClick={() => changeLanguage('en')}
          iconSrc={enIcon}
          altText='English icon'
        />
      ) : (
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
