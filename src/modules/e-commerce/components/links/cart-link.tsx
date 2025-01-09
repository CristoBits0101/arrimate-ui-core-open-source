'use client'

// Components
import NavigationItem from '@/layouts/aside/menu/sidebar-link'

// Icons
import cartBlackSVG from '@/modules/e-commerce/assets/icons/black/cart-light.svg'
import cartWhiteSVG from '@/modules/e-commerce/assets/icons/white/cart-light.svg'

export default function Cart() {
  return (
    <NavigationItem
      route='cart'
      blackIcon={cartBlackSVG}
      whiteIcon={cartWhiteSVG}
    />
  )
}
