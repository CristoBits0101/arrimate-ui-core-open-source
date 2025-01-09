// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import videosDarkBlackSVG from '@/modules/streaming/assets/black/videos-dark.svg'
import videosDarkWhiteSVG from '@/modules/streaming/assets/white/videos-dark.svg'
import videosLightBlackSVG from '@/modules/streaming/assets/black/videos-light.svg'
import videosLightWhiteSVG from '@/modules/streaming/assets/white/videos-light.svg'

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
