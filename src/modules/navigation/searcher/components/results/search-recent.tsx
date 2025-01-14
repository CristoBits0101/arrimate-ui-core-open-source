'use client'

// Components
import ResultsBox from '@/modules/navigation/searcher/components/boxes/results-box'

// Icons
import historyIcon from '@/assets/icons/buttons/inactive/light-theme/searcher/history-light-icon.svg'

// Intl
import { useTranslations } from 'next-intl'

export default function SearchRecent() {
  // Translations
  const t = useTranslations('Searcher')

  return (
    <ResultsBox iconSrc={historyIcon} h2={t('recent')} closeButton={true} />
  )
}
