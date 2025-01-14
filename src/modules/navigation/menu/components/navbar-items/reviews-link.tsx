// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import reviewsDarkBlackSVG from '@/assets/icons/navigation/active/dark-theme/feeds/reviews-dark-icon.svg'
import reviewsDarkWhiteSVG from '@/assets/icons/navigation/inactive/dark-theme/feeds/reviews-dark-icon.svg'
import reviewsLightBlackSVG from '@/assets/icons/navigation/active/light-theme/feeds/reviews-light-icon.svg'
import reviewsLightWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/feeds/reviews-light-icon.svg'

export default function Reviews() {
  // Get the active theme from the context
  const { activeTheme } = useThemeContext()

  return (
    <NavigationItem
      route='reviews'
      blackIcon={
        activeTheme === 'light' ? reviewsLightBlackSVG : reviewsDarkBlackSVG
      }
      whiteIcon={
        activeTheme === 'light' ? reviewsLightWhiteSVG : reviewsDarkWhiteSVG
      }
      textKey='reviews'
    />
  )
}
