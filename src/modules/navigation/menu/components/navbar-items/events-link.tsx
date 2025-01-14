// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import eventsDarkBlackSVG from '@/assets/icons/navigation/active/dark-theme/feeds/events-dark-icon.svg'
import eventsDarkWhiteSVG from '@/assets/icons/navigation/inactive/dark-theme/feeds/events-dark-icon.svg'
import eventsLightBlackSVG from '@/assets/icons/navigation/active/light-theme/feeds/events-light-icon.svg'
import eventsLightWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/feeds/events-light-icon.svg'

export default function Events() {
  // Get the active theme from the context
  const { activeTheme } = useThemeContext()
  return (
    <NavigationItem
      route='events'
      blackIcon={
        activeTheme === 'light' ? eventsLightBlackSVG : eventsDarkBlackSVG
      }
      whiteIcon={
        activeTheme === 'light' ? eventsLightWhiteSVG : eventsDarkWhiteSVG
      }
      textKey='events'
    />
  )
}
