'use client'

// Components
import NavigationItem from '@/modules/navigation/menu/components/sidebar-link/sidebar-link'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import cartDarkBlackSVG from '@/assets/icons/navigation/active/dark-theme/e-commerce/cart-dark-icon.svg'
import cartDarkWhiteSVG from '@/assets/icons/navigation/inactive/dark-theme/e-commerce/cart-dark-icon.svg'
import cartLightBlackSVG from '@/assets/icons/navigation/active/light-theme/e-commerce/cart-light-icon.svg'
import cartLightWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/e-commerce/cart-light-icon.svg'

export default function Cart() {
  const { activeTheme } = useThemeContext()

  return (
    <NavigationItem
      route='cart'
      blackIcon={activeTheme === 'light' ? cartLightBlackSVG : cartDarkBlackSVG}
      whiteIcon={activeTheme === 'light' ? cartLightWhiteSVG : cartDarkWhiteSVG}
    />
  )
}
