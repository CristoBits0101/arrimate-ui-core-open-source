// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/x/hooks/sections/useThemeContext'

// Icons
import audioDarkBlackSVG from '@/modules/streaming/assets/black/audio-dark.svg'
import audioDarkWhiteSVG from '@/modules/streaming/assets/white/audio-dark.svg'
import audioLightBlackSVG from '@/modules/streaming/assets/black/audio-light.svg'
import audioLightWhiteSVG from '@/modules/streaming/assets/white/audio-light.svg'

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
