'use client'

// Components
import SearchContent from '@/modules/navigation/searcher/components/boxes/search-content'

// Icons
import historyIcon from '@/assets/icons/buttons/inactive/light-theme/searcher/history-light-icon.svg'

// Intl
import { useTranslations } from 'next-intl'

export default function SearchRecent() {
  // Translations
  const t = useTranslations('Searcher')

  return (
    <SearchContent iconSrc={historyIcon} h2={t('recent')} closeButton={true} />
  )
}
