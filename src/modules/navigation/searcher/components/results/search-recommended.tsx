'use client'

// Components
import ResultsBox from '@/modules/navigation/searcher/components/boxes/results-box'

// Icons
import searchIcon from '@/assets/icons/buttons/inactive/light-theme/searcher/search-light-icon.svg'

// Intl
import { useTranslations } from 'next-intl'

export default function SearchRecommended() {
  // Translations
  const t = useTranslations('Searcher')

  return (
    <ResultsBox
      iconSrc={searchIcon}
      h2={t('recommended')}
      closeButton={true}
    />
  )
}
