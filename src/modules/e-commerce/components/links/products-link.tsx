// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/hooks/sections/useThemeContext'

// Icons
import productsDarkBlackSVG from '@/modules/e-commerce/assets/icons/black/products-dark.svg'
import productsDarkWhiteSVG from '@/modules/e-commerce/assets/icons/white/products-dark.svg'
import productsLightBlackSVG from '@/modules/e-commerce/assets/icons/black/products-light.svg'
import productsLightWhiteSVG from '@/modules/e-commerce/assets/icons/white/products-light.svg'

export default function Products() {
  // Get the active theme from the context
  const { activeTheme } = useThemeContext()
  return (
    <NavigationItem
      route='products'
      blackIcon={
        activeTheme === 'light' ? productsLightBlackSVG : productsDarkBlackSVG
      }
      whiteIcon={
        activeTheme === 'light' ? productsLightWhiteSVG : productsDarkWhiteSVG
      }
      textKey='products'
    />
  )
}
