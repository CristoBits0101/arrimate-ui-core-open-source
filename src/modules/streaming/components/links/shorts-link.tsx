// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/hooks/sections/useThemeContext'

// Icons
import shortsDarkBlackSVG from '@/modules/streaming/assets/black/shorts-dark.svg'
import shortsDarkWhiteSVG from '@/modules/streaming/assets/white/shorts-dark.svg'
import shortsLightBlackSVG from '@/modules/streaming/assets/black/shorts-light.svg'
import shortsLightWhiteSVG from '@/modules/streaming/assets/white/shorts-light.svg'

export default function Shorts() {
  // Get the active theme from the context
  const { activeTheme } = useThemeContext()
  return (
    <NavigationItem
      route='shorts'
      blackIcon={
        activeTheme === 'light' ? shortsLightBlackSVG : shortsDarkBlackSVG
      }
      whiteIcon={
        activeTheme === 'light' ? shortsLightWhiteSVG : shortsDarkWhiteSVG
      }
      textKey='shorts'
    />
  )
}
