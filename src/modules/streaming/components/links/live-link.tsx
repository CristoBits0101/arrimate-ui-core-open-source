// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/hooks/sections/useThemeContext'

// Icons
import liveDarkBlackSVG from '@/modules/streaming/assets/black/live-dark.svg'
import liveDarkWhiteSVG from '@/modules/streaming/assets/white/live-dark.svg'
import liveLightBlackSVG from '@/modules/streaming/assets/black/live-light.svg'
import liveLightWhiteSVG from '@/modules/streaming/assets/white/live-light.svg'

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
