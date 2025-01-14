'use client'

// Components
import SearchContent from '@/modules/navigation/searcher/components/boxes/search-content'

// Icons
import searchIcon from '@/assets/icons/buttons/inactive/light-theme/searcher/search-light-icon.svg'

// Intl
import { useTranslations } from 'next-intl'

export default function SearchRecommended() {
  // Translations
  const t = useTranslations('Searcher')

  return (
    <SearchContent
      iconSrc={searchIcon}
      h2={t('recommended')}
      closeButton={true}
    />
  )
}
