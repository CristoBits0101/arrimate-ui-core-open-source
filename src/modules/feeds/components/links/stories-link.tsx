// Context
import { useThemeContext } from '@/modules/configuration/hooks/sections/useThemeContext'

// Icons
import storiesDarkBlackSVG from '@/modules/feeds/assets/icons/links/black/stories-dark.svg'
import storiesDarkWhiteSVG from '@/modules/feeds/assets/icons/links/white/stories-dark.svg'
import storiesLightBlackSVG from '@/modules/feeds/assets/icons/links/black/stories-light.svg'
import storiesLightWhiteSVG from '@/modules/feeds/assets/icons/links/white/stories-light.svg'

// Component
import NavigationItem from '@/modules/navigation/components/links/navbar-link'

export default function Stories() {
  // Get the active theme from the context
  const { activeTheme } = useThemeContext()
  return (
    <NavigationItem
      route='stories'
      blackIcon={
        activeTheme === 'light' ? storiesLightBlackSVG : storiesDarkBlackSVG
      }
      whiteIcon={
        activeTheme === 'light' ? storiesLightWhiteSVG : storiesDarkWhiteSVG
      }
      textKey='stories'
    />
  )
}
