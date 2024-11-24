'use client'

import LanguageButton from '@/modules/auth/components/buttons/configuration/language-button'
import enIcon from '@/modules/configuration/assets/icons/buttons/languages/gb.svg'
import esIcon from '@/modules/configuration/assets/icons/buttons/languages/es.svg'
import useLanguageSection from '@/modules/configuration/hooks/useLanguageSection'

export default function LanguagePanel() {
  const { changeLanguage } = useLanguageSection()
  return (
    <section className='w-fit h-fit flex items-center justify-center gap-1 bg-transparent'>
      <LanguageButton
        language='en'
        onClick={changeLanguage}
        iconSrc={enIcon}
        altText='English icon'
      />
      <LanguageButton
        language='es'
        onClick={changeLanguage}
        iconSrc={esIcon}
        altText='Spanish icon'
      />
    </section>
  )
}
