// components/LanguageSelector.tsx
'use client'

import SelectorButton from '@/modules/configuration/components/buttons/selector-button'
import enIcon from '@/modules/configuration/assets/icons/selectors/gb.svg'
import esIcon from '@/modules/configuration/assets/icons/selectors/es.svg'
import useLanguageSelector from '@/modules/configuration//hooks/useLanguageSelector'
import { useTranslations } from 'next-intl'

const LanguageSelector = () => {
  const { locale, changeLanguage } = useLanguageSelector()
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
