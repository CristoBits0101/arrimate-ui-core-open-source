// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import storiesDarkBlackSVG from '@/assets/icons/navigation/active/dark-theme/feeds/stories-dark-icon.svg'
import storiesDarkWhiteSVG from '@/assets/icons/navigation/inactive/dark-theme/feeds/stories-dark-icon.svg'
import storiesLightBlackSVG from '@/assets/icons/navigation/active/light-theme/feeds/stories-light-icon.svg'
import storiesLightWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/feeds/stories-light-icon.svg'

// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link/navbar-link'

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
