// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import communityDarkBlackSVG from '@/assets/icons/navigation/active/dark-theme/networks/community-dark-icon.svg'
import communityDarkWhiteSVG from '@/assets/icons/navigation/inactive/dark-theme/networks/community-dark-icon.svg'
import communityLightBlackSVG from '@/assets/icons/navigation/active/light-theme/networks/community-light-icon.svg'
import communityLightWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/networks/community-light-icon.svg'

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
