'use client'

// Components
import ResultsBox from '@/modules/navigation/searcher/components/boxes/results-box'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import historyDarkIcon from '@/assets/icons/buttons/inactive/dark-theme/searcher/history-dark-icon.svg'
import historyLightIcon from '@/assets/icons/buttons/inactive/light-theme/searcher/history-light-icon.svg'

// Intl
import { useTranslations } from 'next-intl'

export default function SearchRecent() {
  // Context
  const { activeTheme } = useThemeContext()

  // Translations
  const t = useTranslations('Searcher')

  return (
    <ResultsBox
      iconSrc={activeTheme === 'light' ? historyLightIcon : historyDarkIcon}
      h2={t('recent')}
      closeButton={true}
    />
  )
}
