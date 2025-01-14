// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import videosDarkBlackSVG from '@/assets/icons/navigation/active/dark-theme/streaming/videos-dark-icon.svg'
import videosDarkWhiteSVG from '@/assets/icons/navigation/inactive/dark-theme/streaming/videos-dark-icon.svg'
import videosLightBlackSVG from '@/assets/icons/navigation/active/light-theme/streaming/videos-light-icon.svg'
import videosLightWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/streaming/videos-light-icon.svg'

export default function Videos() {
  // Get the active theme from the context
  const { activeTheme } = useThemeContext()

  return (
    <NavigationItem
      route='videos'
      blackIcon={
        activeTheme === 'light' ? videosLightBlackSVG : videosDarkBlackSVG
      }
      whiteIcon={
        activeTheme === 'light' ? videosLightWhiteSVG : videosDarkWhiteSVG
      }
      textKey='videos'
    />
  )
}
