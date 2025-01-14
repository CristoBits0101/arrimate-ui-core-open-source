// Component
import NavigationItem from '@/modules/navigation/menu/components/navbar-link/navbar-link'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import productsDarkBlackSVG from '@/assets/icons/navigation/active/dark-theme/e-commerce/products-dark-icon.svg'
import productsDarkWhiteSVG from '@/assets/icons/navigation/inactive/dark-theme/e-commerce/products-dark-icon.svg'
import productsLightBlackSVG from '@/assets/icons/navigation/active/light-theme/e-commerce/products-light-icon.svg'
import productsLightWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/e-commerce/products-light-icon.svg'

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
