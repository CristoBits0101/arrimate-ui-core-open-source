'use client'

// Components
import ResultsBox from '@/modules/navigation/searcher/components/boxes/results-box'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import searchDarkIcon from '@/assets/icons/buttons/inactive/dark-theme/searcher/search-dark-icon.svg'
import searchLightIcon from '@/assets/icons/buttons/inactive/light-theme/searcher/search-light-icon.svg'

// Intl
import { useTranslations } from 'next-intl'

export default function SearchRecommended() {
  // Context
  const { activeTheme } = useThemeContext()

  // Translations
  const t = useTranslations('Searcher')

  return (
    <ResultsBox
      iconSrc={activeTheme === 'light' ? searchLightIcon : searchDarkIcon}
      h2={t('recommended')}
      clearButton
      closeButton
    />
  )
}
