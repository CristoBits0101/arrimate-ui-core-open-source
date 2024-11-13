// components/LanguageSelector.tsx
'use client'

import SelectorButton from '@/modules/configuration/components/buttons/section-button'
import enIcon from '@/modules/configuration/assets/icons/buttons/languages/gb.svg'
import esIcon from '@/modules/configuration/assets/icons/buttons/languages/es.svg'
import useLanguageSection from '@/modules/configuration/hooks/useLanguageSection'
import { useTranslations } from 'next-intl'

const LanguageSelector = () => {
  const { locale, changeLanguage } = useLanguageSection()
  const t = useTranslations('SettingsPanel')

  return (
    <section className="w-full h-fit flex flex-col">
      <SelectorButton
        label={t('language.english')}
        isSelected={locale === 'en'}
        onClick={() => changeLanguage('en')}
        iconSrc={enIcon}
        altText="English icon"
      />
      <SelectorButton
        label={t('language.spanish')}
        isSelected={locale === 'es'}
        onClick={() => changeLanguage('es')}
        iconSrc={esIcon}
        altText="Spanish icon"
      />
    </section>
  )
}

export default LanguageSelector
