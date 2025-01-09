// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/x/hooks/sections/useThemeContext'

// Icons
import eventsDarkBlackSVG from '@/modules/feeds/assets/icons/links/black/events-dark.svg'
import eventsDarkWhiteSVG from '@/modules/feeds/assets/icons/links/white/events-dark.svg'
import eventsLightBlackSVG from '@/modules/feeds/assets/icons/links/black/events-light.svg'
import eventsLightWhiteSVG from '@/modules/feeds/assets/icons/links/white/events-light.svg'

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
