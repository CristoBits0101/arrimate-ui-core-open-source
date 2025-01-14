// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import audioDarkBlackSVG from '@/assets/icons/navigation/active/dark-theme/streaming/audio-dark-icon.svg'
import audioDarkWhiteSVG from '@/assets/icons/navigation/inactive/dark-theme/streaming/audio-dark-icon.svg'
import audioLightBlackSVG from '@/assets/icons/navigation/active/light-theme/streaming/audio-light-icon.svg'
import audioLightWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/streaming/audio-light-icon.svg'

export default function Audios() {
  // Get the active theme from the context
  const { activeTheme } = useThemeContext()

  return (
    <NavigationItem
      route='audios'
      blackIcon={
        activeTheme === 'light' ? audioLightBlackSVG : audioDarkBlackSVG
      }
      whiteIcon={
        activeTheme === 'light' ? audioLightWhiteSVG : audioDarkWhiteSVG
      }
      textKey='audios'
    />
  )
}
