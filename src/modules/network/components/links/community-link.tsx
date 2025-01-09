// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/hooks/sections/useThemeContext'

// Icons
import communityDarkBlackSVG from '@/modules/network/assets/black/community-dark.svg'
import communityDarkWhiteSVG from '@/modules/network/assets/white/community-dark.svg'
import communityLightBlackSVG from '@/modules/network/assets/black/community-light.svg'
import communityLightWhiteSVG from '@/modules/network/assets/white/community-light.svg'

export default function Community() {
  // Get the active theme from the context
  const { activeTheme } = useThemeContext()
  return (
    <NavigationItem
      route='community'
      blackIcon={
        activeTheme === 'light' ? communityLightBlackSVG : communityDarkBlackSVG
      }
      whiteIcon={
        activeTheme === 'light' ? communityLightWhiteSVG : communityDarkWhiteSVG
      }
      textKey='community'
    />
  )
}
