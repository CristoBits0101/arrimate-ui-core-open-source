// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import shortsDarkBlackSVG from '@/assets/icons/navigation/active/dark-theme/streaming/shorts-dark-icon.svg'
import shortsDarkWhiteSVG from '@/assets/icons/navigation/inactive/dark-theme/streaming/shorts-dark-icon.svg'
import shortsLightBlackSVG from '@/assets/icons/navigation/active/light-theme/streaming/shorts-light-icon.svg'
import shortsLightWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/streaming/shorts-light-icon.svg'

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
