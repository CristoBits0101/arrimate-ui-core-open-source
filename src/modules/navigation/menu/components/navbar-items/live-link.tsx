// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import liveDarkBlackSVG from '@/assets/icons/navigation/active/dark-theme/streaming/live-dark-icon.svg'
import liveDarkWhiteSVG from '@/assets/icons/navigation/inactive/dark-theme/streaming/live-dark-icon.svg'
import liveLightBlackSVG from '@/assets/icons/navigation/active/light-theme/streaming/live-light-icon.svg'
import liveLightWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/streaming/live-light-icon.svg'

export default function Live() {
  // Get the active theme from the context
  const { activeTheme } = useThemeContext()
  return (
    <NavigationItem
      route='live'
      blackIcon={activeTheme === 'light' ? liveLightBlackSVG : liveDarkBlackSVG}
      whiteIcon={activeTheme === 'light' ? liveLightWhiteSVG : liveDarkWhiteSVG}
      textKey='live'
    />
  )
}
