'use client'

// Components
import NavigationItem from '@/modules/navigation/menu/components/sidebar-link/sidebar-link'

// Icons
import cartBlackSVG from '@/assets/icons/navigation/active/light-theme/e-commerce/cart-light-icon.svg'
import cartWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/e-commerce/cart-light-icon.svg'

export default function Cart() {
  return (
    <NavigationItem
      route='cart'
      blackIcon={cartBlackSVG}
      whiteIcon={cartWhiteSVG}
    />
  )
}
