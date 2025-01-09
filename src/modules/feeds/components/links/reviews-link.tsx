// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/hooks/sections/useThemeContext'

// Icons
import reviewsDarkBlackSVG from '@/modules/feeds/assets/icons/links/black/reviews-dark.svg'
import reviewsDarkWhiteSVG from '@/modules/feeds/assets/icons/links/white/reviews-dark.svg'
import reviewsLightBlackSVG from '@/modules/feeds/assets/icons/links/black/reviews-light.svg'
import reviewsLightWhiteSVG from '@/modules/feeds/assets/icons/links/white/reviews-light.svg'

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
